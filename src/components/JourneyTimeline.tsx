import { motion } from "framer-motion";
import { Calendar, MessageCircle, Syringe, Coffee, Smile } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book",
    desc: "Schedule easily online or over the phone. We respect your time and run on schedule."
  },
  {
    icon: MessageCircle,
    title: "Consultation",
    desc: "We listen to your concerns, examine gently, and explain all options clearly."
  },
  {
    icon: Syringe,
    title: "Treatment",
    desc: "Comfortable, painless procedures using modern techniques in a relaxing environment."
  },
  {
    icon: Coffee,
    title: "Aftercare",
    desc: "Clear instructions and follow-up calls to ensure your recovery is smooth."
  },
  {
    icon: Smile,
    title: "Happy Smile",
    desc: "Leave with a healthier, brighter smile and confidence in your dental health."
  }
];

export default function JourneyTimeline() {
  return (
    <section className="py-24 bg-accent/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Smile Journey</h2>
          <p className="text-lg text-muted-foreground">
            We've designed every step to be transparent, reassuring, and completely focused on you.
          </p>
        </div>

        <div className="relative">
          {/* Mobile connecting line */}
          <div className="absolute top-0 bottom-0 left-8 w-[2px] bg-primary/20 block lg:hidden" />
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex lg:flex-col items-start lg:items-center relative"
              >
                {/* Connecting line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] right-[-40%] h-[2px] bg-primary/20" />
                )}
                
                <div className="relative bg-background w-16 h-16 rounded-full flex items-center justify-center shadow-md border border-border/50 shrink-0 z-10 lg:mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                
                <div className="ml-6 lg:ml-0 lg:text-center mt-1 lg:mt-0">
                  <h3 className="text-xl font-bold mb-2 font-serif">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
