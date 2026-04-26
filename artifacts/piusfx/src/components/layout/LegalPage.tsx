import { motion } from "framer-motion";

interface Section {
  heading: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  effectiveDate: string;
  intro: React.ReactNode;
  sections: Section[];
}

export default function LegalPage({ title, effectiveDate, intro, sections }: LegalPageProps) {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{title}</h1>
          <p className="text-sm text-muted-foreground mb-10">Effective date: {effectiveDate}</p>

          <div className="bg-card/50 border border-white/5 rounded-3xl p-8 md:p-12 space-y-10">
            <div className="text-muted-foreground leading-relaxed text-base">{intro}</div>

            {sections.map((s, i) => (
              <section key={i} className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {i + 1}. {s.heading}
                </h2>
                <div className="text-muted-foreground leading-relaxed text-base space-y-3">
                  {s.body}
                </div>
              </section>
            ))}

            <div className="pt-6 border-t border-white/5 text-sm text-muted-foreground">
              Questions about this document? Contact us at{" "}
              <a href="mailto:support@piusfx.com" className="text-primary hover:underline">
                support@piusfx.com
              </a>
              .
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
