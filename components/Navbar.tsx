"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("intro");

  const navLinks = [
    { name: "Intro", href: "#intro" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Athletics", href: "#sports" },
    { name: "About Me", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection("contact");
        return;
      }

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].href.substring(1);
        const section = document.getElementById(sectionId);
        
        if (section) {
          const sectionTop = section.offsetTop;
          
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    
    if (section) {
      const navbarHeight = 80;
      const sectionTop = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
      
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-purple-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          href="#intro"
          onClick={(e) => handleClick(e, "#intro")}
          className="text-purple-700 font-bold text-xl tracking-tight hover:text-purple-900 transition-colors"
        >
          Kyle Rebello
        </Link>

        <div className="hidden lg:flex gap-5 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`transition-all duration-300 relative py-1 px-2 ${
                  isActive 
                    ? "text-purple-700 font-bold scale-105" 
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {link.name}
                
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-700"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}