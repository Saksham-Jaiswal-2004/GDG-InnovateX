import { Rocket, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Timeline", href: "#timeline" },
    { label: "Prizes", href: "#prizes" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl gradient-text">GDG InnovateX</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Organised with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>by GDG on Campus, IIIT Kalyani</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GDG InnovateX | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
