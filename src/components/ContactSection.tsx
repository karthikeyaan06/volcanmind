import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-primary text-sm font-medium mb-2">Contact us</p>
        <h2 className="text-3xl font-semibold text-foreground mb-2">Get in touch</h2>
        <p className="text-muted-foreground mb-12">Our friendly team is always here to chat.</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Email</h4>
            <p className="text-sm text-muted-foreground mb-2">Our friendly team is here to help.</p>
            <a href="mailto:info@volcanmind.com" className="text-sm text-primary font-medium hover:underline">info@volcanmind.com</a>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Office</h4>
            <p className="text-sm text-muted-foreground mb-2">Come say hello at our office HQ.</p>
            <a href="#" className="text-sm text-primary font-medium hover:underline">Nilgiris, India</a>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Phone</h4>
            <p className="text-sm text-muted-foreground mb-2">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
            <a href="tel:+15550000000" className="text-sm text-primary font-medium hover:underline">+91  90030 16789</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
