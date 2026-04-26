import LegalPage from "@/components/layout/LegalPage";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="April 24, 2026"
      intro={
        <p>
          PIUSFX LIMITED COMPANY ("PIUSFX", "we", "us", "our") respects your privacy and is
          committed to protecting the personal information you share with us. This Privacy
          Policy explains what information we collect, how we use and protect it, and the
          choices you have. It applies to our website, newsletter, signal channels, mentorship
          programs, and all related services (the "Services").
        </p>
      }
      sections={[
        {
          heading: "Information We Collect",
          body: (
            <>
              <p>We collect the following categories of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Information you provide:</strong> name, email
                  address, phone or messaging handles, payment details (handled by our payment
                  processors), messages you send through our contact form or live chat, and any
                  information you choose to share in mentorship calls or community channels.
                </li>
                <li>
                  <strong className="text-white">Account & subscription data:</strong> the
                  plans you purchase, billing history, support requests, and your access
                  history to gated content.
                </li>
                <li>
                  <strong className="text-white">Automatically collected data:</strong> IP
                  address, browser type, device and operating system, referring URLs, pages
                  viewed, time on page, and similar log information collected through cookies
                  and similar technologies.
                </li>
                <li>
                  <strong className="text-white">Communications:</strong> records of emails,
                  WhatsApp/Telegram messages, and chat transcripts (including via Tawk.to)
                  exchanged with our team.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "How We Use Your Information",
          body: (
            <>
              <p>We use personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and improve the Services;</li>
                <li>Process payments, deliver subscriptions, and grant access to gated channels;</li>
                <li>Send transactional messages, welcome emails, receipts, and important account notices;</li>
                <li>Send marketing communications (such as newsletters and educational content) where you have opted in, with the ability to unsubscribe at any time;</li>
                <li>Respond to support requests and improve customer service;</li>
                <li>Detect, prevent, and address fraud, abuse, or violations of our Terms;</li>
                <li>Comply with legal obligations and enforce our agreements.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Legal Bases for Processing",
          body: (
            <p>
              Where applicable law (such as the Kenya Data Protection Act, the EU/UK GDPR, or
              similar regimes) requires a legal basis, we rely on: (a) performance of a
              contract with you; (b) your consent (which you may withdraw at any time); (c)
              our legitimate interests in operating, securing, and improving the Services;
              and (d) compliance with our legal obligations.
            </p>
          ),
        },
        {
          heading: "Cookies & Similar Technologies",
          body: (
            <p>
              We use first-party and third-party cookies and similar technologies for essential
              site functionality, analytics, and to remember your preferences. Our live chat
              widget (Tawk.to) sets cookies necessary to operate the chat session. You can
              manage or block cookies through your browser settings; some Services may not
              function properly without them.
            </p>
          ),
        },
        {
          heading: "How We Share Information",
          body: (
            <>
              <p>We do not sell your personal information. We may share it with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Service providers</strong> that help us run
                  the Services — including email delivery (e.g., Gmail / Google Workspace),
                  hosting and database providers, payment processors, analytics tools, and
                  customer-support platforms (e.g., Tawk.to). These parties act on our
                  instructions and are bound to confidentiality and security obligations.
                </li>
                <li>
                  <strong className="text-white">Messaging platforms</strong> (Telegram,
                  WhatsApp, etc.) when you choose to interact with us through them; the data
                  you share there is also subject to those platforms' privacy policies.
                </li>
                <li>
                  <strong className="text-white">Legal & safety:</strong> law enforcement,
                  regulators, or other parties when we are required by law, to enforce our
                  Terms, or to protect the rights, property, or safety of PIUSFX, our users,
                  or others.
                </li>
                <li>
                  <strong className="text-white">Business transfers:</strong> in connection
                  with a merger, acquisition, financing, or sale of assets, subject to
                  appropriate confidentiality protections.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "International Data Transfers",
          body: (
            <p>
              Your information may be processed and stored in countries outside your own,
              including jurisdictions that may not provide the same level of data protection
              as your home country. Where required, we use appropriate safeguards (such as
              standard contractual clauses) for international transfers.
            </p>
          ),
        },
        {
          heading: "Data Retention",
          body: (
            <p>
              We retain personal information for as long as necessary to provide the Services,
              comply with legal obligations, resolve disputes, and enforce our agreements.
              When we no longer need the information, we will securely delete or anonymize it.
            </p>
          ),
        },
        {
          heading: "Security",
          body: (
            <p>
              We implement reasonable technical and organizational measures designed to
              protect personal information against unauthorized access, loss, alteration, and
              disclosure — including encryption in transit, restricted access, and the use of
              reputable infrastructure providers. However, no method of transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          ),
        },
        {
          heading: "Your Rights",
          body: (
            <>
              <p>
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct, update, or delete your personal information;</li>
                <li>Object to or restrict certain processing;</li>
                <li>Withdraw consent where processing is based on consent;</li>
                <li>Receive a portable copy of certain information;</li>
                <li>Lodge a complaint with your local data protection authority.</li>
              </ul>
              <p>
                To exercise any of these rights, email{" "}
                <a href="mailto:support@piusfx.com" className="text-primary hover:underline">
                  support@piusfx.com
                </a>
                . We may need to verify your identity before acting on a request.
              </p>
            </>
          ),
        },
        {
          heading: "Children's Privacy",
          body: (
            <p>
              The Services are not directed to children under 18, and we do not knowingly
              collect personal information from minors. If you believe a minor has provided
              personal information to us, please contact us so we can remove it.
            </p>
          ),
        },
        {
          heading: "Marketing & Unsubscribing",
          body: (
            <p>
              You can opt out of marketing emails at any time using the unsubscribe link in
              the email or by contacting support@piusfx.com. We will continue to send
              transactional messages (such as receipts, account notices, and security alerts)
              that are necessary to provide the Services.
            </p>
          ),
        },
        {
          heading: "Changes to This Policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time. The updated version will be
              indicated by a revised effective date. Material changes will be communicated to
              you where appropriate.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              For privacy-related questions or requests, contact{" "}
              <a href="mailto:support@piusfx.com" className="text-primary hover:underline">
                support@piusfx.com
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
