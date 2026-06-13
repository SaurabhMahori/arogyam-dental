import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Priya Sharma",
    text: "I've always been terrified of dentists, but Dr. Akanksha completely changed that. She is so gentle and explains everything perfectly. The clinic feels more like a wellness spa.",
    treatment: "Root Canal"
  },
  {
    name: "Rahul Verma",
    text: "Took my 5-year-old here for his first checkup. The patience and warmth shown by the entire staff was incredible. He actually wants to go back!",
    treatment: "Children's Checkup"
  },
  {
    name: "Anita Desai",
    text: "Exceptional service. Got my teeth whitened and some cosmetic work done. The results are incredibly natural. The ambiance just puts you at ease instantly.",
    treatment: "Cosmetic Dentistry"
  },
  {
    name: "Vikram Singh",
    text: "Professional, hygienic, and deeply caring. Dr. Akanksha doesn't rush you. She listens and advises what's genuinely best for you. Highly recommended.",
    treatment: "General Consultation"
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Patient Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">What Patients Love</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here is what our family of patients has to say.
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-background p-4 rounded-2xl shadow-sm border border-border/50">
            <div className="flex flex-col items-end">
              <div className="flex text-amber-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-foreground mt-1">5.0 / 5.0</span>
            </div>
            <div className="h-10 w-px bg-border mx-2" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">129+</span>
              <span className="text-sm text-muted-foreground">Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border/50 hover:border-primary/30 transition-colors shadow-sm relative overflow-hidden group">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/50 rotate-180 transition-transform group-hover:scale-110 duration-500" />
                <CardContent className="p-6 md:p-8 flex flex-col h-full relative z-10">
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed italic mb-8 flex-grow">
                    "{review.text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg font-serif">{review.name}</h4>
                    <p className="text-sm text-primary font-medium">{review.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
