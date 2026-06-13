import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactBook() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Received",
        description: "We'll call you shortly to confirm your appointment time.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="book" className="py-24 bg-accent/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">We're Here For You</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Ready to experience dentistry differently? Book your visit today. We look forward to welcoming you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-muted-foreground mb-1">For immediate assistance or emergencies</p>
                  <a href="tel:08368504849" className="text-xl font-medium hover:text-primary transition-colors">
                    08368504849
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Clinic</h4>
                  <p className="text-muted-foreground max-w-[280px] leading-relaxed">
                    RZ-37 Street No. 2, Pankha Road,<br />
                    Raghu Nagar, New Delhi,<br />
                    Delhi 110045
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Clinic Hours</h4>
                  <div className="text-muted-foreground grid grid-cols-2 gap-x-4">
                    <span>Mon - Sat:</span>
                    <span className="font-medium text-foreground">10:00 AM - 8:00 PM</span>
                    <span>Sunday:</span>
                    <span className="font-medium text-foreground">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-[2rem] p-8 md:p-10 shadow-xl border border-border/50"
          >
            <h3 className="text-2xl font-bold font-serif mb-6">Request an Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                <Input id="name" required placeholder="John Doe" className="bg-card h-12 rounded-xl" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                <Input id="phone" required type="tel" placeholder="+91 XXXXX XXXXX" className="bg-card h-12 rounded-xl" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">Service Interested In</label>
                <Select required>
                  <SelectTrigger className="bg-card h-12 rounded-xl">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Checkup</SelectItem>
                    <SelectItem value="cleaning">Teeth Cleaning</SelectItem>
                    <SelectItem value="pain">Tooth Pain / Root Canal</SelectItem>
                    <SelectItem value="cosmetic">Cosmetic / Whitening</SelectItem>
                    <SelectItem value="implants">Dental Implants</SelectItem>
                    <SelectItem value="other">Other / Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">Preferred Date</label>
                <Input id="date" type="date" className="bg-card h-12 rounded-xl" />
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 text-base rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5 mt-4"
                disabled={isSubmitting}
                data-testid="submit-booking"
              >
                {isSubmitting ? "Sending Request..." : "Request Appointment"}
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                We will contact you to confirm the exact time of your appointment.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
