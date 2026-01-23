export default function Solution() {
  const steps = [
    {
      number: '1',
      title: 'AI finds the homes most likely to sell this year',
      description: 'Or you give us your farm area, past clients, specific streets—whatever you want to own',
    },
    {
      number: '2',
      title: 'We build your campaign',
      description: 'Streaming TV. Mobile apps. Every website they visit. Targeted to those exact households',
    },
    {
      number: '3',
      title: 'They see your face everywhere',
      description: 'Up to 480 times a month. Every device they own',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1d24]">
      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            We target the homes. You close the deals.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Zero waste. Zero guessing. Your name, your face, hundreds of times—in front of people who are actually selling.
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
