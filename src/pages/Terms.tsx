export default function Terms() {
  return (
    <div className="pt-20">
      <div className="page-section">
        <div className="container-custom max-w-3xl">
          <div className="mb-10">
            <span className="section-label">Legal</span>
            <h1 className="font-heading font-bold text-display-sm text-white mt-3 mb-4">Terms & Conditions</h1>
            <p className="text-[#4a5680] text-sm">Last updated: September 2026</p>
          </div>

          <div className="space-y-5">
            {[
              { title: "1. Acceptance of Terms", content: "By accessing or using the MassX website (massx.in), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services." },
              { title: "2. Services", content: "MassX provides technology services including mobile application development, website development, web application development, UI/UX design, and custom software development. The scope of services is defined in individual project agreements between MassX and the client." },
              { title: "3. Intellectual Property", content: "Upon full payment, clients receive full ownership of source code and deliverables developed specifically for their project. MassX retains ownership of pre-existing tools, libraries, frameworks, and proprietary development assets used in the project." },
              { title: "4. Project Agreements", content: "All development projects are governed by separate project agreements or contracts that outline scope, timelines, deliverables, and payment terms. These Terms & Conditions supplement but do not replace individual project agreements." },
              { title: "5. Payment Terms", content: "Payment terms are specified in individual project contracts. MassX reserves the right to pause or suspend work on projects with outstanding payments. All prices are in Indian Rupees (INR) unless otherwise specified." },
              { title: "6. Confidentiality", content: "MassX treats all client information and project details as confidential. We do not share client information with third parties without explicit consent, except as required by law." },
              { title: "7. Limitation of Liability", content: "MassX shall not be liable for indirect, incidental, or consequential damages arising from the use or inability to use our services. Our liability is limited to the amount paid for the specific service in question." },
              { title: "8. Governing Law", content: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India." },
              { title: "9. Contact", content: "For questions about these Terms & Conditions, contact us at legal@massx.in." },
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
