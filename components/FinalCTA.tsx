'use client'

import { useState } from 'react'

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    smsOptIn: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '', smsOptIn: false })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        console.error('Form submission error:', data.error)
        setSubmitStatus('error')

        // Reset error message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.type === 'checkbox' ? target.checked : target.value

    setFormData({
      ...formData,
      [target.name]: value
    })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1d24]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - CTA content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get Your Proposal. Make Your Decision.
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tell us your market. We send you three things:
            </p>

            {/* Three Cards */}
            <div className="grid gap-4 mb-8">
              <div className="bg-precision-teal/10 border-2 border-precision-teal/30 rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-precision-teal/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-precision-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-xl mb-1">Your custom proposal</p>
                  <p className="text-gray-400 text-sm">Pricing for your area</p>
                </div>
              </div>

              <div className="bg-precision-teal/10 border-2 border-precision-teal/30 rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-precision-teal/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-precision-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-xl mb-1">Video walkthrough</p>
                  <p className="text-gray-400 text-sm">See exactly how this works for your farm</p>
                </div>
              </div>

              <div className="bg-precision-teal/10 border-2 border-precision-teal/30 rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-precision-teal/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-precision-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-xl mb-1">Your "likely to sell" list</p>
                  <p className="text-gray-400 text-sm">The homes ready to move this year</p>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              No sales call. No follow-ups. We explain everything. You decide if you want it.
            </p>

            <div className="bg-precision-teal/20 border-2 border-precision-teal rounded-xl p-6 mt-6">
              <p className="text-white font-bold text-2xl text-center">
                If the answer is no, you keep the list.
              </p>
            </div>

          </div>

          {/* Right side - Contact form */}
          <div className="bg-stealth-carbon rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 bg-precision-teal/10 border border-precision-teal/30 rounded-xl p-4">
                <p className="text-precision-teal font-semibold">
                  Thanks! We'll be in touch soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <p className="text-red-400 font-semibold">
                  Oops! Something went wrong. Please try again or email us directly at hello@verytargeted.com
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1d24] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-precision-teal transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1d24] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-precision-teal transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1d24] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-precision-teal transition-colors"
                  placeholder="(555) 123-4567"
                />

                {formData.phone && (
                  <div className="mt-3 flex items-start">
                    <input
                      type="checkbox"
                      id="smsOptIn"
                      name="smsOptIn"
                      checked={formData.smsOptIn}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-gray-700 bg-[#1a1d24] text-precision-teal focus:ring-precision-teal focus:ring-offset-0"
                    />
                    <label htmlFor="smsOptIn" className="ml-2 text-sm text-gray-400">
                      I agree to receive text messages from VeryTargeted. Message and data rates may apply. Reply STOP to opt out.
                    </label>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                  Tell us about your market
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1d24] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-precision-teal transition-colors resize-none"
                  placeholder="How many homes do you want to target? What's your farm area?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-precision-teal text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get Started'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
