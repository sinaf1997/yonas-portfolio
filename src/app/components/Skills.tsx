import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFigma } from 'react-icons/si';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = {
    frontend: [
      { name: 'HTML5', level: 95, icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', level: 90, icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', level: 85, icon: FaJs, color: '#F7DF1E' },
      { name: 'React', level: 88, icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', level: 92, icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'UI/UX Design', level: 80, icon: SiFigma, color: '#F24E1E' },
    ],
    backend: [
      { name: 'Node.js', level: 70, icon: FaNode, color: '#339933' },
      { name: 'Express', level: 65, icon: SiExpress, color: '#000000' },
      { name: 'MongoDB', level: 68, icon: SiMongodb, color: '#47A248' },
      { name: 'REST API', level: 72, icon: FaNode, color: '#FF6C37' },
    ],
    tools: [
      { name: 'Git & GitHub', level: 85, icon: FaGitAlt, color: '#F05032' },
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 capitalize text-gray-900 dark:text-white">
                {category === 'frontend' ? 'Frontend Skills' : category === 'backend' ? 'Backend Basics' : 'Tools'}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: catIndex * 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all">
                          <Icon className="w-8 h-8" style={{ color: skill.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: catIndex * 0.2 + index * 0.1 + 0.3 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
