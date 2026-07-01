import { NextResponse } from 'next/server'

type ContactPayload = {
  name: string
  email: string
  phone?: string
  childName?: string
  childAge?: string
  service?: string
  message: string
}

const FORM_SUBMIT_EMAIL = 'asmita@kidzexploretherapy.com'

function isValidPayload(payload: ContactPayload) {
  return (
    typeof payload.name === 'string' &&
    payload.name.trim().length > 1 &&              
    typeof payload.email === 'string' &&
    payload.email.includes('@') &&
    typeof payload.message === 'string' &&
    payload.message.trim().length > 3
  )
}

export async function POST(req: Request) {
  try {
    const incomingOrigin = req.headers.get('origin')
    const forwardedHost = req.headers.get('x-forwarded-host')
    const fallbackOrigin = forwardedHost ? `https://${forwardedHost}` : 'http://localhost:3000'
    const origin = incomingOrigin || fallbackOrigin
    const referer = `${origin}/contact`

    const payload = (await req.json()) as ContactPayload

    if (!isValidPayload(payload)) {
      return NextResponse.json(
        { success: false, message: 'Please fill all required fields correctly.' },
        { status: 400 }
      )
    }

    const subject = `New Contact Form: ${payload.name}`
    const formattedMessage = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone?.trim() || 'N/A'}`,
      `Child Name: ${payload.childName?.trim() || 'N/A'}`,
      `Child Age: ${payload.childAge?.trim() || 'N/A'}`,
      `Service: ${payload.service?.trim() || 'N/A'}`,
      '',
      'Message:',
      payload.message.trim(),
    ].join('\n')

    const formSubmitResponse = await fetch(
      `https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: origin,
          Referer: referer,
        },
        body: JSON.stringify({
          _subject: subject,
          name: payload.name.trim(),
          email: payload.email.trim(),
          phone: payload.phone?.trim() || '',
          childName: payload.childName?.trim() || '',
          childAge: payload.childAge?.trim() || '',
          service: payload.service?.trim() || '',
          message: payload.message.trim(),
          details: formattedMessage,
          _captcha: 'false',
          _template: 'table',
        }),
      }
    )

    let providerResult: { success?: string | boolean; message?: string } | null = null
    try {
      providerResult = (await formSubmitResponse.json()) as {
        success?: string | boolean
        message?: string
      }
    } catch {
      providerResult = null
    }

    const providerSuccess =
      providerResult?.success === true || providerResult?.success === 'true'

    if (!formSubmitResponse.ok || !providerSuccess) {
      return NextResponse.json(
        {
          success: false,
          message:
            providerResult?.message ||
            'Unable to send message right now. Please try again.',
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
