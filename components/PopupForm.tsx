'use client'

import { FormEvent, useState, useEffect } from 'react'
import { 
  X, 
  Send, 
  User, 
  Mail, 
  Phone, 
  Baby, 
  Target, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react'

const FORM_SUBMIT_EMAIL = 'asmita@kidzexploretherapy.com'

export function PopupForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childNameAge: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    // Check sessionStorage to see if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('pehchan_popup_shown')
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('pehchan_popup_shown', 'true')
      }, 2000) // Show popup after 2 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitted(false)

    try {
      const subject = `Popup Contact Form: ${formData.name}`
      const details = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || 'N/A'}`,
        `Child Name & Age: ${formData.childNameAge || 'N/A'}`,
        `Service: ${formData.service || 'N/A'}`,
        '',
        'Message:',
        formData.message,
      ].join('\n')

      const response = await fetch(`https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: subject,
          _captcha: 'false',
          _template: 'table',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          childNameAge: formData.childNameAge,
          service: formData.service,
          message: formData.message,
          details,
        }),
      })

      const data = (await response.json()) as {
        success?: boolean | string
        message?: string
      }

      if (!response.ok || !(data.success === true || data.success === 'true')) {
        setSubmitError(data.message || 'Unable to send message right now. Please try again.')
        return
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        childNameAge: '',
        service: '',
        message: '',
      })

      // Close the modal automatically after 4 seconds of showing the success screen
      setTimeout(() => {
        setIsOpen(false)
      }, 4000)
    } catch {
      setSubmitError('Something went wrong. Please try again in a minute.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    { value: 'dance', label: 'Dance Classes' },
    { value: 'martial-arts', label: 'Martial Arts' },
    { value: 'music-therapy', label: 'Music Therapy' },
    { value: 'yoga', label: 'Kids Yoga' },
    { value: 'nutrition', label: 'Nutrition & Diet' },
    { value: 'other', label: 'Other / Multiple Services' },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      {/* Backdrop Click Dismiss */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#FFF7E6] rounded-2xl overflow-hidden shadow-2xl border-4 border-white animate-pop-in flex flex-col max-h-[90vh] z-10">
        
        {/* Soft Background Blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#EBF7FC] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F0FAF8] rounded-full blur-3xl" />
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white border border-[#E8E8E8] text-[#2D3436] hover:bg-[#FF8C94] hover:text-white transition-colors duration-300 shadow-sm cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content wrapper to prevent offscreen elements on small viewports */}
        <div className="relative z-10 flex-1 overflow-y-auto p-5 md:p-6 scrollbar-thin">
          {submitted ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center text-center py-10 md:py-16">
              <div className="w-20 h-20 bg-[#95E1D3] rounded-full flex items-center justify-center mb-6 animate-bounceSlow shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#2D3436] mb-3">
                Super! Message Sent!
              </h2>
              <p className="text-lg text-[#636E72] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Our superhero team will contact you within 24 hours.
              </p>
              <button
                onClick={handleClose}
                className="mt-8 px-8 py-3 bg-[#2D3436] hover:bg-[#6EC1E4] text-white font-bold rounded-full transition-all duration-300 shadow-md hover:-translate-y-1 cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            /* Form State */
            <div>
              {/* Header */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF8E5] border border-[#FFD166] mb-2 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
                  <span className="text-[10px] font-semibold text-[#2D3436]">Special Session Request</span>
                </div>
                <h2 className="text-2xl font-extrabold text-[#2D3436]">
                  Let's Connect! 🌟
                </h2>
                <p className="text-[#636E72] text-xs max-w-sm mx-auto mt-0.5">
                  Have questions or want to book a session? Leave your details below and we will get back to you!
                </p>
              </div>

              {submitError && (
                <div className="mb-4 p-3 bg-[#FFF0F1] border-2 border-[#FF8C94] rounded-xl text-sm text-[#2D3436]">
                  {submitError}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name & Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="popup-name" className="flex items-center gap-1 text-[11px] font-semibold text-[#2D3436] mb-1">
                      <User className="w-3 h-3 text-[#6EC1E4]" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="popup-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] text-xs placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#6EC1E4] focus:ring-4 focus:ring-[#6EC1E4]/10 transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-email" className="flex items-center gap-1 text-[11px] font-semibold text-[#2D3436] mb-1">
                      <Mail className="w-3 h-3 text-[#FF8C94]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="popup-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] text-xs placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#FF8C94] focus:ring-4 focus:ring-[#FF8C94]/10 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Service Interest */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="popup-phone" className="flex items-center gap-1 text-[11px] font-semibold text-[#2D3436] mb-1">
                      <Phone className="w-3 h-3 text-[#95E1D3]" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="popup-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] text-xs placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#95E1D3] focus:ring-4 focus:ring-[#95E1D3]/10 transition-all"
                      placeholder="+91 7000000000"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-service" className="flex items-center gap-1 text-[11px] font-semibold text-[#2D3436] mb-1">
                      <Target className="w-3 h-3 text-[#95E1D3]" />
                      Service Interest
                    </label>
                    <select
                      id="popup-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] text-xs focus:outline-none focus:border-[#95E1D3] focus:ring-4 focus:ring-[#95E1D3]/10 transition-all cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Child Name & Age (Combined) */}
                <div>
                  <label htmlFor="popup-childNameAge" className="flex items-center gap-1 text-[11px] font-semibold text-[#2D3436] mb-1">
                    <Baby className="w-3.5 h-3.5 text-[#FFD166]" />
                    Child's Name & Age
                  </label>
                  <input
                    type="text"
                    id="popup-childNameAge"
                    name="childNameAge"
                    value={formData.childNameAge}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] text-xs placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#FFD166] focus:ring-4 focus:ring-[#FFD166]/10 transition-all"
                    placeholder="e.g., Leo, 5 years"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="popup-message" className="flex items-center gap-1 text-[11px] font-semibold text-[#2D3436] mb-1">
                    <MessageCircle className="w-3 h-3 text-[#6EC1E4]" />
                    Your Message *
                  </label>
                  <textarea
                    id="popup-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-3 py-2 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] text-xs placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#6EC1E4] focus:ring-4 focus:ring-[#6EC1E4]/10 transition-all resize-none"
                    placeholder="How can we help your child?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full px-5 py-3 rounded-xl font-bold text-xs text-white
                    transition-all duration-300 mt-1 cursor-pointer
                    ${isSubmitting 
                      ? 'bg-[#B2BEC3] cursor-not-allowed' 
                      : 'bg-[#2D3436] hover:bg-[#6EC1E4] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1.5">
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </span>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-center text-[10px] text-[#636E72]">
                  Your information is secure and confidential
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
