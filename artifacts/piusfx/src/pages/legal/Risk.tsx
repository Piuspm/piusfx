import LegalPage from "@/components/layout/LegalPage";

export default function Risk() {
  return (
    <LegalPage
      title="Risk Disclaimer"
      effectiveDate="January 1, 2026"
      intro={
        <>
          <p>
            <strong className="text-white">High-Risk Investment Warning.</strong> Trading
            foreign exchange (forex), contracts for difference (CFDs), futures, options,
            cryptocurrencies, and other leveraged or speculative financial instruments carries
            a substantial risk of loss and is not suitable for every investor. You may lose
            some or all of your invested capital, and in some cases you may lose more than
            your initial deposit. You should not trade with money you cannot afford to lose.
          </p>
          <p>
            By using this website and any content, signals, education, mentorship, or
            community service offered by <strong className="text-white">PIUSFX LIMITED COMPANY</strong>{" "}
            ("PIUSFX"), you acknowledge that you have read, understood, and accepted this
            Risk Disclaimer in full.
          </p>
        </>
      }
      sections={[
        {
          heading: "No Investment Advice",
          body: (
            <p>
              All material distributed by PIUSFX — including signals, market commentary,
              videos, courses, livestreams, mentorship calls, community chat, and emails — is
              provided for <strong className="text-white">educational and informational
              purposes only</strong>. Nothing constitutes investment advice, a personal
              recommendation, an offer or solicitation to buy or sell any financial
              instrument, or an inducement to engage in any specific trade. You are solely
              responsible for your trading decisions.
            </p>
          ),
        },
        {
          heading: "Not a Regulated Entity",
          body: (
            <p>
              PIUSFX LIMITED COMPANY is <strong className="text-white">not regulated by the
              Capital Markets Authority (CMA) of Kenya, the Financial Conduct Authority (FCA),
              the Cyprus Securities and Exchange Commission (CySEC), the U.S. Securities and
              Exchange Commission (SEC), or any other financial regulator</strong>. We are not
              a broker-dealer, investment adviser, fund manager, or licensed financial
              professional. The protections that may otherwise apply to clients of regulated
              firms (including dispute resolution and investor compensation schemes) do not
              apply to your relationship with PIUSFX.
            </p>
          ),
        },
        {
          heading: "Leverage Risk",
          body: (
            <p>
              Leveraged products amplify both gains and losses. A small adverse market
              movement can rapidly result in a margin call or the liquidation of your
              positions. Before using leverage, ensure you fully understand how margin works
              with your broker and the maximum loss you are prepared to incur.
            </p>
          ),
        },
        {
          heading: "Past Performance",
          body: (
            <p>
              Any past performance figures, screenshots, statements, or "track records"
              published by PIUSFX or shared by community members are illustrative only and
              <strong className="text-white"> are not indicative of, and do not guarantee,
              future results</strong>. Hypothetical or back-tested performance has inherent
              limitations and may differ materially from actual results obtained when trading
              live. Individual results vary based on skill, capital, broker conditions,
              spreads, slippage, execution, and discipline.
            </p>
          ),
        },
        {
          heading: "Signals & Trade Ideas",
          body: (
            <p>
              Signals and trade ideas are shared as one input among many. They may be late,
              cancelled, partially filled, or invalidated by market conditions before you act
              on them. Spreads, commissions, swaps, slippage, and your broker's execution
              policy will affect your real-world results. PIUSFX is not responsible for any
              loss resulting from your decision to act, or not act, on any signal or idea.
            </p>
          ),
        },
        {
          heading: "Cryptocurrency Risk",
          body: (
            <p>
              Cryptoassets are highly volatile and largely unregulated in many jurisdictions.
              They may experience sharp price swings, periods of illiquidity, exchange
              outages, hacking, or total loss of value. You are solely responsible for
              custody, security, tax obligations, and regulatory compliance relating to any
              cryptoasset activity.
            </p>
          ),
        },
        {
          heading: "Personal Responsibility",
          body: (
            <>
              <p>
                Before trading you should:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Carefully consider your financial objectives, level of experience, and risk appetite;</li>
                <li>Read and understand the risk disclosures provided by your broker;</li>
                <li>Seek independent advice from a licensed financial professional in your jurisdiction if you are uncertain;</li>
                <li>Only trade with funds you can afford to lose without affecting your standard of living.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "No Guarantee of Profit",
          body: (
            <p>
              PIUSFX makes no representation or warranty, express or implied, that you will
              earn any profit, recover any loss, or achieve any specific result by using our
              Services. Trading involves the risk of substantial loss, and most retail traders
              lose money over time.
            </p>
          ),
        },
        {
          heading: "Limitation of Liability",
          body: (
            <p>
              To the fullest extent permitted by law, PIUSFX, its directors, employees,
              instructors, mentors, and affiliates accept no liability for any direct,
              indirect, incidental, consequential, or special losses (including trading
              losses, lost profits, lost opportunities, or lost data) arising from your use of
              the Services or reliance on any information provided. Your sole and exclusive
              remedy for dissatisfaction with the Services is to stop using them.
            </p>
          ),
        },
        {
          heading: "Acknowledgement",
          body: (
            <p>
              By accessing this website or any of our paid or free services, you confirm that
              you understand the risks described above, that you accept full responsibility
              for your trading decisions, and that you will not hold PIUSFX liable for any
              losses you may incur.
            </p>
          ),
        },
      ]}
    />
  );
}
