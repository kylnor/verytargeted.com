'use client'

import { useState } from 'react'

type PricingTier = 'basic' | 'standard' | 'plus' | 'premium'

export default function Pricing() {
  const [homes, setHomes] = useState(200)
  const [tier, setTier] = useState<PricingTier>('standard')
  const [comparisonType, setComparisonType] = useState<'postcards' | 'facebook' | 'zillow'>('postcards')

  const setupFee = 150

  // Tier definitions
  const tiers = {
    basic: { price: 1, impressionsPerDay: 2, impressionsPerMonth: 60, label: 'Basic' },
    standard: { price: 2, impressionsPerDay: 4, impressionsPerMonth: 120, label: 'Standard' },
    plus: { price: 4, impressionsPerDay: 8, impressionsPerMonth: 240, label: 'Plus' },
    premium: { price: 6, impressionsPerDay: 16, impressionsPerMonth: 480, label: 'Premium' },
  }

  const selectedTier = tiers[tier]
  const monthlyPrice = homes * selectedTier.price

  // Calculate value comparison
  const impressionsPerHome = selectedTier.impressionsPerMonth
  const totalImpressions = homes * impressionsPerHome

  // Postcard comparison
  const postcardCost = 1.50
  const postcardEquivalent = totalImpressions * postcardCost

  // Facebook comparison (need to target whole zip code, ~5000 homes to reach your 200)
  const facebookCPM = 12 // Average $12 per thousand impressions
  const wasteMultiplier = 25 // Need to reach 25x more homes to saturate your targets
  const facebookImpressions = totalImpressions * wasteMultiplier
  const facebookCost = (facebookImpressions / 1000) * facebookCPM
  const wastePercentage = ((wasteMultiplier - 1) / wasteMultiplier * 100).toFixed(0)

  // Zillow comparison
  const avgHomeSale = 400000
  const agentCommission = avgHomeSale * 0.03
  const zillowFee = agentCommission * 0.40
  const monthsCovered = Math.floor(zillowFee / monthlyPrice)

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1d24]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            No hidden fees. No complicated tiers. Just results.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-stealth-carbon to-stealth-carbon/80 rounded-3xl p-8 sm:p-12 border border-gray-700 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left side - Pricing details */}
              <div>
                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-white">${setupFee}</span>
                    <span className="text-gray-400 ml-3">one-time setup</span>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-gray-300 text-sm mb-4 font-semibold">Choose your impression level:</label>

                  {/* Tier Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      onClick={() => setTier('basic')}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        tier === 'basic'
                          ? 'border-precision-teal bg-precision-teal/10 shadow-lg'
                          : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                      }`}
                    >
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Basic</div>
                      <div className="text-3xl font-bold text-white mb-1">$1</div>
                      <div className="text-sm text-gray-400">2 per day</div>
                      <div className="text-xs text-gray-500 mt-1">60/month</div>
                    </button>

                    <button
                      onClick={() => setTier('standard')}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        tier === 'standard'
                          ? 'border-precision-teal bg-precision-teal/10 shadow-lg'
                          : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                      }`}
                    >
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Standard</div>
                      <div className="text-3xl font-bold text-white mb-1">$2</div>
                      <div className="text-sm text-gray-400">4 per day</div>
                      <div className="text-xs text-gray-500 mt-1">120/month</div>
                    </button>

                    <button
                      onClick={() => setTier('plus')}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        tier === 'plus'
                          ? 'border-precision-teal bg-precision-teal/10 shadow-lg'
                          : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                      }`}
                    >
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Plus</div>
                      <div className="text-3xl font-bold text-white mb-1">$4</div>
                      <div className="text-sm text-gray-400">8 per day</div>
                      <div className="text-xs text-gray-500 mt-1">240/month</div>
                    </button>

                    <button
                      onClick={() => setTier('premium')}
                      className={`p-4 rounded-xl border-2 transition-all text-left relative ${
                        tier === 'premium'
                          ? 'border-precision-teal bg-precision-teal/10 shadow-lg'
                          : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                      }`}
                    >
                      <div className="text-xs text-precision-teal uppercase tracking-wide mb-1 font-semibold">Premium</div>
                      <div className="text-3xl font-bold text-white mb-1">$6</div>
                      <div className="text-sm text-gray-400">16 per day</div>
                      <div className="text-xs text-gray-500 mt-1">480/month</div>
                      <div className="absolute top-2 right-2 text-xs bg-precision-teal text-white px-2 py-1 rounded">Max</div>
                    </button>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-gray-400 text-sm">Selected:</span>
                        <span className="text-white font-semibold text-lg ml-2">{selectedTier.label}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-precision-teal">${selectedTier.price}<span className="text-sm text-gray-400">/home</span></div>
                        <div className="text-xs text-gray-500">100 home minimum</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-precision-teal/10 border border-precision-teal/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-precision-teal font-semibold text-sm uppercase tracking-wide">
                      Compare To:
                    </p>
                    <select
                      value={comparisonType}
                      onChange={(e) => setComparisonType(e.target.value as 'postcards' | 'facebook' | 'zillow')}
                      className="bg-[#1a1d24] text-white text-sm px-3 py-1.5 rounded-lg border border-gray-700 focus:outline-none focus:border-precision-teal cursor-pointer"
                    >
                      <option value="postcards">Direct Mail</option>
                      <option value="facebook">Facebook Ads</option>
                      <option value="zillow">Zillow Premier</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    {comparisonType === 'postcards' && (
                      <>
                        <div>
                          <p className="text-white font-bold text-lg">
                            {totalImpressions.toLocaleString()} impressions/month
                          </p>
                          <p className="text-gray-400 text-xs">
                            {homes} homes × {selectedTier.impressionsPerMonth} impressions each
                          </p>
                        </div>
                        <div className="border-t border-precision-teal/20 pt-3">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            To mail {totalImpressions.toLocaleString()} postcards would cost{' '}
                            <span className="text-white font-bold text-xl block mt-1">
                              ${postcardEquivalent.toLocaleString()}/month
                            </span>
                          </p>
                          <p className="text-gray-400 text-xs mt-2">
                            vs. ${monthlyPrice.toLocaleString()}/month with VeryTargeted
                          </p>
                        </div>
                      </>
                    )}

                    {comparisonType === 'facebook' && (
                      <>
                        <div>
                          <p className="text-white font-bold text-lg">
                            {totalImpressions.toLocaleString()} impressions on your targets
                          </p>
                          <p className="text-gray-400 text-xs">
                            {homes} specific homes
                          </p>
                        </div>
                        <div className="border-t border-precision-teal/20 pt-3">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Facebook can't target specific homes—only zip codes. To reach your {homes} homes, you'd need{' '}
                            <span className="text-white font-bold text-xl block mt-1">
                              ${facebookCost.toLocaleString()}/month
                            </span>
                          </p>
                          <p className="text-gray-400 text-xs mt-2">
                            With {wastePercentage}% wasted on wrong homes • vs. ${monthlyPrice.toLocaleString()}/month with VeryTargeted
                          </p>
                        </div>
                      </>
                    )}

                    {comparisonType === 'zillow' && (
                      <>
                        <div>
                          <p className="text-white font-bold text-lg">
                            Zillow Premier Agent
                          </p>
                          <p className="text-gray-400 text-xs">
                            40% referral fee per closed deal
                          </p>
                        </div>
                        <div className="border-t border-precision-teal/20 pt-3">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            One $400K home sale to Zillow costs you{' '}
                            <span className="text-white font-bold text-xl block mt-1">
                              ${zillowFee.toLocaleString()}
                            </span>
                          </p>
                          <p className="text-gray-400 text-xs mt-2">
                            That's {monthsCovered} months of VeryTargeted • Plus you keep 100% of your commission
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right side - Calculator */}
              <div className="bg-[#1a1d24] rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Calculate Your Investment</h3>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-3">
                    Number of homes: <span className="text-white font-bold">{homes}</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={homes}
                    onChange={(e) => setHomes(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-precision-teal"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>100</span>
                    <span>1000</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-400">Setup fee</span>
                    <span className="text-white font-semibold">${setupFee}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400">Monthly cost</span>
                    <span className="text-white font-semibold">${monthlyPrice}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-gray-300">First month total</span>
                      <span className="text-3xl font-bold text-precision-teal">
                        ${setupFee + monthlyPrice}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-right">
                      ${monthlyPrice}/month after
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-precision-teal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg"
              >
                Get Started
              </a>
              <p className="text-gray-400 text-sm mt-4">
                No long-term contracts. Cancel anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Why 16 Impressions Callout */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-br from-precision-teal/10 to-precision-teal/5 border border-precision-teal/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-precision-teal/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-precision-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Why 16 impressions per day?</h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  Average household: <span className="text-white font-semibold">2.5 people × 2.5 devices = ~16 daily touchpoints</span>
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Industry research shows <span className="text-white font-semibold">4 impressions per device per day</span> is the sweet spot—visible without being annoying. At 16 impressions/day, we maximize household reach while staying under the ad fatigue threshold.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">What's Included</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Campaign setup & strategy',
              'Creative design & testing',
              'Multi-channel deployment',
              'Performance tracking',
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-stealth-carbon/30 p-4 rounded-xl border border-gray-700">
                <svg className="w-5 h-5 text-precision-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
