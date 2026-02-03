import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { siteContent } from "@/lib/content";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">{siteContent.experience.title}</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {siteContent.experience.jobs.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-1/2"
                }`}
                style={{
                  marginLeft: index % 2 === 1 ? "50%" : undefined,
                  paddingRight: index % 2 === 0 ? undefined : undefined,
                }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0
                      ? "left-0 md:left-auto md:right-0 md:translate-x-1/2"
                      : "left-0 md:-translate-x-1/2"
                  }`}
                  style={{
                    left: index % 2 === 1 ? "-8px" : undefined,
                  }}
                />

                <div
                  className={`bg-card rounded-xl p-6 border border-border card-glow ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 mb-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {job.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {job.role}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-4">
                    {job.company}
                  </p>

                  <p
                    className={`text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {job.description}
                  </p>

                  <ul
                    className={`space-y-2 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {job.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                        style={{
                          justifyContent:
                            index % 2 === 0 ? "flex-end" : "flex-start",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"
                          style={{
                            order: index % 2 === 0 ? 1 : 0,
                          }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
