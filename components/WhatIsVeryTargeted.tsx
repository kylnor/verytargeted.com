export default function WhatIsVeryTargeted() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Main Message */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-stealth-carbon mb-8">
              Every billion-dollar brand uses programmatic ads.
            </h2>

            <p className="text-2xl sm:text-3xl text-gray-700 leading-relaxed mb-6">
              We're the only ones who made it work for real estate.
            </p>

            <div className="inline-block bg-precision-teal/10 border border-precision-teal/30 rounded-2xl px-8 py-4">
              <p className="text-lg text-gray-600">
                <span className="text-precision-teal font-bold text-2xl">90%</span> of all digital advertising dollars go to programmatic
              </p>
            </div>
          </div>

          {/* The Tech Explained */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12 mb-12 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-stealth-carbon mb-6">
              Remember the shoes following you around the internet?
            </h3>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                You look at shoes on Amazon. Suddenly they're on Instagram, YouTube, every website you visit.
              </p>

              <p className="text-stealth-carbon font-semibold">
                Programmatic advertising. Precision, not magic.
              </p>

              <p>
                Now imagine doing this for real estate. Not to a zip code. Not to "homeowners aged 45-65." To <span className="text-precision-teal font-bold">specific addresses</span>. To <span className="text-precision-teal font-bold">actual households</span>.
              </p>

              <p className="text-xl text-stealth-carbon font-bold">
                We built this.
              </p>
            </div>
          </div>

          {/* What You Can Target */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-stealth-carbon rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Household-level targeting</h3>
              <p className="text-gray-300 leading-relaxed">
                Not demographics. Not zip codes. Specific homes. Your farm. Past clients. The luxury subdivision. Three houses on a cul-de-sac.
              </p>
            </div>

            <div className="bg-stealth-carbon rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Cross-device reach</h3>
              <p className="text-gray-300 leading-relaxed">
                Your ad follows them on their TV, phone, tablet, and computer. Up to 480 impressions per home per month.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="text-center">
            <p className="text-xl text-gray-600 italic">
              We don't count the people we reach. <span className="text-stealth-carbon font-semibold">We reach the people who count.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
