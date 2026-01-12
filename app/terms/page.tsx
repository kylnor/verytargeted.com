import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - VeryTargeted',
  description: 'Terms of Service for VeryTargeted - Read our terms and conditions for using our services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-stealth-carbon border-b border-gray-700 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-precision-teal hover:text-precision-teal/80 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-stealth-carbon mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 12, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") govern your access to and use of VeryTargeted's website and advertising services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 mb-4">
                If you do not agree to these Terms, you may not access or use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Services Description</h2>
              <p className="text-gray-700 mb-4">
                VeryTargeted provides programmatic digital advertising services that enable real estate professionals to deliver targeted advertising campaigns to specific households across multiple devices and platforms, including connected TV, mobile, and web.
              </p>
              <p className="text-gray-700 mb-4">
                Our Services include campaign setup, creative design, audience targeting, campaign management, and performance reporting.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Account Registration and Eligibility</h2>
              <p className="text-gray-700 mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have the legal authority to enter into these Terms</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You are responsible for all activities that occur under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Pricing and Payment</h2>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Service Fees</h3>
              <p className="text-gray-700 mb-4">
                Our standard pricing structure includes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>One-time setup fee: $150</li>
                <li>Monthly fee: $3 per targeted home</li>
                <li>Minimum commitment: 100 homes</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Custom pricing may be available for larger campaigns. All fees are subject to change with 30 days notice.
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Payment Terms</h3>
              <p className="text-gray-700 mb-4">
                Payment is due in advance on a monthly basis. We accept credit cards and ACH payments. If payment is not received by the due date, we reserve the right to suspend or terminate your Services.
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Refunds</h3>
              <p className="text-gray-700 mb-4">
                The setup fee is non-refundable. Monthly service fees are non-refundable once a campaign has launched. We do not provide refunds for unused portions of a billing cycle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Your Responsibilities</h2>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Content and Creative</h3>
              <p className="text-gray-700 mb-4">
                You are responsible for ensuring that all content, creative assets, and targeting data you provide:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Comply with all applicable laws and regulations</li>
                <li>Do not infringe on any third-party intellectual property rights</li>
                <li>Do not contain false, misleading, or deceptive information</li>
                <li>Comply with all real estate advertising regulations, including fair housing laws</li>
                <li>Do not contain offensive, discriminatory, or inappropriate content</li>
              </ul>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Prohibited Uses</h3>
              <p className="text-gray-700 mb-4">
                You may not use our Services to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Engage in discriminatory housing practices</li>
                <li>Harass, abuse, or harm others</li>
                <li>Distribute spam or unsolicited communications</li>
                <li>Interfere with or disrupt our Services</li>
                <li>Use our Services for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Campaign Performance</h2>
              <p className="text-gray-700 mb-4">
                While we strive to deliver high-quality advertising services, we do not guarantee specific results, including but not limited to impressions, clicks, conversions, or sales. Campaign performance depends on many factors beyond our control.
              </p>
              <p className="text-gray-700 mb-4">
                We provide estimated impression counts based on industry standards and historical data, but actual delivery may vary based on inventory availability, targeting parameters, and other factors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                VeryTargeted and its content, features, and functionality are owned by VeryTargeted and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                You retain all rights to the content and creative assets you provide. By using our Services, you grant us a limited, non-exclusive license to use your content solely for the purpose of delivering your advertising campaigns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our Services may integrate with or rely on third-party platforms, including programmatic advertising exchanges, demand-side platforms, and data providers. We are not responsible for the availability, accuracy, or performance of these third-party services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Term and Termination</h2>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Subscription Term</h3>
              <p className="text-gray-700 mb-4">
                Your subscription continues on a month-to-month basis until terminated by either party.
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Termination by You</h3>
              <p className="text-gray-700 mb-4">
                You may cancel your subscription at any time by providing written notice to{' '}
                <a href="mailto:hello@verytargeted.com" className="text-precision-teal hover:underline">
                  hello@verytargeted.com
                </a>
                . Cancellation will take effect at the end of your current billing cycle.
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Termination by Us</h3>
              <p className="text-gray-700 mb-4">
                We may suspend or terminate your access to our Services immediately, without prior notice, if you breach these Terms or engage in any prohibited activities.
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Effect of Termination</h3>
              <p className="text-gray-700 mb-4">
                Upon termination, your right to use our Services will cease immediately. We are not obligated to provide refunds for any fees already paid.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Disclaimers and Limitation of Liability</h2>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Disclaimer of Warranties</h3>
              <p className="text-gray-700 mb-4">
                Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our Services will be uninterrupted, error-free, or secure.
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, VeryTargeted shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities.
              </p>
              <p className="text-gray-700 mb-4">
                Our total liability for any claims arising out of or relating to these Terms or our Services shall not exceed the amount you paid to VeryTargeted in the 12 months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold harmless VeryTargeted and its affiliates, officers, agents, and employees from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Your use of our Services</li>
                <li>Your breach of these Terms</li>
                <li>Your content or creative assets</li>
                <li>Your violation of any laws or third-party rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 mb-4">
                Any disputes arising out of or relating to these Terms or our Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court for infringement of intellectual property rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-700 mb-4">
                Your continued use of our Services after any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Miscellaneous</h2>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Entire Agreement</h3>
              <p className="text-gray-700 mb-4">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and VeryTargeted regarding our Services.
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Severability</h3>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Waiver</h3>
              <p className="text-gray-700 mb-4">
                Our failure to enforce any right or provision of these Terms will not constitute a waiver of such right or provision.
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Assignment</h3>
              <p className="text-gray-700 mb-4">
                You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:terms@verytargeted.com" className="text-precision-teal hover:underline">
                    terms@verytargeted.com
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+18447322732" className="text-precision-teal hover:underline">
                    844.732.2732
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>General Inquiries:</strong>{' '}
                  <a href="mailto:hello@verytargeted.com" className="text-precision-teal hover:underline">
                    hello@verytargeted.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stealth-carbon border-t border-gray-700 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2026 VeryTargeted. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
