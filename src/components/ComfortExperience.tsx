import { motion } from "framer-motion";

export default function ComfortExperience() {
  return (
    <section id="experience" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-accent/40 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium tracking-wider uppercase text-sm">The Experience</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Designed to feel <span className="italic font-light text-primary">unlike a clinic</span>
              </h2>
              
              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm text-xl">🌿</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Calm Atmosphere</h4>
                    <p className="text-muted-foreground">Soft lighting, soothing colors, and aromatherapy replace the harsh, clinical feel of traditional offices.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm text-xl">🛋️</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Comfort First</h4>
                    <p className="text-muted-foreground">Plush seating, warm blankets, and noise-canceling headphones are always available during your visit.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm text-xl">⏱️</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Unhurried Care</h4>
                    <p className="text-muted-foreground">We schedule extra time for every patient so you never feel rushed and always have time to ask questions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl"
            >
              <img 
                src="/comfort.png" 
                alt="A peaceful dental experience room" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
