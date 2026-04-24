import LegalPage from "@/components/layout/LegalPage";

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate="January 1, 2026"
      intro={
        <>
          <p>
            These Terms of Service ("Terms") govern your access to and use of the website,
            educational content, signal services, mentorship programs, and all related
            materials (collectively, the "Services") provided by{" "}
            <strong className="text-white">PIUSFX LIMITED COMPANY</strong> ("PIUSFX", "we",
            "us", or "our"). PIUSFX LIMITED COMPANY is a privately registered entity and is
            <strong className="text-white"> not regulated by the Capital Markets Authority (CMA)
            of Kenya or by any other financial regulatory authority at this time</strong>. By
            accessing or using the Services you agree to be bound by these Terms. If you do
            not agree, do not use the Services.
          </p>
        </>
      }
      sections={[
        {
          heading: "Eligibility",
          body: (
            <>
              <p>
                You must be at least 18 years old (or the age of majority in your jurisdiction)
                and capable of entering into a legally binding contract to use the Services. By
                using the Services you represent that you meet these requirements and that all
                information you provide is accurate, current, and complete.
              </p>
              <p>
                The Services are not directed at, and may not be used by, persons in
                jurisdictions where their use would be unlawful or would subject PIUSFX to
                local registration or licensing requirements that we have not satisfied.
              </p>
            </>
          ),
        },
        {
          heading: "Nature of the Services — No Investment Advice",
          body: (
            <>
              <p>
                All content, signals, analysis, market commentary, courses, mentorship,
                community discussions, and other materials are provided for{" "}
                <strong className="text-white">educational and informational purposes only</strong>.
                Nothing offered through the Services constitutes investment advice, financial
                advice, tax advice, legal advice, a personal recommendation, an offer or
                solicitation to buy or sell any financial instrument, or an inducement to engage
                in any trading activity.
              </p>
              <p>
                PIUSFX is not a broker-dealer, investment adviser, fund manager, signal
                provider regulated under any securities law, or licensed financial professional.
                Any decision to act on information provided through the Services is your sole
                responsibility, taken at your own risk.
              </p>
            </>
          ),
        },
        {
          heading: "Account Registration & Security",
          body: (
            <>
              <p>
                Some Services require you to create an account, subscribe to a channel, or
                join a private community. You agree to provide accurate information, keep your
                credentials confidential, and notify us promptly at piusfxke@gmail.com of any
                unauthorized use. You are responsible for all activity that occurs under your
                account or under credentials issued to you.
              </p>
              <p>
                We may suspend or terminate access where we reasonably believe credentials have
                been shared, resold, or used to access content outside the scope of your
                subscription.
              </p>
            </>
          ),
        },
        {
          heading: "Subscriptions, Payments & Renewals",
          body: (
            <>
              <p>
                Paid Services (including but not limited to VIP Signals, Pius Alchemist Theory
                group mentorship, and 1-on-1 Mentorship) are billed at the prices and intervals
                shown at checkout. All prices are stated in U.S. Dollars (USD) unless otherwise
                noted, and are exclusive of any taxes or transaction fees imposed by your bank
                or local jurisdiction.
              </p>
              <p>
                Subscription terms (weekly, monthly, quarterly, or program-based) begin on the
                date of payment confirmation. Unless explicitly described as auto-renewing at
                checkout, subscriptions do not renew automatically and access ends at the close
                of the billed period. You are responsible for re-subscribing if you wish to
                continue access.
              </p>
              <p>
                Refunds are governed by our separate Refund Policy.
              </p>
            </>
          ),
        },
        {
          heading: "Acceptable Use",
          body: (
            <>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Resell, redistribute, broadcast, screen-share, copy, or otherwise share
                  signals, course materials, recordings, or community content with any third
                  party.</li>
                <li>Reverse engineer, scrape, automate, or attempt to extract content from the
                  Services in bulk.</li>
                <li>Use the Services to harass, defame, threaten, impersonate, or harm any
                  person, or to promote any unlawful activity.</li>
                <li>Use the Services in a manner that could damage, disable, overburden, or
                  impair our infrastructure or interfere with other users.</li>
                <li>Submit false, misleading, or fraudulent payment, identity, or contact
                  information.</li>
              </ul>
              <p>
                Violation of these rules may result in immediate suspension or termination
                without refund, and we reserve the right to pursue any available legal
                remedies.
              </p>
            </>
          ),
        },
        {
          heading: "Intellectual Property",
          body: (
            <>
              <p>
                All content provided through the Services — including the Pius Alchemist
                Theory curriculum, written analysis, signals, charts, recordings, branding,
                logos, software, and any derivative works — is owned by PIUSFX or our licensors
                and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                Subject to your compliance with these Terms, PIUSFX grants you a limited,
                personal, non-exclusive, non-transferable, revocable license to access and
                view the content for your own non-commercial use. No other rights are granted
                by implication, estoppel, or otherwise.
              </p>
            </>
          ),
        },
        {
          heading: "Third-Party Services & Links",
          body: (
            <p>
              The Services may reference or link to third-party platforms (including Telegram,
              WhatsApp, brokers, exchanges, and social networks). PIUSFX does not control and
              is not responsible for the content, terms, privacy practices, or availability of
              any third-party service. Your use of any third-party service is governed by that
              service's own terms.
            </p>
          ),
        },
        {
          heading: "Risk Disclosure",
          body: (
            <p>
              Trading foreign exchange, derivatives, contracts for difference, cryptocurrencies,
              and other leveraged products carries a high level of risk and may not be suitable
              for all investors. You may lose some or all of your invested capital. Past
              performance — whether claimed by us or by any third party — is not indicative of
              future results. You should carefully consider your objectives, financial
              situation, level of experience, and risk appetite before trading, and seek
              independent advice from a licensed professional where appropriate. Please review
              our full Risk Disclaimer for additional detail.
            </p>
          ),
        },
        {
          heading: "Disclaimer of Warranties",
          body: (
            <p>
              THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              ACCURACY, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR
              USAGE OF TRADE. PIUSFX DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED,
              ERROR-FREE, SECURE, OR THAT ANY SIGNAL OR ANALYSIS WILL BE PROFITABLE.
            </p>
          ),
        },
        {
          heading: "Limitation of Liability",
          body: (
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PIUSFX, ITS DIRECTORS,
              OFFICERS, EMPLOYEES, CONTRACTORS, AND AFFILIATES WILL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR
              ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR TRADING LOSSES, ARISING OUT OF
              OR RELATING TO YOUR USE OF (OR INABILITY TO USE) THE SERVICES, EVEN IF ADVISED
              OF THE POSSIBILITY OF SUCH DAMAGES. OUR AGGREGATE LIABILITY FOR ANY CLAIM
              ARISING OUT OF OR RELATING TO THE SERVICES WILL NOT EXCEED THE GREATER OF (A)
              THE AMOUNT YOU PAID TO PIUSFX IN THE 30 DAYS PRECEDING THE EVENT GIVING RISE TO
              THE CLAIM, OR (B) USD 50.
            </p>
          ),
        },
        {
          heading: "Indemnification",
          body: (
            <p>
              You agree to defend, indemnify, and hold harmless PIUSFX and its affiliates from
              and against any claims, liabilities, damages, losses, and expenses (including
              reasonable legal fees) arising out of or in any way connected with your access to
              or use of the Services, your trading or investment activity, your violation of
              these Terms, or your violation of any rights of any third party.
            </p>
          ),
        },
        {
          heading: "Termination",
          body: (
            <p>
              We may suspend or terminate your access to the Services at any time, with or
              without notice, for conduct that we reasonably believe violates these Terms,
              applicable law, or is harmful to other users, PIUSFX, or third parties. Upon
              termination your right to access the Services will cease immediately. Sections
              that by their nature should survive termination (including intellectual property,
              disclaimers, limitations of liability, and indemnification) will survive.
            </p>
          ),
        },
        {
          heading: "Changes to the Services & Terms",
          body: (
            <p>
              We may modify the Services or these Terms from time to time. Material changes
              will be communicated by updating the effective date above and, where appropriate,
              by additional notice. Your continued use of the Services after changes become
              effective constitutes your acceptance of the revised Terms.
            </p>
          ),
        },
        {
          heading: "Governing Law & Disputes",
          body: (
            <p>
              These Terms are governed by the laws of the Republic of Kenya, without regard to
              conflict-of-law principles. The parties will attempt in good faith to resolve any
              dispute through informal negotiation before resorting to formal proceedings. Any
              dispute that cannot be resolved informally shall be brought exclusively in the
              competent courts located in Nairobi, Kenya, and you consent to the personal
              jurisdiction of those courts.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              For questions about these Terms, contact{" "}
              <a href="mailto:piusfxke@gmail.com" className="text-primary hover:underline">
                piusfxke@gmail.com
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
