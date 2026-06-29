import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const profileImage = '/profile.jpg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy dark:from-white via-royal to-royal bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy dark:from-navy-light via-royal to-royal mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-royal/25"
              >
                <img
                  src={profileImage}
                  alt="Yonas Aklilu Mekonnen"
                  className="w-full h-full object-cover object-[center_18%]"
                />
              </motion.div>
              <div className="absolute -inset-4 bg-gradient-to-r from-navy to-royal rounded-2xl blur-2xl opacity-20 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              Combines Technical Engineering with Creative Management
            </h3>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am Yonas Aklilu Mekonnen, a dedicated professional who recently graduated this year from Adama Science and Technology University with a degree in Mechanical Engineering. I also graduated Management from Harambe University, expanding my understanding of leadership, business, and organizational development.
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I strongly believe in continuous growth and practical learning. Even during summer breaks and outside formal education, I actively participate in volunteer work and internship opportunities to improve my professional skills and gain real-world experience.
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy combining technical knowledge with creativity and always look for opportunities to learn and contribute.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Engineering ASTU', value: 'B.Sc.' },
                { label: 'Management Harambe', value: 'B.Sc.' },
                { label: 'Digital Creative', value: 'Certified' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-navy/10 to-royal/10 border border-royal/20 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-royal">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
