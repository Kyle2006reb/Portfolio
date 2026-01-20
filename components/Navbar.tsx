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
    { name: "About Me", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Scroll detection using scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      // Find which section we're currently in
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].href.substring(1);
        const section = document.getElementById(sectionId);
        
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll handler
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    
    if (section) {
      const navbarHeight = 80; // Approximate navbar height
      const sectionTop = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
      
      // Update active section immediately on click
      setActiveSection(sectionId);
    } else {
      console.warn(`Section with id "${sectionId}" not found`);
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
        
        {/* Logo / Name - Clicking this also goes to Intro */}
        <Link
          href="#intro"
          onClick={(e) => handleClick(e, "#intro")}
          className="text-purple-700 font-bold text-xl tracking-tight
                     hover:text-purple-900 transition-colors"
        >
          Kyle Rebello
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-6 text-sm font-medium">
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