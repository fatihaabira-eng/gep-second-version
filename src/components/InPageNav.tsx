import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

interface InPageNavProps {
  navItems: NavItem[];
  containerSelector?: string; // Selector for the scrollable container, defaults to window
}

const InPageNav: React.FC<InPageNavProps> = ({ navItems, containerSelector }) => {
  const [activeSection, setActiveSection] = useState<string | null>(navItems[0]?.id || null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const scrollableElement = containerSelector ? document.querySelector(containerSelector) : window;
    if (!scrollableElement) return;

    const handleScroll = () => {
      let currentSection = "";
      navItems.forEach(item => {
        const sectionElement = document.getElementById(item.id);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          // Adjust top offset as needed, e.g., for sticky headers
          // For window scrolling, rect.top is relative to viewport.
          // For container scrolling, rect.top is relative to container.
          const topOffset = containerSelector ? scrollableElement.getBoundingClientRect().top : 0;
          if (rect.top - topOffset <= 150) { // 150px from top of viewport/container
            currentSection = item.id;
          }
        }
      });
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    scrollableElement.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial active section

    return () => scrollableElement.removeEventListener('scroll', handleScroll);
  }, [navItems, activeSection, containerSelector]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const NavLinks: React.FC<{isMobile?: boolean}> = ({isMobile = false}) => (
    <nav className={` ${isMobile ? 'flex flex-col space-y-2 p-4' : 'space-y-3'}`}>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.id);
          }}
          className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
            ${activeSection === item.id
              ? 'bg-[#3a6a6e] text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
            }
            ${isMobile ? 'flex justify-between items-center' : ''}
          `}
        >
          {item.label}
          {activeSection === item.id && !isMobile && <ChevronRight size={16} className="inline ml-1 text-white" />}
          {isMobile && <ChevronRight size={16} />}
        </a>
      ))}
    </nav>
  );


  return (
    <>
      {/* Mobile Navigation Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-[#3a6a6e] text-white rounded-full shadow-lg hover:bg-[#2d5357] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3a6a6e]"
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-40 pt-16" // pt-16 to avoid button overlap
          >
            <NavLinks isMobile={true} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sticky Navigation */}
      <aside className="hidden md:block w-64 fixed top-28 left-4 h-[calc(100vh-7rem-2rem)] overflow-y-auto p-1 rounded-lg bg-gray-50/70 backdrop-blur-sm shadow">
         <h3 className="text-lg font-semibold text-[#3a6a6e] p-3 border-b mb-2">Page Contents</h3>
        <NavLinks />
      </aside>
    </>
  );
};

export default InPageNav;