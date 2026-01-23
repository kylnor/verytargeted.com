export default function Hero() {
  return (
    <section className="relative bg-[#1a1d24] min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-precision-teal/10 to-transparent rounded-full blur-3xl"></div>

        {/* Moving dots background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-white rounded-full animate-float-slow"></div>
          <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-white rounded-full animate-float-slower"></div>
          <div className="absolute top-[30%] left-[25%] w-2.5 h-2.5 bg-white rounded-full animate-float-medium"></div>
          <div className="absolute top-[15%] left-[35%] w-1 h-1 bg-white rounded-full animate-float-slow"></div>
          <div className="absolute top-[40%] left-[45%] w-2 h-2 bg-white rounded-full animate-float-slower"></div>
          <div className="absolute top-[25%] left-[55%] w-1.5 h-1.5 bg-white rounded-full animate-float-medium"></div>
          <div className="absolute top-[50%] left-[65%] w-2.5 h-2.5 bg-white rounded-full animate-float-slow"></div>
          <div className="absolute top-[35%] left-[75%] w-1 h-1 bg-white rounded-full animate-float-slower"></div>
          <div className="absolute top-[60%] left-[85%] w-2 h-2 bg-white rounded-full animate-float-medium"></div>
          <div className="absolute top-[45%] left-[95%] w-1.5 h-1.5 bg-white rounded-full animate-float-slow"></div>
          <div className="absolute top-[70%] left-[10%] w-2.5 h-2.5 bg-white rounded-full animate-float-slower"></div>
          <div className="absolute top-[55%] left-[20%] w-1 h-1 bg-white rounded-full animate-float-medium"></div>
          <div className="absolute top-[80%] left-[30%] w-2 h-2 bg-white rounded-full animate-float-slow"></div>
          <div className="absolute top-[65%] left-[40%] w-1.5 h-1.5 bg-white rounded-full animate-float-slower"></div>
          <div className="absolute top-[90%] left-[50%] w-2.5 h-2.5 bg-white rounded-full animate-float-medium"></div>
          <div className="absolute top-[75%] left-[60%] w-1 h-1 bg-white rounded-full animate-float-slow"></div>
          <div className="absolute top-[85%] left-[70%] w-2 h-2 bg-white rounded-full animate-float-slower"></div>
          <div className="absolute top-[95%] left-[80%] w-1.5 h-1.5 bg-white rounded-full animate-float-medium"></div>
          <div className="absolute top-[5%] left-[90%] w-2.5 h-2.5 bg-white rounded-full animate-float-slow"></div>
          <div className="absolute top-[12%] left-[8%] w-1 h-1 bg-white rounded-full animate-float-slower"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-relaxed mb-6">
            You're advertising to people who won't sell for <span className="text-precision-teal">7 years</span>. They <span className="text-precision-teal">throw your postcards away</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl">
            The homes ready to sell this year already exist. We find them—then show them your face 480 times a month across every device they own.
          </p>

          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl">
            Postcards hit the trash. Facebook shows your ad to renters three zip codes away. Zillow hands your commission to whoever pays more. <span className="text-white font-semibold">Pick which one you want to stop funding.</span>
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
    </section>
  )
}
