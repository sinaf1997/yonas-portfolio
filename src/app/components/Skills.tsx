import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Settings, ClipboardList, Lightbulb, Crown, TrendingUp,
  Video, Film, Clapperboard, Scissors, Layout,
  MessageSquare, Users2, Zap, RefreshCw, Palette
} from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = {
    technical: [
      { name: 'Mechanical Engineering', level: 90, icon: Settings },
      { name: 'Project Planning', level: 85, icon: ClipboardList },
      { name: 'Problem Solving', level: 92, icon: Lightbulb },
      { name: 'Leadership', level: 88, icon: Crown },
      { name: 'Business Management', level: 85, icon: TrendingUp },
    ],
    digital: [
      { name: 'Video Editing', level: 95, icon: Video },
      { name: 'Content Creation', level: 90, icon: Film },
      { name: 'Adobe Premiere Pro', level: 92, icon: Clapperboard },
      { name: 'CapCut Editing', level: 95, icon: Scissors },
      { name: 'Social Media Content Design', level: 88, icon: Layout },
    ],
    professional: [
      { name: 'Communication', level: 90, icon: MessageSquare },
      { name: 'Team Collaboration', level: 95, icon: Users2 },
      { name: 'Fast Learning', level: 92, icon: Zap },
      { name: 'Adaptability', level: 90, icon: RefreshCw },
      { name: 'Creativity', level: 95, icon: Palette },
    ]
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-navy-dark/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy dark:from-white via-royal to-royal bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy dark:from-navy-light via-royal to-royal mx-auto" />
        </motion.div>

        <div className="space-y-16">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-8 capitalize text-gray-900 dark:text-white border-l-4 border-royal pl-3">
                {category === 'technical' ? 'Technical Skills' : category === 'digital' ? 'Digital Skills' : 'Professional Skills'}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: catIndex * 0.15 + index * 0.05 }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="p-6 rounded-2xl bg-white dark:bg-navy-light/10 shadow-lg border border-gray-200 dark:border-navy-light/35 group hover:border-royal/30 dark:hover:border-royal/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-royal/10 group-hover:bg-royal group-hover:scale-105 transition-all duration-300">
                          <Icon className="w-6 h-6 text-royal group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-royal transition-colors">{skill.name}</h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-navy-light/60 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: catIndex * 0.15 + index * 0.05 + 0.2 }}
                          className="h-full bg-gradient-to-r from-navy dark:from-navy-light to-royal rounded-full"
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
