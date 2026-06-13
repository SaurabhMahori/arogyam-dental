import { motion } from "framer-motion";

const groups = [
  {
    title: "For Children",
    subtitle: "Gentle beginnings",
    desc: "We make early visits fun and fearless. Building good habits in a playful environment ensures a lifetime of healthy smiles without the dreaded 'dentist fear'.",
    image: "https://images.unsplash.com/photo-1544281679-e31f0e9b986a?q=80&w=600&auto=format&fit=crop" // Placeholder until generate
  },
  {
    title: "For Adults",
    subtitle: "Complete care",
    desc: "Life is busy. We offer efficient, comprehensive care from routine cleanings to cosmetic enhancements, all tailored to your schedule and goals.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop" // Placeholder
  },
  {
    title: "For Seniors",
    subtitle: "Preserving comfort",
    desc: "Compassionate care focused on maintaining function, comfort, and confidence. From restorative work to gentle maintenance, we're here to help.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop" // Placeholder
  }
];

export default function FamilyCare() {
  return (
    <section className="py-24 bg-card border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Care for Every Generation</h2>
          <p className="text-lg text-muted-foreground">
            Arogyam is a true family practice. We adapt our approach, tone, and techniques for every age group.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src={group.image} 
                  alt={group.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-primary font-medium text-sm mb-2">{group.subtitle}</span>
              <h3 className="text-2xl font-bold font-serif mb-3">{group.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {group.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
