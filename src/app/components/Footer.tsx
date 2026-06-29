import { FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { FaTelegramPlane, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = ['Home', 'About', 'Education', 'Skills', 'Certifications', 'Experience', 'Projects', 'Contact'];

  return (
    <footer className="bg-navy-deep border-t border-navy-light/40 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-white via-royal to-royal bg-clip-text text-transparent mb-4">
              YAM.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              "Designed with professionalism, creativity, and continuous learning."
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-royal">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-royal transition-colors text-sm font-medium text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-royal">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FaTelegramPlane, href: 'https://t.me', label: 'Telegram' },
                { icon: FiMail, href: 'mailto:yonas.aklilu.m@gmail.com', label: 'Email' },
                { icon: FaPhone, href: 'tel:+251900000000', label: 'Phone' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-navy-light/80 border border-royal/20 flex items-center justify-center hover:bg-royal hover:text-white transition-all duration-300 text-royal"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light/30 pt-8 text-center text-gray-500 text-xs sm:text-sm">
          <p className="flex items-center justify-center gap-1.5">
            Designed with <FiHeart className="text-royal fill-royal" /> by Yonas Aklilu Mekonnen © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
