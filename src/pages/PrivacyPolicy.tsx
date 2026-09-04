export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <div className="page-section">
        <div className="container-custom max-w-3xl">
          <div className="mb-10">
            <span className="section-label">Legal</span>
            <h1 className="font-heading font-bold text-display-sm text-white mt-3 mb-4">Privacy Policy</h1>
            <p className="text-[#4a5680] text-sm">Last updated: September 2026</p>
          </div>

          <div className="prose prose-invert space-y-8">
            {[
              { title: "1. Information We Collect", content: "We collect information you provide directly to us, such as when you fill out our contact form, create an account, or subscribe to our newsletter. This includes your name, email address, phone number, company name, and project details. We also collect usage data such as pages visited and interactions with our website." },
              { title: "2. How We Use Your Information", content: "We use the information we collect to respond to your enquiries and project requests, communicate about services and updates, improve our website and services, send newsletters (only if you opt in), process appointment bookings, and comply with legal obligations." },
              { title: "3. Data Storage and Security", content: "Your data is stored securely. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We do not sell your personal data to third parties." },
              { title: "4. Cookies", content: "We use cookies to enhance your browsing experience, analyze website traffic, and remember your preferences. You can control cookie settings through your browser. Essential cookies required for website functionality cannot be disabled." },
              { title: "5. Third-Party Services", content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party services you use." },
              { title: "6. Your Rights", content: "You have the right to access, correct, or delete your personal data. You can unsubscribe from our newsletter at any time. To exercise your rights, contact us at privacy@massx.in." },
              { title: "7. Contact Us", content: "If you have questions about this Privacy Policy or our data practices, please contact us at privacy@massx.in or write to us at MassX Technology, Mumbai, Maharashtra, India." },
            ].map((section) => (
              <div key={section.title} className="glass-card p-6">
                <h2 className="font-heading font-semibold text-white text-lg mb-3">{section.title}</h2>
                <p className="text-[#8b9cc7] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
