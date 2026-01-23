export default function SocialProof() {
  const testimonials = [
    {
      quote: "Absolutely amazing! They didn't say 'who do you want to target,' I built my list with them and we started in less than a week! When I got my first marketing report I was shocked how many impressions I was getting, and so were my clients!",
      author: "Harmony",
      role: "",
      initial: "H"
    },
    {
      quote: "I wanted to target a high end event in my city. Two emails and my ad reached more billionaires in a week than I could any other way. The speed and power of these are outstanding!",
      author: "Gene",
      role: "",
      initial: "G"
    },
    {
      quote: "I had been advertising to a high end community for a year and got nothing from it. I added VeryTargeted and I got my first listing 3 weeks later! The seller said 'I see your ads everywhere!' I'm so grateful!",
      author: "Lisa",
      role: "",
      initial: "L"
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stealth-carbon mb-6">
            Real Agents. Real Results.
          </h2>
          <p className="text-xl text-gray-600">
            See what happens when you stop wasting money and start reaching the right homes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-precision-teal/30 transition-all flex flex-col"
            >
              {/* Quote icon */}
              <svg className="w-10 h-10 text-precision-teal/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-gray-600 mb-6 leading-relaxed italic flex-grow">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-6 border-t border-gray-200 mt-auto">
                <div className="w-12 h-12 bg-precision-teal/10 rounded-full flex items-center justify-center text-precision-teal font-bold">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-stealth-carbon">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-stealth-carbon to-stealth-carbon/90 rounded-3xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-precision-teal mb-2">
                60-480
              </div>
              <div className="text-gray-300 text-lg">
                Impressions per home/month
              </div>
              <div className="text-gray-400 text-sm mt-2">
                Choose your tier
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-precision-teal mb-2">
                $1-6
              </div>
              <div className="text-gray-300 text-lg">
                Per home per month
              </div>
              <div className="text-gray-400 text-sm mt-2">
                vs. $1.50 per postcard
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-precision-teal mb-2">
                100%
              </div>
              <div className="text-gray-300 text-lg">
                Household-level accuracy
              </div>
              <div className="text-gray-400 text-sm mt-2">
                Not zip codes or demographics
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
