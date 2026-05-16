import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - PeakSNR',
  description: 'Privacy Policy for PeakSNR. Learn how we protect your data and privacy.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Introduction</h2>
            <p>
              PeakSNR ("Company", "we", "our", or "us") operates the website and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p>
              We are committed to protecting your privacy and ensuring you have a positive experience on our site. Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Information We Collect</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Information You Provide Directly:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Communication preferences and messages you send us</li>
                  <li>Information you provide through contact forms or inquiries</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Information Collected Automatically:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Browser type, IP address, and operating system</li>
                  <li>Pages visited and time spent on the website</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. How We Use Your Information</h2>
            <p>We use collected information for:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Providing and improving our services</li>
              <li>Responding to your inquiries and customer service requests</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Analyzing website usage and trends</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and access controls. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">5. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">6. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your experience on our website. Cookies are small text files stored on your device that help us recognize you and remember your preferences. You can control cookie settings through your browser. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">7. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt-out of marketing communications</li>
              <li>Access information in a portable format</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">8. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. We will delete or anonymize your data when it is no longer needed, unless we are required to retain it by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">9. Children's Privacy</h2>
            <p>
              Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have collected information from a child under 13, we will delete such information promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-card p-6 rounded-lg border border-border mt-4">
              <p className="font-semibold text-foreground mb-2">PeakSNR</p>
              <p className="text-sm">
                For privacy inquiries and data subject requests, please email us with your request and we will respond within 30 days.
              </p>
              <p className="text-sm mt-4">
                We value your privacy and are committed to maintaining your trust and confidence in our company.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
