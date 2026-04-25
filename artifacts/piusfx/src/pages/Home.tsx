import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, ShieldCheck, Zap, Users, Star, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import abstractFinance from "@/assets/abstract-finance.png";

// A quick animated counter component
function Counter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count}{suffix}</>;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image & gradient overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute inset-0">
            <img src={heroBg} alt="Forex charts background" className="w-full h-full object-cover opacity-20 object-center" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          
          {/* Decorative glows */}
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-secondary/10 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Institutional Grade Analysis
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 tracking-tight text-white drop-shadow-lg">
                Master Forex <br />
                Trading with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Piusfx</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional trader since 2020 helping traders achieve consistency, build discipline, and secure funding through high-probability setups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all group">
                    Join Signals <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 hover:bg-white/5 hover:text-white transition-all group">
                    Enroll in Course <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center text-primary">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="mt-1"><span className="text-foreground font-semibold">15,000+</span> traders trust Piusfx</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] blur-3xl" />
              <img 
                src={abstractFinance} 
                alt="Trading concepts" 
                className="relative z-10 w-full max-w-lg mx-auto transform hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl" 
              />
              
              {/* Floating stat card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Average Win Rate</p>
                    <p className="text-2xl font-bold text-white">82%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-background/50 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 4, suffix: "+", label: "Years Experience" },
              { value: 82, suffix: "%", label: "Success Rate" },
              { value: 15, suffix: "k+", label: "Active Students" },
              { value: 2500, suffix: "+", label: "Signals Delivered" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The Path to Consistency</h2>
            <p className="text-lg text-muted-foreground">Stop guessing. Follow a proven system designed to protect capital and maximize high-probability setups.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Premium Signals",
                desc: "Get my exact entries, stop losses, and take profits sent directly to your phone in real-time.",
                color: "text-secondary"
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Trading Course",
                desc: "A to Z framework covering market structure, liquidity, entry models, and risk management.",
                color: "text-primary"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "1-on-1 Mentorship",
                desc: "Direct access to me. We review your trades, fix your psychology, and build a custom trading plan.",
                color: "text-white"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card/50 border-white/5 hover:border-primary/30 transition-all duration-300 h-full group hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.desc}
                    </p>
                    <Link href="/services" className="inline-flex items-center text-primary font-medium hover:underline">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/30 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Results Speak Louder</h2>
            <p className="text-lg text-muted-foreground">Join thousands of traders who have transformed their accounts and lives.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Before Piusfx I blew 3 accounts. The risk management principles in the course finally made it click. Up 15% this month.",
                author: "James T.",
                role: "Funded Trader"
              },
              {
                quote: "The signals are incredibly precise. Not just the entry, but the updates during the trade help me manage my psychology.",
                author: "Sarah L.",
                role: "Premium Member"
              },
              {
                quote: "Mentorship changed everything. Pius identified exactly what I was doing wrong in 2 sessions. Priceless.",
                author: "Michael D.",
                role: "Full-time Trader"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-background/50 border-white/5 h-full">
                  <CardContent className="p-8">
                    <div className="flex text-primary mb-6">
                      {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-lg italic text-muted-foreground mb-6">"{t.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-white">{t.author}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              See These Results in Real Time
            </h3>
            <p className="text-muted-foreground mb-6">
               Join our Telegram channel for live trade ideas, market insights, and real trader results—no delays.
            </p>

            <a
               href="https://t.me/therealpiusfx"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
             >
              👉 Join Telegram Now
            </a>
          </div>
          
        </div>
      </section>

    </div>
  );
}
