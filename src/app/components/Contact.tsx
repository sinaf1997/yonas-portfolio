import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate contact submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'yonasaklilu@gmail.com', href: 'mailto:yonasaklilu@gmail.com' },
    { icon: Phone, label: 'Phone Number', value: '+251 932279008', href: 'tel:+251932279008' }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Send, label: 'Telegram', href: 'https://t.me' }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-navy-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy dark:from-white via-royal to-royal bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy dark:from-navy-light via-royal to-royal mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for projects, collaborations, or professional engineering and media editing opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I am open to discuss new opportunities, volunteer tasks, internships, or content production proposals. Let's create value together.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-navy-light/20 border border-gray-200 dark:border-navy-light/40 hover:border-royal/30 dark:hover:border-royal/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-royal/15 flex items-center justify-center border border-royal/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-royal" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{item.label}</div>
                      <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{item.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gray-50 dark:bg-navy-light border border-gray-200 dark:border-navy-light/40 flex items-center justify-center hover:bg-royal hover:border-transparent transition-all group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-royal group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-gray-50 dark:bg-navy-light/10 border border-gray-200 dark:border-navy-light/40 shadow-xl">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-light/40 bg-white dark:bg-navy-deep focus:border-royal dark:focus:border-royal outline-none transition-colors text-gray-900 dark:text-white text-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-light/40 bg-white dark:bg-navy-deep focus:border-royal dark:focus:border-royal outline-none transition-colors text-gray-900 dark:text-white text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-light/40 bg-white dark:bg-navy-deep focus:border-royal dark:focus:border-royal outline-none transition-colors resize-none text-gray-900 dark:text-white text-sm"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3.5 bg-royal hover:bg-royal-hover text-white rounded-xl font-bold shadow-lg hover:shadow-royal/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-4 h-4 shrink-0" />
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
