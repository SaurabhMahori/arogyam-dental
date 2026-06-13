export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-2">
            <a href="#" className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-semibold text-foreground tracking-tight">
                Arogyam
              </span>
              <span className="text-xs font-medium text-primary tracking-widest uppercase mt-0.5">
                Dental Clinic
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              A warm, boutique family dental clinic in New Delhi where every patient feels like family. Professional care in a comforting environment.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                <span className="font-serif italic font-bold">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                <span className="font-serif italic font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Doctor</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Patient Experience</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li className="font-medium text-foreground">Call Us</li>
              <li>08368504849</li>
              <li className="font-medium text-foreground mt-4">Address</li>
              <li className="leading-relaxed">
                RZ-37 Street No. 2, Pankha Road, Raghu Nagar, New Delhi, Delhi 110045
              </li>
            </ul>
          </div>

        </div>
        
        <div className="h-px w-full bg-border mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Arogyam Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
