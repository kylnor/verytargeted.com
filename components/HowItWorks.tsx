export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'You tell us who to target',
      description: 'Your farm area, past clients, specific streets - whatever makes sense for your business. We\'ll help you build the perfect list.',
    },
    {
      number: '02',
      title: 'We build and launch your campaign',
      description: 'Our team creates your ads and gets them running across streaming TV, mobile, and web. You approve the creative, we handle everything else.',
    },
    {
      number: '03',
      title: 'Those homeowners see you everywhere',
      description: 'Your ads appear on their TV, phone, tablet, and computer - 400+ times per home. Same household, multiple devices, until you\'re the first agent they think of.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stealth-carbon mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to stop wasting money and start reaching the right people.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-start gap-6">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="text-6xl font-bold text-precision-teal leading-none">
                    {step.number}
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-stealth-carbon mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="ml-8 mt-6 mb-6">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-precision-teal to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-precision-teal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg"
          >
            Start Targeting Smarter
          </a>
        </div>
      </div>
    </section>
  )
}
