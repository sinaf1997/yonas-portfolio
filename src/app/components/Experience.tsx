import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Heart, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: 'volunteer',
      title: 'Volunteer Experience',
      period: 'Summer Periods & Academic Breaks',
      tagline: 'Practical Skill Development & Service',
      points: [
        'Participated in community volunteer activities while continuing professional development.',
        'Worked on practical learning opportunities during summer periods to solve local problems.',
        'Collaborated with multi-disciplinary teams to organize events and community projects.',
        'Applied management and planning studies to lead small groups and improve processes.'
      ],
      icon: Heart,
    },
    {
      type: 'internship',
      title: 'Internship Experience',
      period: 'Professional Internships',
      tagline: 'Technical & Workplace Learning',
      points: [
        'Joined internship opportunities to improve technical and professional skills in real environments.',
        'Focused on gaining practical industry experience and learning workplace workflows and safety.',
        'Assisted senior engineers and project leaders with technical document reviews and mechanical calculations.',
        'Gained hands-on experience in project planning and cross-departmental coordination.'
      ],
      icon: Briefcase,
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-navy-dark/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-royal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-navy dark:from-white via-royal to-royal bg-clip-text text-transparent">
            Practical Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg mt-4">
            "I believe practical experience is equally important as academic education. Therefore, I continuously participate in volunteer programs and internships to strengthen my real-world professional skills."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-navy dark:from-navy-light via-royal to-royal mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white dark:bg-navy-light/20 border border-gray-200 dark:border-navy-light/40 shadow-xl hover:shadow-2xl hover:border-royal/30 dark:hover:border-royal/30 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-royal/10 flex items-center justify-center border border-royal/25 group-hover:bg-royal group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-7 h-7 text-royal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-royal transition-colors">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-royal font-medium block">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <h4 className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-4 italic">
                  {exp.tagline}
                </h4>

                <ul className="space-y-3 flex-grow">
                  {exp.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-2.5 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-royal shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
