import { motion } from "framer-motion";
import traderPortrait from "@/assets/trader-portrait.png";

export default function About() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
              The Journey
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
              Trading isn't a scheme. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">It's a profession.</span>
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My journey in the forex markets began in 2020. Like many, I was attracted by the freedom trading promised. And like many, I spent my first year blowing accounts, chasing indicators, and letting emotions dictate my actions.
              </p>
              <p>
                The turning point wasn't a magic indicator or a secret strategy. It was treating trading like a professional business. I stripped away the noise, focused on institutional price action, and built a rigid risk management protocol. 
              </p>
              <p>
                Since achieving consistency, my mission has evolved. Piusfx was born from a desire to cut through the BS in the trading industry. No rented lambos. No fake lifestyle marketing. Just raw, unfiltered market reality and the discipline required to extract capital from it consistently.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
              <img 
                src={traderPortrait} 
                alt="Pius - Professional Trader" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-2xl font-bold text-white mb-1">Pius</p>
                <p className="text-primary font-medium">Head Trader & Founder</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-white/5"
        >
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To build a community of self-sufficient, disciplined traders who understand market mechanics and consistently extract profit while aggressively protecting their downside.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">The Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              We trade less to make more. We wait for high-probability setups at key levels of liquidity. If the setup isn't A+, we sit on our hands. Patience pays the trader.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">The Standard</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transparency above all. We show the wins, we show the losses, and we show the exact data behind the system. No edited MT4 screenshots. Just real trading.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
