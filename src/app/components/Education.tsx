import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineItems = [
    {
      institution: 'Adama Science and Technology University',
      degree: 'Bachelor of Science in Mechanical Engineering',
      duration: 'Recently Graduated',
      location: 'Adama, Ethiopia',
      description: 'Focused on core mechanical engineering principles, thermodynamics, materials science, CAD modeling, and manufacturing systems. Participated in engineering projects and technical design labs.',
      icon: GraduationCap,
    },
    {
      institution: 'Harambe University',
      degree: 'Bachelor of Science in Management',
      duration: 'Recently Graduated',
      location: 'Adama, Ethiopia',
      description: 'Focused on core business administration, organizational behavior, operations management, leadership styles, and project planning methodologies. Expanded skills in resource allocation and business logic.',
      icon: BookOpen,
    }
  ];

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-navy-dark/40 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-royal/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-navy dark:from-white via-royal to-royal bg-clip-text text-transparent">
            Education Timeline
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            A solid academic foundation combining engineering design, scientific principles, and management leadership.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-navy dark:from-navy-light via-royal to-royal mx-auto mt-6" />
        </motion.div>

        <div className="relative border-l border-gray-200 dark:border-navy-light max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-navy-deep border-2 border-royal flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-royal transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-royal group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-light/20 border border-gray-100 dark:border-navy-light/40 shadow-xl hover:shadow-2xl hover:border-royal/30 dark:hover:border-royal/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-royal/10 text-royal border border-royal/20 mb-2">
                        {item.degree}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-royal transition-colors">
                        {item.institution}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-gray-500 dark:text-gray-400 gap-1">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-4 h-4 text-royal" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
