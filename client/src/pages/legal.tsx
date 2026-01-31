import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, FileText, ChevronDown } from "lucide-react";

export default function Legal() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Legal Information
            </h1>
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transparency and trust are important to us. Please read our Privacy Policy and Terms & Conditions.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-4 mb-12 bg-gray-900/50 border border-gray-800 rounded-lg p-2"
        >
          <Button
            onClick={() => setActiveTab("privacy")}
            className={`flex-1 py-3 rounded-md transition-all ${
              activeTab === "privacy"
                ? "bg-primary text-white"
                : "bg-transparent text-gray-300 hover:text-white"
            }`}
          >
            <Shield className="w-4 h-4 mr-2" />
            Privacy Policy
          </Button>
          <Button
            onClick={() => setActiveTab("terms")}
            className={`flex-1 py-3 rounded-md transition-all ${
              activeTab === "terms"
                ? "bg-primary text-white"
                : "bg-transparent text-gray-300 hover:text-white"
            }`}
          >
            <FileText className="w-4 h-4 mr-2" />
            Terms & Conditions
          </Button>
        </motion.div>

        {/* Content Container */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12 backdrop-blur-sm"
        >
          {activeTab === "privacy" && (
            <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Privacy Policy</h2>
              <p className="text-sm text-gray-400">Last Updated: January 31, 2026</p>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">1. Introduction</h3>
                <p>
                  Welcome to XVerse, the portfolio website of Swastik Pathak ("we," "us," "our," or "Site"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Contact Form Information</h4>
                    <p>When you submit our contact form, we collect:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Message/Project Details</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Automatic Information</h4>
                    <p>When you visit our website, we may automatically collect:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Browser and device information</li>
                      <li>IP address</li>
                      <li>Pages visited and time spent</li>
                      <li>Referral source</li>
                      <li>Interaction data with the AI chatbot</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">AI Chatbot Data</h4>
                    <p>
                      Your interactions with our AI chatbot (Morax) may be logged to improve the service. This includes questions asked and our responses, but no personal identification is required for basic chatbot usage.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h3>
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li><strong>Responding to Inquiries:</strong> To reply to contact form submissions and answer questions about services.</li>
                  <li><strong>Project Discussion:</strong> To discuss potential freelance projects, collaborations, and technical requirements.</li>
                  <li><strong>Email Notifications:</strong> To send confirmation emails and follow-up communications.</li>
                  <li><strong>Service Improvement:</strong> To analyze website usage and improve our portfolio and services.</li>
                  <li><strong>Analytics:</strong> To understand user behavior and optimize our website performance.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">4. How We Protect Your Information</h3>
                <p>We implement appropriate technical, administrative, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure database storage using Supabase PostgreSQL</li>
                  <li>Email transmission via secure SMTP (Gmail)</li>
                  <li>Limited access to personal information</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">5. Data Retention</h3>
                <p>
                  Contact form submissions and message data are retained in our database for business and archival purposes. We retain this information to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Maintain a record of professional communications</li>
                  <li>Provide continuity in project discussions</li>
                  <li>Improve our services based on feedback</li>
                </ul>
                <p className="mt-4">
                  You may request deletion of your personal information at any time by contacting us.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h3>
                <p>Our website may use third-party services for analytics, hosting, and functionality:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li><strong>Supabase:</strong> Database and backend services</li>
                  <li><strong>Gmail/Nodemailer:</strong> Email delivery services</li>
                  <li><strong>Framer Motion:</strong> Animation libraries</li>
                  <li><strong>DiceBear/Multiavatar:</strong> Avatar generation services</li>
                </ul>
                <p className="mt-4">
                  These third parties have their own privacy policies. We are not responsible for their practices.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">7. Your Rights</h3>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of certain data collection</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">8. Contact Us</h3>
                <p>For privacy-related questions or to exercise your rights, please contact:</p>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mt-4">
                  <p><strong>Name:</strong> Swastik Pathak</p>
                  <p><strong>Email:</strong> swastikpathak.107@gmail.com</p>
                  <p><strong>Location:</strong> Ontario, Canada</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h3>
                <p>
                  We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the website constitutes acceptance of the updated policy.
                </p>
              </section>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Terms & Conditions</h2>
              <p className="text-sm text-gray-400">Last Updated: January 31, 2026</p>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h3>
                <p>
                  By accessing and using this website (XVerse), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. Swastik Pathak reserves the right to update these terms and conditions at any time without notice. Changes will be effective immediately upon posting to the website.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">2. Use License</h3>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on the XVerse website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software on the site</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h3>
                <p>
                  The materials on XVerse are provided on an 'as is' basis. Swastik Pathak makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">4. Limitations</h3>
                <p>
                  In no event shall Swastik Pathak or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on XVerse, even if Swastik Pathak or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h3>
                <p>
                  The materials appearing on XVerse could include technical, typographical, or photographic errors. Swastik Pathak does not warrant that any of the materials on its website are accurate, complete, or current. Swastik Pathak may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">6. Links</h3>
                <p>
                  Swastik Pathak has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Swastik Pathak of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">7. Modifications</h3>
                <p>
                  Swastik Pathak may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">8. Governing Law</h3>
                <p>
                  The materials on XVerse are provided on an 'as-is' basis. Swastik Pathak makes no warranties, expressed or implied, regarding the use of these materials. These terms and conditions are governed by and construed in accordance with the laws of Ontario, Canada, and you irrevocably submit to the exclusive jurisdiction of the courts that are located in Ontario, Canada.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">9. Project Services & Freelance Work</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Scope of Work</h4>
                    <p>
                      When engaging in freelance projects or technical consulting through this website, both parties must agree in writing on project scope, deliverables, timeline, and compensation before work commences.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Payment Terms</h4>
                    <p>
                      Payment terms will be discussed and agreed upon before project commencement. Standard terms may include deposits for projects, milestone payments, or full payment upon completion, based on project size and nature.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Intellectual Property</h4>
                    <p>
                      Unless otherwise agreed in writing, all custom code, designs, and work product created for a client project shall become the property of the client upon receipt of full payment. Pre-existing components, libraries, and frameworks retain their original licenses.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Support & Maintenance</h4>
                    <p>
                      Post-launch support and maintenance are available as separate engagements with negotiated terms and pricing.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">10. AI Chatbot</h3>
                <p>
                  The AI chatbot on this website (Morax) is an informational tool designed to answer general questions about Swastik Pathak's skills, projects, and experience. It should not be considered professional legal, technical, or business advice. For specific project needs, please submit a contact form for direct communication.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h3>
                <p>
                  In no case shall Swastik Pathak, its partners, or affiliates be liable to you for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services, even if Swastik Pathak has been advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">12. Contact for Legal Inquiries</h3>
                <p>For any legal questions regarding these Terms & Conditions, please contact:</p>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mt-4">
                  <p><strong>Name:</strong> Swastik Pathak</p>
                  <p><strong>Email:</strong> swastikpathak.107@gmail.com</p>
                  <p><strong>Location:</strong> Ontario, Canada</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">13. Entire Agreement</h3>
                <p>
                  These terms and conditions constitute the entire agreement between you and Swastik Pathak regarding your use of XVerse and supersede all prior negotiations, representations, or agreements, whether written or oral.
                </p>
              </section>
            </div>
          )}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 text-center text-sm text-gray-400"
        >
          <p>
            These policies are effective as of January 31, 2026 and were created to ensure transparency and protect both parties' interests.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
