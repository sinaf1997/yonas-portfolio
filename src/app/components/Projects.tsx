import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Professional Video Editing Projects',
      description: 'A curated compilation of narrative cuts, promotional campaigns, and brand storytelling pieces edited using Adobe Premiere Pro and CapCut.',
      image: '/video_editing.png',
      tags: ['Video Editing', 'Adobe Premiere Pro', 'CapCut'],
      category: 'creative',
      github: null,
      demo: null
    },
    {
      id: 2,
      title: 'Creative Content Production',
      description: 'Viral short-form content and social media video campaigns designed to capture audience attention and boost brand engagement.',
      image: '/video_editing.png',
      tags: ['Content Creation', 'Social Media Design', 'CapCut'],
      category: 'creative',
      github: null,
      demo: null
    },
    {
      id: 3,
      title: 'University Engineering Projects',
      description: 'Core mechanical designs and university lab projects modeling industrial machinery, thermodynamic systems, and structural stress analyses.',
      image: '/engineering.png',
      tags: ['Mechanical Engineering', 'CAD Modeling', 'ASTU Labs'],
      category: 'engineering',
      github: null,
      demo: null
    },
    {
      id: 4,
      title: 'Management Related Academic Projects',
      description: 'Strategic case studies, feasibility analyses, and project organization logs applying business models and operations management principles.',
      image: '/management.png',
      tags: ['Project Planning', 'Business Management', 'Organizational Leadership'],
      category: 'management',
      github: null,
      demo: null
    }
  ];

  const categories = ['all', 'creative', 'engineering', 'management'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-navy-deep relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-royal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy dark:from-white via-royal to-royal bg-clip-text text-transparent">
            Selected Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy dark:from-navy-light via-royal to-royal mx-auto mb-10" />

          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-royal text-white shadow-md shadow-royal/20'
                    : 'bg-gray-200 dark:bg-navy-light text-gray-700 dark:text-gray-300 border border-transparent dark:border-navy-light/40'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-navy-light/10 border border-gray-200 dark:border-navy-light/35 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64 border-b border-gray-200 dark:border-navy-light/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/35 transition-all text-white"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/35 transition-all text-white"
                        aria-label={`${project.title} live demo`}
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-royal transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-royal/10 text-royal border border-royal/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
