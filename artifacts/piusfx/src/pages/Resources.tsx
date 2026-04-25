import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const resources = [
  {
    title: "Forex Foundations: A Beginner’s Roadmap",
    link: "/resources/My-Forex-Bible.pdf"
  },
  {
    title: "The PIUSFX Risk Management Blueprint",
    link: "/resources/risk-management.pdf"
  },
  {
    title: "Price Action & Market Structure 101",
    link: "/resources/Elliot-Wave-Theory.pdf"
  },
  {
    title: "Trading Psychology Field Manual",
    link: "/resources/TRADING-IN-THE-ZONE-MARK-DOUGLAS.pdf"
  },
  {
    title: "The 1-Page Trading Plan Template",
    link: "/resources/Inside-A-Traders-Mind.pdf"
  }
  {
    title: "Weekly Market Breakdown",
    description: "Get high-probability setups and analysis shared weekly.",
    link: "https://t.me/therealpiusfx"
  }
];

export default function Resources() {
  return (
    <div className="w-full min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Free Trading Resources
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to start trading smarter, manage risk, and stay consistent.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-card/50 border-white/5 h-full hover:border-primary/30 transition-all">
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-4">{res.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {res.description}
                  </p>

                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full">
                      Access Resource <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want More Advanced Setups?
          </h2>
          <p className="text-muted-foreground mb-6">
            Join our Telegram for real-time trades, deeper insights, and live updates.
          </p>

          <a
            href="https://t.me/therealpiusfx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="px-10 py-4 text-lg">
              👉 Join Telegram
            </Button>
          </a>
        </div>

      </div>
    </div>
  );
}
