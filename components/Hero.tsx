export default function Hero() {
  return (
    <section className="relative bg-[#1a1d24] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-precision-teal/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Stop wasting money on people who will never sell.
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl">
            The homes most likely to sell are already decided. We identify them, then show them your ad up to 480 times a month.
          </p>

          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl">
            No more postcards to the trash. No more Facebook ads to the wrong zip codes. No more Zillow bidding wars.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center bg-precision-teal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              See How It Works
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-stealth-carbon/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-stealth-carbon/70 transition-all border border-gray-700"
            >
              Get Your Proposal
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
