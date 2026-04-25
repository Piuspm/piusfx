import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SiX, SiInstagram, SiYoutube, SiTelegram, SiWhatsapp, SiTiktok, SiFacebook } from "react-icons/si";
import { Mail, MapPin, Send } from "lucide-react";

const WHATSAPP_URL = "https://wa.link/zn66ij";
const SUPPORT_EMAIL = "piusfxke@gmail.com";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error || "Failed to send message");

      toast({
        title: "Message Sent!",
        description: "We've received your message and will reply within 24 hours.",
      });
      form.reset();
    } catch (err: any) {
      toast({
        title: "Something went wrong",
        description: err?.message || "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full pt-32 pb-24 min-h-screen relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a question about our services? Need support with your membership? Reach out and our team will assist you.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div className="bg-card/50 border border-white/5 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Direct Channels</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <SiWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Fastest Response</p>
                    <p className="text-lg font-medium text-white">WhatsApp Support</p>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto"
                  >
                    <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white">
                      Message Us
                    </Button>
                  </a>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mr-4 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email Support</p>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-lg font-medium text-white hover:text-primary transition-colors"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mr-4 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Global Presence</p>
                    <p className="text-lg font-medium text-white">Remote / Online</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Follow the Journey</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <SiYoutube className="w-6 h-6" />, color: "hover:bg-red-600 hover:text-white", href: "https://www.youtube.com/@therealpiusfx", label: "YouTube" },
                  { icon: <SiInstagram className="w-6 h-6" />, color: "hover:bg-pink-600 hover:text-white", href: "https://www.instagram.com/therealpiusfx", label: "Instagram" },
                  { icon: <SiX className="w-6 h-6" />, color: "hover:bg-blue-400 hover:text-white", href: "https://x.com/Piuspm_", label: "X" },
                  { icon: <SiTelegram className="w-6 h-6" />, color: "hover:bg-blue-500 hover:text-white", href: "https://t.me/therealpiusfx", label: "Telegram" },
                  { icon: <SiTiktok className="w-6 h-6" />, color: "hover:bg-black hover:text-white", href: "https://www.tiktok.com/@therealpiusfx", label: "TikTok" },
                  { icon: <SiFacebook className="w-6 h-6" />, color: "hover:bg-blue-700 hover:text-white", href: "https://facebook.com/therealpiusfx", label: "Facebook" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-card border border-white/5 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">First Name</label>
                    <Input name="firstName" required placeholder="John" className="bg-background/50 border-white/10 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                    <Input name="lastName" required placeholder="Doe" className="bg-background/50 border-white/10 h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                  <Input name="email" required type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <Textarea name="message" required placeholder="How can we help you?" className="bg-background/50 border-white/10 min-h-[150px] resize-none" />
                </div>
                <Button type="submit" disabled={loading} className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-base">
                  {loading ? "Sending..." : "Send Message"} <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
