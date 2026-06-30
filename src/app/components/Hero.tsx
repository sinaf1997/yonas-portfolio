import { motion } from 'framer-motion';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { FaTelegramPlane, FaPhone } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const profileImage = '/profile.jpg';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Mechanical Engineer | Management Graduate | Video Editor | Creative Professional';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-100 pt-20 dark:bg-none">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-dark to-navy opacity-0 dark:opacity-95 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal/10 rounded-full blur-3xl -z-10 animate-pulse" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          className="w-[90%] max-w-[380px] h-auto mx-auto mb-8 rounded-2xl overflow-hidden bg-white/90 dark:bg-navy-light/20 border border-royal/20 shadow-2xl shadow-royal/10 backdrop-blur-sm"
        >
          <div className="flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-navy/60 dark:to-navy-deep/80 px-4 py-5">
            <img
              src={profileImage}
              alt="Yonas Aklilu Mekonnen"
              className="w-full h-auto max-h-[420px] object-contain object-center mx-auto block"
            />
          </div>

          <div className="px-5 py-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 bg-gradient-to-r from-navy via-royal to-royal-hover bg-clip-text text-transparent dark:from-white dark:via-light-blue dark:to-royal leading-tight">
              Yonas Aklilu Mekonnen
            </h1>

            <div className="text-sm sm:text-base font-semibold mb-4 text-royal/90 min-h-[3.5rem] leading-relaxed">
              <span>{text}</span>
              <span className="animate-ping ml-1 text-royal">|</span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
              Passionate young professional with backgrounds in engineering and management, focused on creativity, digital skills, and continuous learning.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center mb-10 px-4 mt-2 w-full">
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-royal hover:bg-royal-hover text-white font-bold rounded-full shadow-lg shadow-royal/20 transition-all cursor-pointer text-sm sm:text-base"
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 border-2 border-royal text-royal hover:bg-royal/10 font-bold rounded-full transition-all cursor-pointer text-sm sm:text-base"
          >
            Contact Me
          </motion.button>
          <motion.a
            href="#"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-navy hover:bg-navy-dark text-white font-bold rounded-full border border-navy/10 transition-all cursor-pointer text-sm sm:text-base dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/20"
          >
            Download CV
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="flex gap-6 justify-center mb-8">
          {[
            { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FaTelegramPlane, href: 'https://t.me', label: 'Telegram' },
            { icon: FiMail, href: 'mailto:yonas.aklilu.m@gmail.com', label: 'Email' },
            { icon: FaPhone, href: 'tel:+251900000000', label: 'Phone' }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white border border-royal/25 flex items-center justify-center text-royal hover:bg-royal hover:text-white transition-all shadow-md dark:bg-navy-light/80 dark:border-royal/30"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div className="w-6 h-10 rounded-full border-2 border-royal flex items-start justify-center p-1.5 cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-royal rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
