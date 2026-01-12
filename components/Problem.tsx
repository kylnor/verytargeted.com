export default function Problem() {
  const problems = [
    {
      title: "Postcards nobody reads",
      description: "Thousands spent on mailers that go straight to the trash. You're lucky if 1% even glance at it."
    },
    {
      title: "Zillow leads that go nowhere",
      description: "Overpriced leads shared with 5 other agents. You're competing for people who aren't even serious."
    },
    {
      title: "Boosted posts that reach the wrong people",
      description: "Facebook ads shown to your aunt in another state. Zero targeting, zero results, pure waste."
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stealth-carbon mb-6">
            You're wasting money on marketing that doesn't work.
          </h2>
          <p className="text-xl text-gray-600">
            Traditional real estate marketing is broken. You know it, we know it. Here's why:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-accent-orange/30 transition-all"
            >
              <div className="w-12 h-12 bg-precision-teal/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-precision-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stealth-carbon mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-medium">
            Sound familiar? <span className="text-precision-teal">There's a better way.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
