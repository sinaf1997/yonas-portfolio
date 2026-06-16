import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const profileImage = '/profile.jpg';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Frontend Developer & Computer Science and Engineering Student';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={item} className="mb-8">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-cyan-500/20"
          >
            <img
              src={profileImage}
              alt="Sinaf Mekonnen"
              className="w-full h-full rounded-full object-cover object-center border-4 border-gray-900 dark:border-gray-900"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Hi, I'm Sinaf Mekonnen
        </motion.h1>

        <motion.div variants={item} className="text-2xl md:text-4xl font-semibold mb-6 h-12">
          <span className="text-cyan-500">{text}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Passionate about creating beautiful, responsive, and user-friendly web experiences.
          Combining creativity with code to build modern digital solutions.
        </motion.p>

        <motion.div variants={item} className="flex gap-6 justify-center mb-12">
          {[
            { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
            { icon: FiMail, href: 'mailto:your@email.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-white transition-all"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-cyan-500 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
