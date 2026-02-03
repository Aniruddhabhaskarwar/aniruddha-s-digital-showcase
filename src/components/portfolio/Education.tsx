import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, ExternalLink, Calendar } from "lucide-react";
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

        <div className="max-w-5xl mx-auto">
          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-8 border border-border card-glow mb-12"
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

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Certifications & Achievements
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteContent.education.certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="bg-card rounded-xl p-5 border border-border card-glow group hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    {cert.verifyUrl && cert.verifyUrl !== "#" && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Verify certificate"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-2 text-sm leading-tight group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  
                  <p className="text-xs text-muted-foreground mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-1 text-xs text-primary">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                  
                  {"registrationNo" in cert && cert.registrationNo && (
                    <p className="text-xs text-muted-foreground mt-2 font-mono">
                      Reg: {cert.registrationNo}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
