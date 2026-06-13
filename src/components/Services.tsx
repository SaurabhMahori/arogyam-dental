import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Baby, 
  Activity,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Stethoscope,
    title: "General Checkup",
    desc: "Comprehensive exams, gentle cleanings, and preventative care to keep your smile healthy.",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, veneers, and smile makeovers designed to look completely natural.",
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
  },
  {
    icon: Activity,
    title: "Root Canal Therapy",
    desc: "Pain-free procedures utilizing modern anesthetics to save infected teeth comfortably.",
    color: "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400"
  },
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    desc: "Permanent, strong, and natural-looking replacements for missing teeth.",
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
  },
  {
    icon: Heart,
    title: "Braces & Invisalign",
    desc: "Subtle and effective alignment solutions for both teenagers and adults.",
    color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
  },
  {
    icon: Baby,
    title: "Children's Dentistry",
    desc: "A warm, fun approach to build positive dental habits from their very first visit.",
    color: "bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400"
  }
];

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Gentle Care</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            From routine maintenance to complete smile restorations, we provide comprehensive care with a gentle touch.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card group overflow-hidden relative cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.color}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-serif">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:underline underline-offset-4">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
