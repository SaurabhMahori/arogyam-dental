import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden">
  
  <div className="absolute inset-0">
    <img
      src="/hero.png"
      alt="Dental Clinic"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/55"></div>
  </div>
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-60 mix-blend-multiply translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[80px] opacity-60 mix-blend-multiply -translate-x-1/4 translate-y-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
       <div className="flex items-center min-h-[80vh]">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Raghu Nagar, New Delhi</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
              Caring For Every Smile <span className="text-primary italic font-light">Like Family</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-lg">
              Personalized dental care by Dr. Akanksha in a warm and comfortable environment where every patient feels valued.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-5 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-book-btn"
              >
                Schedule Your Visit
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-7 py-5 text-base bg-background/50 backdrop-blur-sm border-border hover:bg-accent transition-all duration-300"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-about-btn"
              >
                Meet Dr. Akanksha
              </Button>
            </div>
            
            {/* Reviews Mini */}
            <div className="mt-10 flex items-center gap-4 bg-black/20 backdrop-blur-md px-4 py-3 rounded-xl w-fit">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-accent flex items-center justify-center text-xs font-medium z-[${5-i}]`}>
                    {i === 4 ? "+1K" : "A"}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-white font-semibold ml-1">5.0</span>
                </div>
                <span className="text-sm text-white/80">From 129+ Google Reviews</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
