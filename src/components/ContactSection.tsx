import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle, Send, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "https://x.com/gdsciiitkalyani" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/gdsc-iiit-kalyani" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/gdgiiitkalyani/" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@gdgiiitkalyani" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-primary/10 via-secondary/10 to-transparent blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have questions? We're here to help!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <motion.a
            href="mailto:dsc.iiitkalyani@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card-hover p-6 text-center group"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold mb-1">Email Us</h3>
            <p className="text-sm text-muted-foreground">dsc.iiitkalyani@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://discord.gg/BP6rPGfujM"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card-hover p-6 text-center group"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <MessageCircle className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display font-bold mb-1">Discord</h3>
            <p className="text-sm text-muted-foreground">Join our community</p>
          </motion.a>

          {/* <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card-hover p-6 text-center group"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Send className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display font-bold mb-1">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">Quick support</p>
          </motion.a> */}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">Follow us on social media</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
