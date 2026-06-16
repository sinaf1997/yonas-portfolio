import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiLayout, FiSmartphone, FiDatabase } from 'react-icons/fi';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: FiCode,
      title: 'Frontend Web Development',
      description: 'Building modern, responsive, and performant web applications using React, Vue, and Next.js.',
      features: ['React Development', 'State Management', 'Performance Optimization']
    },
    {
      icon: FiLayout,
      title: 'Responsive Website Design',
      description: 'Creating beautiful, user-friendly designs that work perfectly on all devices and screen sizes.',
      features: ['Mobile-First Design', 'UI/UX Design', 'Cross-Browser Compatible']
    },
    {
      icon: FiSmartphone,
      title: 'Landing Page Design',
      description: 'Designing high-converting landing pages with modern aesthetics and smooth animations.',
      features: ['Modern Animations', 'Conversion Focused', 'SEO Optimized']
    },
    {
      icon: FiDatabase,
      title: 'Basic Backend Integration',
      description: 'Implementing simple backend functionality with Node.js, Express, and database integration.',
      features: ['REST APIs', 'Database Setup', 'Authentication']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                      {feature}
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
