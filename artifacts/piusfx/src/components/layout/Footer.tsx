import { Link } from "wouter";
import { SiX, SiInstagram, SiYoutube, SiTelegram, SiTiktok, SiFacebook } from "react-icons/si";

const socials = [
  { href: "https://x.com/Piuspm_", icon: SiX, label: "X" },
  { href: "https://www.instagram.com/therealpiusfx", icon: SiInstagram, label: "Instagram" },
  { href: "https://www.youtube.com/@therealpiusfx", icon: SiYoutube, label: "YouTube" },
  { href: "https://t.me/therealpiusfx", icon: SiTelegram, label: "Telegram" },
  { href: "https://www.tiktok.com/@therealpiusfx", icon: SiTiktok, label: "TikTok" },
  { href: "https://facebook.com/therealpiusfx", icon: SiFacebook, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold tracking-tight">
                PIUS<span className="text-primary">FX</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Professional forex trading education, signals, and mentorship since 2020. Elevating traders to consistency and profitability.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">Premium Signals</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Trading Course</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">1-on-1 Mentorship</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Free Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Pius</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li>
                <a 
                  href="https://t.me/therealpiusfx"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Testimonials
                </a>
              </li>
                
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/risk" className="hover:text-primary transition-colors">Risk Disclaimer</Link></li>
              <li><Link href="/legal/refund" className="hover:text-primary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center md:text-left md:flex justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Piusfx Trading. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Trading foreign exchange carries a high level of risk.</p>
        </div>
      </div>
    </footer>
  );
}
