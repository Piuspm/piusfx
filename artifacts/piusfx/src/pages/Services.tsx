import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, Activity } from "lucide-react";

export default function Services() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Elevate Your Trading</h1>
            <p className="text-lg text-muted-foreground">
              Whether you want to earn while you learn, master the charts yourself, or get direct guidance, we have the framework for your success.
            </p>
          </motion.div>
        </div>

        {/* Service 1: Signals */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32"
        >
          <div className="order-2 lg:order-1">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <Activity className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">VIP Signals Group</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Earn while you learn. Get my exact trade setups sent directly to your phone via Telegram. I trade primarily Gold, US30, GBPJPY, and EURUSD using institutional concepts.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Exact Entry, Stop Loss, and Take Profit levels",
                "Chart markups explaining the reasoning behind every trade",
                "Trade management updates (moving SL to breakeven, taking partials)",
                "Weekly market outlook and recap videos"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 mr-3 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/pricing">
              <Button className="h-12 px-8 bg-secondary hover:bg-secondary/90 text-white">Join Signals <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 bg-card border border-white/5 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none" />
            <div className="space-y-4 relative z-10">
              {/* Mock Telegram Message */}
              <div className="bg-background/80 backdrop-blur rounded-2xl p-4 border border-white/5 max-w-sm mr-auto shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-secondary text-sm">Piusfx Alert</span>
                  <span className="text-xs text-muted-foreground">10:45 AM</span>
                </div>
                <p className="font-mono text-sm text-white mb-2">SELL XAUUSD @ 2035.50</p>
                <p className="font-mono text-xs text-red-400 mb-1">SL: 2040.00 (45 pips)</p>
                <p className="font-mono text-xs text-green-400 mb-3">TP1: 2030.00 | TP2: 2020.00</p>
                <p className="text-xs text-muted-foreground border-t border-white/10 pt-2">Break of structure on 15m, mitigating 1H FVG. Entering on pullback.</p>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-2xl p-4 border border-white/5 max-w-sm mr-auto shadow-lg">
                <p className="text-sm text-white mb-1">🔥 UPDATE XAUUSD</p>
                <p className="text-xs text-muted-foreground">TP1 SMASHED +55 pips. Move SL to breakeven for remaining position. Secure profits!</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service 2: Course */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32"
        >
          <div className="bg-card border border-white/5 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <BookOpen className="w-64 h-64 text-primary" />
            </div>
            <div className="relative z-10 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md border border-primary/30">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
            </div>
          </div>
          <div>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Trading Mastery Course</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Stop relying on others and become a self-sufficient trader. This is the exact A-Z system I use to navigate the markets daily, condensed into easy-to-follow video modules.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Phase 1: Market Fundamentals & Metatrader Setup",
                "Phase 2: Institutional Market Structure & Liquidity",
                "Phase 3: Order Blocks, FVGs, and precise Entry Models",
                "Phase 4: Iron-clad Risk Management & Position Sizing",
                "Phase 5: Trading Psychology & Building a Plan"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/pricing">
              <Button className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90">Enroll in Course <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </motion.div>

        {/* CTA to Mentorship */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-card to-card/50 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Need Direct Guidance?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            The 1-on-1 Mentorship program is designed for serious traders who want to bypass years of trial and error with direct access, live reviews, and personalized coaching.
          </p>
          <a href="https://t.me/pius_fx" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="h-14 px-10 text-base border-white/20 hover:bg-white/10">
              Apply for Mentorship
            </Button>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
