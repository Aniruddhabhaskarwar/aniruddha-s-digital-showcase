import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { siteContent } from "@/lib/content";

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">{siteContent.education.title}</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-8 border border-border card-glow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {siteContent.education.degree.degree}
              </h4>
              <p className="text-muted-foreground mb-3">
                {siteContent.education.degree.institution}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  CGPA: {siteContent.education.degree.cgpa}
                </span>
                <span className="text-muted-foreground">
                  Class of {siteContent.education.degree.year}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl p-8 border border-border card-glow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Certifications
              </h3>
            </div>

            <ul className="space-y-4">
              {siteContent.education.certifications.map((cert, index) => (
                <motion.li
                  key={cert.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
