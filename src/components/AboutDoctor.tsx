import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutDoctor() {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden z-10">
              <img 
                src="/doctor.png" 
                alt="Dr. Akanksha, Lead Dentist at Arogyam" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute top-10 -left-10 w-full h-full bg-accent rounded-[2rem] -z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-0" />
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="mb-2">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Meet Your Dentist</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hello, I'm <span className="italic font-light text-primary">Dr. Akanksha</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I founded Arogyam Dental Clinic with a simple vision: to create a space where dentistry doesn't feel daunting. A place where you are treated with the same gentle care and respect as a family member.
              </p>
              <p>
                Having practiced for over a decade, I noticed that anxiety often keeps people from getting the care they need. That's why every aspect of Arogyam—from the soft lighting to the unhurried consultations—is designed around your comfort.
              </p>
              
              <div className="p-6 bg-background rounded-2xl border border-border/60 shadow-sm my-8 relative">
                <div className="absolute top-0 left-6 -translate-y-1/2 text-4xl text-primary/40 font-serif">"</div>
                <p className="italic text-foreground font-serif text-lg">
                  My philosophy is simple: listen first, treat gently, and preserve your natural smile whenever possible.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Over 10 years of experience",
                  "Specialized in painless treatments",
                  "Holistic approach to dental health",
                  "Dedicated to patient education"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10">
              <img src="/signature-placeholder.svg" alt="" className="h-12 opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
              <div className="mt-2 text-sm font-medium text-foreground">Dr. Akanksha, BDS, MDS</div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
