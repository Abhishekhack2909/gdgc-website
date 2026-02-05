import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Gamepad2, Users, Store, Info } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { href: '/', label: 'Home', icon: Home, underlineColor: '#3b82f6' },
  { href: '/games', label: 'Games', icon: Gamepad2, underlineColor: '#000000' },
  { href: '/community', label: 'Community', icon: Users, underlineColor: '#eab308' },
  { href: '/store', label: 'Store', icon: Store, underlineColor: '#22c55e' },
  { href: '/about', label: 'About', icon: Info, underlineColor: '#ef4444' },
];

export function GlobalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Detect hover-capable, fine-pointer devices (desktop) so we can keep hover behavior there.
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = '/Olympics-Logo.png';
    if (img.decode) img.decode().catch(() => {});
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setSupportsHover(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 font-montserrat flex justify-end"
    >
      <div
        className="flex flex-row-reverse items-center gap-4"
        onMouseEnter={() => supportsHover && setIsOpen(true)}
        onMouseLeave={() => supportsHover && setIsOpen(false)}
      >
        {/* Logo used as mobile menu toggle*/}
        <motion.div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              if (!supportsHover) setIsOpen((v) => !v);
            }
          }}
          onClick={() => !supportsHover && setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="w-17 h-17 cursor-pointer flex items-center justify-center logo"
          whileHover={supportsHover ? { scale: 1.5, rotate: 360 } : undefined}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'linear' }}
          style={{
            filter: 'drop-shadow(0 0 10px rgba(232, 239, 211, 0.6)) drop-shadow(0 0 20px rgba(34, 197, 94, 0.4))',
            transformOrigin: 'center',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src="/Olympics-Logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="rounded-full"
              style={{
                border: '2px ',
                background: '#f7f6e4',
                backgroundColor: '#faf8e0',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                boxShadow: '0 0 15px rgba(21, 21, 21, 0.6), 0 0 30px rgba(32, 18, 18, 0.4), 0 0 45px rgb(23, 19, 21)',
              }}
            >
              <ul className="flex items-center gap-2 px-4 py-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.li key={link.href} whileHover={{ y: -2 }}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="relative flex items-center gap-2 px-3 py-2 rounded-full hover:bg-black/10 transition-colors text-black text-sm group"
                      >
                        <Icon size={16} />
                        <span>{link.label}</span>
                        <span
                          className="absolute bottom-1 left-3 right-3 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"
                          style={{ backgroundColor: link.underlineColor }}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

 
      </div>
    </motion.header>
  );
}

export default GlobalNavbar;
