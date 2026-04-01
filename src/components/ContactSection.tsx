import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="rounded-[2rem] border border-slate-900/10 bg-white/64 px-6 py-10 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-lg md:px-10 md:py-12">
          <p className="text-primary text-sm font-medium mb-2">Contact us</p>
          <h2 className="text-3xl font-semibold text-foreground mb-2">Get in touch</h2>
          <p className="text-muted-foreground mb-12">Our friendly team is always here to chat.</p>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <p className="text-sm text-muted-foreground mb-2">Our friendly team is here to help.</p>
              <a href="mailto:info@volcanmind.com" className="text-sm text-primary font-medium hover:underline">info@volcanmind.com</a>
            </div>

            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Office</h4>
              <p className="text-sm text-muted-foreground mb-2">Come say hello at our office HQ.</p>
              <a href="#" className="text-sm text-primary font-medium hover:underline">Nilgiris, India</a>
            </div>

            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Phone</h4>
              <p className="text-sm text-muted-foreground mb-2">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
              <a href="tel:+15550000000" className="text-sm text-primary font-medium hover:underline">+91  90030 16789</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
