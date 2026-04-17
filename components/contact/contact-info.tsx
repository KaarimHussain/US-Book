import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: <Phone className="size-6 text-accent" />,
    title: "Call Us",
    value: "+1 315 239 0990",
    href: "tel:+13152390990",
    desc: "Speak directly with a publishing consultant."
  },
  {
    icon: <Mail className="size-6 text-accent" />,
    title: "Email Us",
    value: "info@usbookauthors.com",
    href: "mailto:info@usbookauthors.com",
    desc: "We typically respond within 24 business hours."
  },
  {
    icon: <MapPin className="size-6 text-accent" />,
    title: "Visit Us",
    value: "St. Petersburg, FL",
    href: "#",
    desc: "7901 4th St N STE 300, FL 33702, USA"
  },
  {
    icon: <Clock className="size-6 text-accent" />,
    title: "Business Hours",
    value: "Mon - Fri: 9AM - 6PM",
    href: null,
    desc: "Eastern Standard Time (EST)"
  }
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item) => (
            <div key={item.title} className="p-8 rounded-xl border border-border bg-muted/30 space-y-4 text-center hover:border-accent/40 transition-colors group">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-border group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-primary">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-lg font-serif text-accent hover:underline block">
                    {item.value}
                  </a>
                ) : (
                  <span className="text-lg font-serif text-accent block">{item.value}</span>
                )}
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
