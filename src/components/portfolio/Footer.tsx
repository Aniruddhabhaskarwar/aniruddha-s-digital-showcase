import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { siteContent } from "@/lib/content";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>{siteContent.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1APF7TR6zaXrTvt9ITKbJte7CLU3dTMJE/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume PDF"
              className="hover:text-primary transition-colors"
            >
              View Resume
            </a>
            <p className="flex items-center gap-1">
              {siteContent.footer.tagline.replace(".", "")}
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
