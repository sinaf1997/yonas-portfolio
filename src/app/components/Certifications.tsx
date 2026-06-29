import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: 'CapCut Video Editing Certificate',
      issuer: 'Professional Editing Program',
      date: 'Earned recently',
      description: 'Mastery in timeline-based video editing, sound design, transitions, visual effects, and content optimization for digital and social media platforms.',
      badge: 'Video Production'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-navy-deep relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-royal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-navy dark:from-white via-royal to-royal bg-clip-text text-transparent">
            Licenses & Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-lg">
            Verifiable digital skills and technical achievements demonstrating commitment to continuous learning.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-navy dark:from-navy-light via-royal to-royal mx-auto mt-6" />
        </motion.div>

        <div className="max-w-md mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="relative p-8 rounded-2xl bg-white dark:bg-navy-light/10 border-2 border-gray-100 dark:border-navy-light/30 shadow-2xl hover:border-royal dark:hover:border-royal transition-all duration-300 group overflow-hidden"
            >
              {/* royal gradient shine effect on hover */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[100%]" />

              <div className="flex items-center gap-2 mb-4 justify-between">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-royal/10 text-royal border border-royal/20">
                  {cert.badge}
                </span>
                <Sparkles className="w-5 h-5 text-royal animate-pulse" />
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-royal/10 flex items-center justify-center border border-royal/20 shrink-0">
                  <Award className="w-8 h-8 text-royal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-royal transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 dark:border-navy-light/40 pt-4 text-xs">
                <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-royal" />
                  <span>Credential Verified</span>
                </div>
                <span className="text-royal font-semibold">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
