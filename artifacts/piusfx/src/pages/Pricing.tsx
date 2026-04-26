import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const SIGNALS_URL = "https://t.me/piusfxbot";
const MENTORSHIP_URL = "https://wa.link/zn66ij";
const COURSE_URL = "https://t.me/pius_fx";

const signalPlans = [
  {
    name: "Weekly VIP Signals",
    desc: "Try the signals service for a full week of premium setups.",
    price: 40,
    period: "week",
    features: [
      "3-7 High Probability Setups",
      "Exact Entry, SL & Multiple TPs",
      "Trade Management Updates",
      "VIP Community Access",
      "24/7 Support"
    ],
    popular: false,
    cta: "Join Weekly",
    href: SIGNALS_URL
  },
  {
    name: "Monthly VIP Signals",
    desc: "The most popular plan for consistent monthly trading income.",
    price: 150,
    period: "month",
    features: [
      "Everything in Weekly",
      "Full Month of Premium Setups",
      "Weekly Market Outlook Video",
      "Priority Telegram Access",
      "Best Value vs Weekly"
    ],
    popular: true,
    cta: "Join Monthly",
    href: SIGNALS_URL
  },
  {
    name: "Quarterly VIP Signals",
    desc: "Commit to consistency and save big with the 3-month plan.",
    price: 400,
    period: "quarter",
    features: [
      "Everything in Monthly",
      "3 Full Months of Signals",
      "Save Over $50 vs Monthly",
      "Locked-in Pricing",
      "Priority Support"
    ],
    popular: false,
    cta: "Join Quarterly",
    href: SIGNALS_URL
  }
];

const educationPlans = [
  {
    name: "Pius Alchemist Theory",
    desc: "Group mentorship covering the complete framework to trade with confidence.",
    price: 500,
    period: "month",
    features: [
      "Group Mentorship Format",
      "50+ Video Lessons (Beginner to Pro)",
      "Institutional Price Action Model",
      "Liquidity & Market Structure Concepts",
      "Risk Management Calculator",
      "Trading Psychology Guide"
    ],
    popular: false,
    cta: "Enroll Now",
    href: COURSE_URL
  },
  {
    name: "1-on-1 Mentorship",
    desc: "Direct access to Pius for accelerated learning and custom strategy building.",
    price: 3500,
    period: "3 months",
    features: [
      "Everything in Course & Signals",
      "Bi-Weekly 1-on-1 Zoom Calls",
      "Daily Trade Reviews via Telegram",
      "Custom Trading Plan Development",
      "Funding Challenge Prep",
      "Direct Priority Access"
    ],
    popular: false,
    cta: "Apply for Mentorship",
    href: MENTORSHIP_URL
  }
];

const plans = [...signalPlans, ...educationPlans];

type Plan = (typeof plans)[number];

function PlanCard({ plan, delay }: { plan: Plan; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative ${plan.popular ? "md:-translate-y-4" : ""}`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider z-10">
          Most Popular
        </div>
      )}
      <Card
        className={`h-full bg-card/60 backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:border-primary/50 ${
          plan.popular
            ? "border-primary shadow-[0_0_30px_rgba(255,215,0,0.15)]"
            : "border-white/10"
        }`}
      >
        {plan.popular && (
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        )}
        <CardContent className="p-6 md:p-8 relative z-10 flex flex-col h-full">
          <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
          <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
            {plan.desc}
          </p>
          <div className="mb-8 pb-8 border-b border-white/10">
            <span className="text-5xl font-display font-bold text-white">
              ${plan.price}
            </span>
            <span className="text-muted-foreground ml-2">/{plan.period}</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {plan.features.map((feature, j) => (
              <li key={j} className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-muted-foreground text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={plan.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              className={`w-full h-12 text-base ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white/5 hover:bg-white/10 text-white"
              }`}
            >
              {plan.cta}
            </Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Pricing() {
  return (
      <div className="w-full pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Invest in Your Edge</h1>
            <p className="text-lg text-muted-foreground">
              Stop paying the market tuition. Choose the path that fits your goals and accelerate your journey to consistent profitability.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">VIP Signals</h2>
          <p className="text-muted-foreground">Real-time premium setups delivered to your phone.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {signalPlans.map((plan, i) => (
            <PlanCard key={`s-${i}`} plan={plan} delay={i * 0.1} />
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Education & Mentorship</h2>
          <p className="text-muted-foreground">Build the skill set to trade independently for life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationPlans.map((plan, i) => (
            <PlanCard key={`e-${i}`} plan={plan} delay={i * 0.1} />
          ))}
        </div>

        {/* keep `plans` referenced for backwards compatibility */}
        <span className="hidden">{plans.length}</span>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-4">Not sure which plan is right for you?</p>
          <a href="https://t.me/pius_fx" target="_blank" rel="noopener noreferrer">
            <Button variant="link" className="text-primary hover:text-primary/80">
              Contact our support team <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
