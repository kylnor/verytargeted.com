export default function WhatIsVeryTargeted() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Main Message */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-stealth-carbon mb-8">
              Every billion-dollar brand uses programmatic ads. Real estate agents mail postcards.
            </h2>

            <p className="text-2xl sm:text-3xl text-gray-700 leading-relaxed mb-6">
              We made programmatic work for real estate. You're the first to get it.
            </p>

            <div className="inline-block bg-precision-teal/10 border border-precision-teal/30 rounded-2xl px-8 py-4">
              <p className="text-lg text-gray-600">
                <span className="text-precision-teal font-bold text-2xl">90%</span> of all digital ad dollars go to programmatic—because it works.
              </p>
            </div>
          </div>

          {/* The Tech Explained */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12 mb-12 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-stealth-carbon mb-6">
              Remember the Shoes?
            </h3>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                You looked at running shoes on Amazon. Three hours later they're on Instagram. Next morning they're on YouTube. Every website you visit.
              </p>

              <p className="text-stealth-carbon font-semibold">
                Programmatic advertising. Not magic—math.
              </p>

              <p>
                Now we do this for real estate. Not to a zip code (useless). Not to "homeowners aged 45-65" (everyone's target). To <span className="text-precision-teal font-bold">742 Maple Street</span>. To <span className="text-precision-teal font-bold">the Henderson household</span>. To <span className="text-precision-teal font-bold">the three homes on the cul-de-sac you want</span>.
              </p>
            </div>
          </div>

          {/* What You Can Target */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-300 mb-12 shadow-xl">
            <h3 className="text-3xl font-bold text-stealth-carbon mb-8 text-center">Two Kinds of Targeting</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-4 border-gray-300">
                    <th className="text-left py-6 px-6 text-gray-500 font-bold text-xl">What Doesn't Work</th>
                    <th className="text-left py-6 px-6 text-precision-teal font-bold text-xl bg-precision-teal/10">What Works</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-gray-200">
                    <td className="py-5 px-6 text-gray-400 line-through text-lg">Zip codes</td>
                    <td className="py-5 px-6 text-precision-teal font-bold text-lg bg-precision-teal/5">Specific addresses</td>
                  </tr>
                  <tr className="border-b-2 border-gray-200">
                    <td className="py-5 px-6 text-gray-400 line-through text-lg">Demographics</td>
                    <td className="py-5 px-6 text-precision-teal font-bold text-lg bg-precision-teal/5">Actual households</td>
                  </tr>
                  <tr className="border-b-2 border-gray-200">
                    <td className="py-5 px-6 text-gray-400 line-through text-lg">"Homeowners 45-65"</td>
                    <td className="py-5 px-6 text-precision-teal font-bold text-lg bg-precision-teal/5">Your farm area</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-6 text-gray-400 line-through text-lg">Hope they see it</td>
                    <td className="py-5 px-6 text-precision-teal font-bold text-lg bg-precision-teal/5">480 impressions/month guaranteed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-10 pt-6 border-t-2 border-gray-300">
              <p className="text-3xl text-stealth-carbon font-bold">
                We built the second column.
              </p>
              <svg className="w-16 h-16 mx-auto mt-4 text-precision-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
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
