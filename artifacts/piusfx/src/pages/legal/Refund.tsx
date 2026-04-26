import LegalPage from "@/components/layout/LegalPage";

export default function Refund() {
  return (
    <LegalPage
      title="Refund Policy"
      effectiveDate="April 24, 2026"
      intro={
        <p>
          This Refund Policy explains when and how refunds may be issued for paid services
          offered by <strong className="text-white">PIUSFX LIMITED COMPANY</strong> ("PIUSFX",
          "we", "us"). By purchasing any paid service you agree to the terms set out below.
          This policy should be read together with our Terms of Service.
        </p>
      }
      sections={[
        {
          heading: "General Principle — Digital & Subscription Services",
          body: (
            <p>
              Our products are digital services, educational content, and live mentorship
              delivered immediately on payment. Because access, materials, and proprietary
              know-how are made available as soon as your subscription is activated,{" "}
              <strong className="text-white">all sales are generally final and
              non-refundable</strong> once content has been accessed or a community has been
              joined. The exceptions described below are the only circumstances in which a
              refund may be granted.
            </p>
          ),
        },
        {
          heading: "VIP Signals (Weekly, Monthly, Quarterly)",
          body: (
            <>
              <p>
                <strong className="text-white">No refunds</strong> are provided for VIP signal
                subscriptions once payment has been made and channel access has been granted.
                This is because:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Signal performance depends on market conditions, your broker, and your individual execution and risk management;</li>
                <li>Once you have entered the channel, the proprietary value of the service has been delivered;</li>
                <li>Signals are educational and informational, not a guarantee of profit (see our Risk Disclaimer).</li>
              </ul>
              <p>
                You may cancel at any time and your access will continue until the end of the
                period you have paid for; subscriptions do not auto-renew unless explicitly
                stated at checkout.
              </p>
            </>
          ),
        },
        {
          heading: "Pius Alchemist Theory (Group Mentorship)",
          body: (
            <p>
              The group mentorship program grants immediate access to recorded lessons, group
              channels, and live sessions. Once access has been granted,{" "}
              <strong className="text-white">no refunds</strong> are issued, including in
              cases where you decide the program is not a fit, you do not have time to attend,
              or you fail to apply the material. We strongly encourage you to review the
              curriculum, FAQs, and reach out via support before purchasing.
            </p>
          ),
        },
        {
          heading: "1-on-1 Mentorship",
          body: (
            <>
              <p>
                The 1-on-1 Mentorship is a high-touch, capacity-limited program. Once your
                slot is reserved and onboarding has begun (including custom planning, calendar
                allocation, and access to private materials), the program is{" "}
                <strong className="text-white">non-refundable</strong>.
              </p>
              <p>
                If you are unable to start your program within the agreed window, contact us
                at piusfxke@gmail.com — we may, at our sole discretion, allow a one-time
                rescheduling, defer your start date, or transfer your slot to a comparable
                program of equal value. Such accommodations are a courtesy and not an
                entitlement.
              </p>
            </>
          ),
        },
        {
          heading: "Duplicate or Erroneous Charges",
          body: (
            <p>
              If you are charged twice for the same purchase, or if you can clearly
              demonstrate that a charge was made in error (for example, a technical failure
              that resulted in two transactions for one subscription), contact us within
              <strong className="text-white"> 7 days</strong> of the charge with proof and we
              will refund the duplicate or erroneous portion in full.
            </p>
          ),
        },
        {
          heading: "Service Failure on Our Side",
          body: (
            <p>
              If we are unable to deliver a paid service due to a fault solely on our side
              (for example, prolonged outage of the program with no remedial alternative
              offered), we will work with you in good faith to provide make-good sessions,
              extended access, a credit toward another program, or — at our sole discretion —
              a partial refund proportional to the undelivered portion.
            </p>
          ),
        },
        {
          heading: "Fraud, Chargebacks & Abuse",
          body: (
            <p>
              We reserve the right to refuse refunds and to terminate access (without further
              refund) where we reasonably believe a request is fraudulent, where the buyer has
              shared, resold, or redistributed paid content, where credentials have been
              abused, or where a chargeback has been initiated in bad faith. We may pursue
              recovery of any losses through any lawful means.
            </p>
          ),
        },
        {
          heading: "How to Request a Refund",
          body: (
            <>
              <p>
                If you believe you qualify for a refund under one of the limited exceptions
                above, send an email to{" "}
                <a href="mailto:support@piusfx.com" className="text-primary hover:underline">
                  support@piusfx.com
                </a>{" "}
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your full name and the email used at checkout;</li>
                <li>Date of purchase and the product/plan name;</li>
                <li>Transaction reference or receipt;</li>
                <li>A clear explanation of why you believe a refund is warranted.</li>
              </ul>
              <p>
                We aim to review eligible requests within <strong className="text-white">7
                business days</strong>. Approved refunds are returned to the original payment
                method. Depending on your bank or payment provider, it may take additional
                time for the funds to appear in your account.
              </p>
            </>
          ),
        },
        {
          heading: "Statutory Rights",
          body: (
            <p>
              This policy does not limit any non-waivable rights you may have under applicable
              consumer protection law in your jurisdiction. Where such law grants you stronger
              rights than those described above, those rights will prevail to the extent
              required.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              For all refund requests or questions about this policy, contact{" "}
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
