import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">{siteContent.contact.title}</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            {siteContent.contact.description}
          </p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{siteContent.personal.location}</span>
            </div>
            <a
              href={`mailto:${siteContent.personal.email}`}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{siteContent.personal.email}</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-4 mb-10"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary hover:border-primary"
            >
              <a
                href={siteContent.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary hover:border-primary"
            >
              <a
                href={siteContent.personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 animate-pulse-glow"
            >
              <a href={`mailto:${siteContent.personal.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                {siteContent.contact.cta}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
