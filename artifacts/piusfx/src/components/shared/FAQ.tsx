import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What makes Piusfx signals different from others?",
    answer: "Our signals are backed by institutional-grade analysis and strict risk management. We don't just send entry points; we provide the exact reasoning, stop loss, multiple take profit levels, and trade management updates. Quality over quantity."
  },
  {
    question: "Do I need prior trading experience?",
    answer: "No. If you're a complete beginner, our Trading Course is designed to take you from zero to understanding price action like a pro. The signals group also includes beginner guides to help you execute our setups."
  },
  {
    question: "How many signals are sent per week?",
    answer: "We average 3-7 high-probability setups per week. We are swing and intraday traders focused on A+ setups. We never force trades when the market conditions aren't optimal."
  },
  {
    question: "What broker and platform do you recommend?",
    answer: "We recommend regulated ECN brokers with tight spreads. We use MetaTrader 4/5 for execution and TradingView for analysis. Detailed broker recommendations are inside the member's area."
  },
  {
    question: "Is there a refund policy?",
    answer: "Due to the digital nature of our educational content and live signals, all sales are final. We encourage you to review our free content on YouTube and Telegram before committing."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-card/30 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to know before joining the winning team.</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
