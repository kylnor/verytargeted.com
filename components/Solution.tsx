export default function Solution() {
  const steps = [
    {
      number: '1',
      title: 'You give us the list',
      description: 'Your farm, past clients, or specific addresses',
    },
    {
      number: '2',
      title: 'We launch the campaign',
      description: 'Ads across premium channels, targeted to those homes',
    },
    {
      number: '3',
      title: 'They see you everywhere',
      description: 'Hundreds of impressions per home, every month',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1d24]">
      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            We target the homes. You get the listings.
          </h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            We use predictive data to identify which homes are most likely to sell. Then we run your ads across streaming TV, mobile apps, and web—directly to those households.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            No wasted impressions. No guessing. Just your name and face, hundreds of times, in front of the people who matter.
          </p>
        </div>

        {/* How It Works steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-precision-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
