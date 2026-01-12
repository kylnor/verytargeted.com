import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - VeryTargeted',
  description: 'Privacy Policy for VeryTargeted - Learn how we collect, use, and protect your data.',
}

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-stealth-carbon mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 12, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                VeryTargeted ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 mb-4">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Fill out our contact form</li>
                <li>Sign up for our services</li>
                <li>Contact us via email or phone</li>
                <li>Subscribe to our newsletter or marketing communications</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include: name, email address, phone number, company name, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Campaign Data</h3>
              <p className="text-gray-700 mb-4">
                When you use our advertising services, we collect information necessary to run your campaigns, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Target addresses and geographic areas</li>
                <li>Campaign preferences and settings</li>
                <li>Creative assets (images, copy, etc.)</li>
                <li>Campaign performance data and analytics</li>
              </ul>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we automatically collect certain information about your device and browsing activity, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Date and time of visits</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Process your requests and transactions</li>
                <li>Create and manage your advertising campaigns</li>
                <li>Communicate with you about our services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">How We Share Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may share your information in the following situations:
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Service Providers</h3>
              <p className="text-gray-700 mb-4">
                We work with third-party service providers to deliver our advertising services, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Programmatic advertising platforms and demand-side platforms (DSPs)</li>
                <li>Data providers for address verification and household matching</li>
                <li>Analytics and tracking services</li>
                <li>Cloud hosting and storage providers</li>
                <li>Payment processors</li>
              </ul>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Legal Requirements</h3>
              <p className="text-gray-700 mb-4">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
              </p>

              <h3 className="text-xl font-semibold text-stealth-carbon mb-3">Business Transfers</h3>
              <p className="text-gray-700 mb-4">
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files that are placed on your device.
              </p>
              <p className="text-gray-700 mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@verytargeted.com" className="text-precision-teal hover:underline">
                  privacy@verytargeted.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">California Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, use, and disclose, and the right to request deletion of your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stealth-carbon mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@verytargeted.com" className="text-precision-teal hover:underline">
                    privacy@verytargeted.com
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
