export default function Solution() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1d24]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Target specific homes showing early seller signals
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We run hyper-targeted digital ad campaigns across streaming TV, mobile, and web
              that reach specific households—not zip codes, not demographics, individual homes.
            </p>

            <div className="bg-stealth-carbon/30 border border-gray-700 rounded-2xl p-8 mb-8">
              <p className="text-2xl font-bold text-white mb-2">
                We identify the homes. You choose how many.
              </p>
              <p className="text-xl text-precision-teal">
                Then we saturate them until they know your name.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Your ads follow them on their phone, tablet, and smart TV',
                'Reach the same home 400+ times per month',
                'No wasted impressions on people who aren\'t in your market',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-precision-teal rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Big stat callout */}
          <div className="relative">
            {/* Main 400x stat */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 text-center border border-gray-200 mb-8">
              <div className="text-8xl sm:text-9xl font-black text-precision-teal mb-4">
                400<span className="text-6xl">x</span>
              </div>
              <p className="text-xl sm:text-2xl text-stealth-carbon font-medium">
                more impressions per home — for the price of a single postcard
              </p>
            </div>

            {/* Channel breakdown */}
            <div className="bg-stealth-carbon/50 rounded-2xl p-8 border border-gray-700">
              <p className="text-white font-semibold mb-4 text-center">Across every device:</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 bg-precision-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-precision-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">Streaming TV</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-precision-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-precision-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">Mobile</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-precision-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-precision-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">Web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
