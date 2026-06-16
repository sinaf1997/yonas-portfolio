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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto" />
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
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={profileImage}
                  alt="Sinaf Mekonnen"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-20 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Hi! I'm a Computer Science and Engineering Student & Frontend Developer
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about crafting beautiful, intuitive, and responsive web experiences. With a strong
              foundation in frontend development and growing backend knowledge, I love turning complex problems
              into simple, elegant solutions.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in web development started with a fascination for UI/UX design, and has evolved into
              a comprehensive understanding of modern web technologies. I'm constantly learning and experimenting
              with new frameworks and tools to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Projects Completed', value: '10+' },
                { label: 'Technologies', value: '10+' },
                { label: 'Years Learning', value: '3+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
                >
                  <div className="text-3xl font-bold text-cyan-500">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
