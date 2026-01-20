"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import TimelineExperienceCard from "@/components/TimelineExperienceCard";
import SkillCard from "@/components/SkillCard";
import BackgroundParticles from "@/components/BackgroundParticles";
import IntroHero from "@/components/IntroHero";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Project = {
  title: string;
  shortDescription: string;
  longDescription: string;
  category: "personal" | "school";
  images: string[];
  github: string;
};

export default function Home() {
  const [openProject, setOpenProject] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<"personal" | "school">("personal");

  const projects: Project[] = [
    {
      title: "Questify",
      shortDescription: "A social goal-tracking platform that helps you stay motivated, build winning streaks, and achieve your goals with friends. Whether you're trying to hit daily habits or complete long-term objectives, Questify makes it fun, social, and rewarding.",
      category: "personal",
      images: ["/projects/portfolio1.png", "/projects/portfolio2.png"],
      github: "https://github.com/yourusername/portfolio",
      longDescription:
"Inspiration\n" +
"New Year’s resolutions fail at an alarming rate, with over 80% abandoned by February. We noticed that people often lack accountability and social support when pursuing personal goals. Inspired by Strava’s social fitness tracking and Duolingo’s gamification, we built Questify to transform goal-setting into a competitive yet supportive social experience.\n\n" +

"What it does\n" +
"Questify is a social goal-tracking platform where users can:\n" +
"- Create daily and weekly goals and earn points (10 points for daily tasks, 50 for weekly tasks)\n" +
"- Track streaks and unlock achievement badges\n" +
"- Compete on monthly leaderboards that reset on the 1st of each month\n" +
"- Connect with friends, view their progress, and send nudges\n" +
"- Receive AI-generated encouragement, alerts, and motivational quotes via the Gemini API\n" +
"- Monitor progress through visuals and detailed statistics\n\n" +

"How we built it\n" +
"Frontend: React, CSS\n" +
"Backend: Node.js, Express, PostgreSQL, bcrypt for authentication, express-session\n" +
"AI: Google Gemini API for personalized messages\n" +
"Features: Custom streak calculations, badge system, leaderboard with cron jobs for monthly resets\n" +
"Database: Eight-table schema including users, goals, task_completions, friendships, badges, nudges, and leaderboard_history\n\n" +

"Challenges we ran into\n" +
"- Streak logic: Handling timezone edge cases and deciding when to increment versus reset streaks\n" +
"- Progress calculations: Different reset logic for daily tasks (midnight) versus weekly tasks (Sunday)\n" +
"- AI consistency: Prompt engineering Gemini to return concise one-sentence messages instead of long responses\n" +
"- Leaderboard resets: Scheduling cron jobs to reset leaderboards at midnight on the 1st without data loss\n" +
"- CORS and sessions: Managing credentials across frontend and backend ports\n\n" +

"Accomplishments we’re proud of\n" +
"- Full-stack integration of React, Express, PostgreSQL, and Gemini AI\n" +
"- Sophisticated gamification with points, badges, and streak tracking that genuinely motivates users\n" +
"- Real-time social features with friend feeds and AI-powered nudging\n" +
"- Automated cron jobs for daily streak checks and monthly leaderboard resets\n" +
"- Clean architecture with clearly separated routes, services, and middleware\n\n" +

"What we learned\n" +
"- REST API design and PostgreSQL query optimization\n" +
"- AI integration including prompt engineering, fallback strategies, and rate limiting\n" +
"- React state management across multiple components\n" +
"- Node.js cron jobs for scheduled background tasks\n" +
"- Session-based authentication with CORS\n" +
"- The UX importance of immediate feedback through animations, AI messages, and progress updates",

    },
    {
      title: "Flood Watch",
      shortDescription: "Another personal project example.",
      category: "personal",
      images: ["/projects/portfolio3.png", "/projects/portfolio4.png"],
      github: "https://github.com/yourusername/portfolio2",
      longDescription: "This is the full text that appears when you click the tab. You can write as much as you want here about how you built the project, the tech stack, and the challenges you faced.",
    },
    {
      title: "FocusGuard",
      shortDescription: "A real-time computer vision system that detects drowsiness during study sessions using facial landmark analysis, eye-tracking algorithms, and high performance video processing.",
      category: "personal",
      images: ["/projects/school1.png", "/projects/school2.png"],
      github: "https://github.com/yourusername/schoolprojectx",
      longDescription: 
"**Real-Time Drowsiness Detection System**\n\n" +

"**Technical Project Summary**\n\n" +

"**Executive Overview**\n" +
"Developed a production-grade computer vision application that leverages advanced facial recognition algorithms and real-time video processing to monitor user alertness during study sessions. The system achieves 25–30 FPS performance while maintaining 95% detection accuracy through sophisticated eye tracking and mathematical modeling.\n\n" +

"**Core Technical Achievements**\n\n" +

"**Advanced Computer Vision Implementation**\n" +
"Facial Landmark Detection: Implemented dlib’s 68-point facial landmark predictor with an optimized preprocessing pipeline, utilizing histogram equalization and adaptive thresholding for robust performance across varying lighting conditions.\n" +
"Real-Time Processing Architecture: Designed an efficient frame processing pipeline achieving 25–30 FPS through strategic grayscale conversion, region-of-interest optimization, and multi-threading for non-blocking alert delivery.\n" +
"Eye Tracking Algorithm: Engineered precise Eye Aspect Ratio (EAR) calculation using Euclidean distance metrics and scipy’s spatial processing capabilities to quantify eyelid closure with sub-millisecond accuracy.\n\n" +

"**Mathematical Modeling and Algorithm Design**\n" +
"EAR Formula Implementation: Developed a mathematical model computing eye closure using vertical-to-horizontal eye landmark ratios: EAR = (||p2 − p6|| + ||p3 − p5||) / (2 × ||p1 − p4||), with dynamic threshold calibration.\n" +
"Signal Processing: Applied temporal smoothing through consecutive frame analysis to filter false positives, implementing a state machine for robust drowsiness detection with configurable sensitivity parameters.\n" +
"Statistical Analysis: Built an analytics engine calculating session metrics including event frequency distributions, duration statistics, and focus quality scoring algorithms.\n\n" +

"**Python Engineering Best Practices**\n" +
"Object-Oriented Design: Architected a modular system with clear separation of concerns across eight classes, enforcing the single responsibility principle and dependency injection patterns.\n" +
"Performance Optimization: Utilized NumPy vectorized operations for up to 10× faster coordinate transformations, achieving O(1) EAR calculations through pre-computed landmark indices.\n" +
"Robust Error Handling: Implemented comprehensive exception handling with graceful degradation, automatic fallback mechanisms, and detailed logging for production debugging.\n" +
"Asynchronous Processing: Leveraged Python threading for non-blocking audio alerts, preventing main detection loop interruption and maintaining consistent FPS.\n\n" +

"**Data Engineering and Analytics**\n" +
"Session Persistence: Designed a dual-format logging system using JSON for detailed event logs and CSV for time-series analysis, enabling longitudinal study behavior insights.\n" +
"Automated Reporting: Built an intelligent reporting engine with customizable metrics, percentile-based scoring, and personalized recommendation generation.\n" +
"Data Pipeline: Implemented an ETL workflow transforming raw frame data into structured session summaries with validated data integrity.\n\n" +

"**Machine Learning Foundations**\n" +
"Feature Engineering: Extracted geometric features from facial landmarks, computing aspect ratios and relative positional features for drowsiness classification.\n" +
"Threshold Optimization: Applied empirical evaluation on test datasets to determine an optimal EAR threshold of 0.25 and a temporal window of 20 frames, balancing precision and recall.\n" +
"Performance Metrics: Tracked true and false positive rates, computed F1 scores, and implemented confusion matrix analysis for rigorous model validation."
,
    },
    {
      title: "School Project Y",
      shortDescription: "Another school project example.",
      category: "school",
      images: ["/projects/school3.png", "/projects/school4.png"],
      github: "https://github.com/yourusername/schoolprojecty",
      longDescription: "This is the full text that appears when you click the tab. You can write as much as you want here about how you built the project, the tech stack, and the challenges you faced.",
    },
  ];

  const openProjectModal = (project: Project) => {
    setActiveProject(project);
    setImageIndex(0);
    setOpenProject(true);
  };

  const nextImage = () =>
    setImageIndex(
      activeProject ? (imageIndex + 1) % activeProject.images.length : 0
    );

  const prevImage = () =>
    setImageIndex(
      activeProject
        ? (imageIndex - 1 + activeProject.images.length) %
          activeProject.images.length
        : 0
    );

  // Experience data
  const experiences = [
    {
      role: "Machine Learning Software Developer",
      company: "McMaster Humanoid",
      duration: "Dec 2025 – Present",
      description: `
• Collaborated in a 5-engineer team to design and deliver the end-to-end software stack for a 12-DOF humanoid robot, the first
of its kind in North America, cutting system integration time by 35% and enabling rapid simulation-to-hardware
deployment.
• Designed and implemented a PPO-based reinforcement learning pipeline in PyTorch for locomotion and manipulation,
including reward shaping, hyperparameter optimization, and evaluation, achieving stable convergence in under 50% of
baseline training time with deployable simulation checkpoints.
• Developed ROS 2 nodes for teleoperation and external device integration, enabling 3x faster cross-platform testing and
streamlined hardware bring-up.
• Contributed to Zephyr-based embedded firmware development on STM32F4291, integrating Kalman filtering, PID control, and
HVIL, resulting in a 60% reduction in runtime faults.`,
      logo: "/logos/humanoid.jpg",
    },
    {
      role: "Machine Learning (Computer Vision) Software Developer",
      company: "McMaster Underwater Robotics Team",
      duration: "Oct 2025 – Present",
      description: `
• Built AI-driven automation and image-processing pipelines leveraging OpenCV, TensorFlow, YOLO, and other ML models to
facilitate underwater target recognition and mission objectives.
• Architected low-level robotics software, including PID control for stabilization and sensor fusion algorithms, while bridging onboard
microcontrollers with ROS2 via custom communication layers and coordinate transformations.
• Validated control algorithms through simulations and Hardware-in-the-Loop (HIL) testing, ensuring system robustness and safety prior
to physical deployment.`,
      logo: "/logos/uwrc.jpg",
    },
    {
      role: "Software Development Co-op",
      company: "Career Education Council",
      duration: "July 2023 – August 2023",
      description: `• Engineered a specialized iOS application using Swift aimed at improving the cognitive function of disabled children, delivering the
functional prototype to industry leads within a strict two-month cycle.
• Validated product market-fit by presenting the prototype to a panel of 5+ industry leads from various fields, facilitating cross-sector
feedback.
• Selected as the lead developer among 30+ candidates to prototype a specialized iOS application in collaboration with Special Education
board members.`,
      logo: "/logos/cec.jpg",
    },
  ];

  return (
    <main className={`min-h-screen bg-gray-50 text-gray-900 relative ${inter.className}`}>

      {/* Animated Background */}
      <BackgroundParticles />

      <Navbar />

      {/* NEW mountains intro */}
      <IntroHero />

      {/* Mountains FRONT */}
      <motion.div
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Image
          src="/hero/mountains-front.png"
          alt="Mountains foreground"
          width={1920}
          height={600}
          priority
          className="w-full object-cover"
        />
      </motion.div>

      {/* Hero Section */}
      <section id="intro" className="pt-32 pb-24 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12"></section>
<section className="pt-32 pb-24 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
  
  {/* Left Side: Text Content */}
  <div className="flex-1 text-left">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {"Hi, I'm ".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
        <span className="text-purple-700">
          {"Kyle.".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (index + 8) * 0.1 }} // Starts after "Hi, I'm "
            >
              {char}
            </motion.span>
          ))}
        </span>
      </motion.span>
    </h1>

    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      className="text-gray-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
    >
      Computer engineering student pursuing a career in artificial intelligence / machine learning.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2 }}
      className="flex gap-4"
    >
      <Link
        href="/resume.pdf"
        target="_blank"
        className="px-8 py-4 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-200 transition-all duration-300"
      >
        View Resume
      </Link>
    </motion.div>
  </div>

  {/* Right Side: Professional Image */}
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="relative"
  >
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* The Purple Border Decor */}
      <div className="absolute -inset-4 border-2 border-purple-700/30 rounded-2xl rotate-6 pointer-events-none"></div>
      
      {/* Main Image Container */}
      <div className="relative w-full h-full rounded-2xl border-4 border-purple-700 overflow-hidden shadow-2xl">
        <Image
          src="/me.png" // Ensure your file is named me.png in the public folder
          alt="Kyle"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </motion.div>
</section>

      {/* Experience Section */}
<section id="experience" className="relative w-full bg-[#F8F7FF] py-32 overflow-hidden">
  
  {/* Simplified Blocky Wheel Background */}
  <div className="absolute top-1/4 -right-20 opacity-[0.15] pointer-events-none select-none">
    <svg 
      width="500" 
      height="500" 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx="100" 
        cy="100" 
        r="80" 
        stroke="#7E22CE" 
        strokeWidth="12" 
        strokeDasharray="18 4" // This creates the "blocky" segments
      />
      <circle 
        cx="100" 
        cy="100" 
        r="60" 
        stroke="#7E22CE" 
        strokeWidth="1" 
        className="opacity-50"
      />
    </svg>
  </div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    <h2 className="text-5xl md:text-6xl font-semibold mb-20 text-center tracking-tight text-gray-900">
      Experience
    </h2>

    <div className="relative">
      {/* Timeline Center Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-200 h-full"></div>

      <div className="flex flex-col space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            className={`relative w-full flex ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-[#F8F7FF] z-10"></div>

            {/* Experience Card */}
            <motion.div
              className={`bg-white border border-purple-100 rounded-2xl p-7 max-w-md shadow-sm text-left ${
                index % 2 === 0 ? "mr-12" : "ml-12"
              }`}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(126, 34, 206, 0.1)" }}
            >
              <div className="flex items-center gap-4 mb-4 flex-row">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={40}
                    height={40}
                    className="rounded-md object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{exp.role}</h3>
                  <p className="text-purple-600 font-medium text-sm">{exp.company}</p>
                </div>
              </div>

              <p className="text-gray-400 text-xs font-semibold mb-4 uppercase tracking-widest">
                {exp.duration}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {exp.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
<section 
  id="projects" 
  className="w-full bg-[#EBE6F7] py-24" // This hex matches your image exactly
>
  {/* Content Container - This keeps the text and cards centered */}
  <div className="max-w-6xl mx-auto px-6">
    
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-6xl font-semibold mb-10 text-center tracking-tight text-gray-900"
    >
      Projects
    </motion.h2>

    {/* Category Buttons */}
    <div className="flex justify-center mb-12 gap-4">
      {(["personal", "school"] as const).map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selectedCategory === cat 
              ? "bg-purple-700 text-white shadow-md" 
              : "bg-white/80 text-gray-600 hover:bg-white"
          }`}
        >
          {cat === "personal" ? "Personal/Club" : "School"}
        </button>
      ))}
    </div>

    {/* Grid */}
    <motion.div 
      layout 
      className="grid md:grid-cols-2 gap-8"
    >
      <AnimatePresence mode="popLayout">
        {projects
          .filter((p) => p.category === selectedCategory)
          .map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.shortDescription}</p>

                <div className="flex gap-4">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-colors"
                  >
                    View Details
                  </button>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 rounded-lg border-2 border-purple-700 text-purple-700 hover:bg-purple-50 transition-colors"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>
  </div>
</section>
{/* Increase the py-32 to py-48 or py-64 for more breathing room */}
<section id="experience" className="relative w-full bg-[#F8F7FF] py-16 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 relative z-10">
    {/* Your Content */}
  </div>
</section>
      {/* Skills */}
      <section className="pb-32 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-semibold mb-10 text-center tracking-tight text-gray-900">
          Skills
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <SkillCard name="Python" icon="/icons/python.png" />
          <SkillCard name="TensorFlow" icon="/icons/tensorflow.png" />
          <SkillCard name="PyTorch" icon="/icons/pytorch.png" />
          <SkillCard name="scikit-learn" icon="/icons/scikitlearn.png" />
          <SkillCard name="NumPy" icon="/icons/numpy.png" />
          <SkillCard name="Pandas" icon="/icons/pandas.png" />
          <SkillCard name="OpenCV" icon="/icons/opencv.png" />
          <SkillCard name="AWS" icon="/icons/aws.png" />
          <SkillCard name="Docker" icon="/icons/docker.png" />
          <SkillCard name="GitHub" icon="/icons/github.png" />
          <SkillCard name="C++" icon="/icons/cpp.png" />
          <SkillCard name="Java" icon="/icons/java.png" />
          <SkillCard name="Swift" icon="/icons/swift.png" />
          <SkillCard name="Linear Algebra" icon="/icons/linear-algebra.png" />
          <SkillCard name="Circuit Design" icon="/icons/circuit-design.png" />
        </motion.div>
      </section>

      {/* Education Section */}
<section id="education" className="py-32 bg-purple-50 overflow-hidden">
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-5xl md:text-6xl font-semibold mb-16 text-center tracking-tight text-gray-900"
  >
    Education
  </motion.h2>

  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    
    {/* Left: Text Card (Appears slightly after the logo) */}
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="bg-white border-2 border-purple-200 rounded-3xl p-10 shadow-lg"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
        Bachelor of Computer Engineering
      </h3>

      <p className="text-lg mb-6 text-gray-700">
        <span className="font-medium">McMaster University</span> <br />
        Expected Graduation: 2028
      </p>

      <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
        <li>
          Awards: First Year Dean&apos;s Honours List (2025), Engineering Award of Excellence (2024)
        </li>
        <li>
          Relevant coursework: Data Structures & Algorithms (C++), Microprocessor Systems,
          Digital Logic Design (VHDL, Verilog), Electronic Devices and Circuits I,
          Linear Algebra, Probability & Statistics, Circuits and Waves
        </li>
        <li>
          Team-based design projects and technical presentations
        </li>
      </ul>
    </motion.div>

    {/* Right: School Logo (The "Pop" Effect) */}
    <div className="flex justify-center md:justify-end">
      <motion.img
        src="/education/school-logo.png"
        alt="McMaster University Logo"
        className="w-64 md:w-80 lg:w-96 object-contain"
        
        // POP ANIMATION
        initial={{ opacity: 0, scale: 0.5 }} // Start small and invisible
        whileInView={{ opacity: 1, scale: 1 }} // Grow to full size
        viewport={{ once: true }}
        transition={{ 
          type: "spring",      // Gives it that "bouncy" pop feeling
          stiffness: 260, 
          damping: 20,
          duration: 0.6 
        }}
      />
    </div>

  </div>
</section>

      {/* About */}
<section className="pb-32 max-w-6xl mx-auto px-6">
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-5xl md:text-6xl font-semibold mb-10 text-center tracking-tight text-gray-900"
  >
    About Me
  </motion.h2>

  <motion.ul 
    className="list-disc list-inside text-gray-600 max-w-3xl mx-auto space-y-2"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2, // This creates the "one by one" effect
        },
      },
    }}
  >
    {[
      "Passionate about artificial intelligence / machine learning, and math.",
      "Enjoy applying machine learning techniques to solve real-world problems.",
      "Driven to learn and create solutions which improve global quality of life.",
      "Outside of tech, I love playing soccer, going to the gym, and spending time with friends and family!",
      "Seeking Summer 2026 internships to learn, contribute, and grow in team-driven environments."
    ].map((text, index) => (
      <motion.li 
        key={index}
        variants={{
          hidden: { opacity: 0, x: -20 },
          show: { opacity: 1, x: 0 }
        }}
      >
        {text}
      </motion.li>
    ))}
  </motion.ul>
</section>

      {/* Contact */}
      <section className="pb-16 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-semibold mb-10 text-center tracking-tight text-gray-900">
          Contact
        </h2>

        <div className="flex flex-col gap-4 items-center text-gray-600">
          <p>✉ rebellok@mcmaster.ca</p>
          <p>📞 +1 (437) 324-1211</p>
          <p>📍 McMaster University, Hamilton, ON, Canada</p>
          <div className="flex gap-4 mt-4">
            <Link href="https://github.com/yourusername" target="_blank" className="text-purple-700 hover:text-purple-900">GitHub</Link>
            <Link href="https://www.linkedin.com/in/yourusername/" target="_blank" className="text-purple-700 hover:text-purple-900">LinkedIn</Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {openProject && activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <button
                onClick={() => setOpenProject(false)}
                className="absolute top-4 right-4 z-50 text-gray-600 hover:text-gray-900 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center transition shadow-md"
              >
                ✕
              </button>

              {/* Carousel */}
              <div className="relative">
                <Image
                  src={activeProject.images[imageIndex]}
                  alt={activeProject.title}
                  width={1200}
                  height={700}
                  className="w-full h-[400px] object-cover rounded-t-2xl"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-700/90 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition"
                >
                  ◀
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-700/90 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition"
                >
                  ▶
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-8 space-y-6">
                <h3 className="text-3xl font-semibold text-gray-900">{activeProject.title}</h3>
                <p className="text-gray-600">{activeProject.shortDescription}</p>
                <p className="text-gray-400 whitespace-pre-line">
    {activeProject.longDescription}
  </p>
                <Link
                  href={activeProject.github}
                  target="_blank"
                  className="inline-block text-purple-700 hover:text-purple-900 hover:underline text-lg font-medium"
                >
                  View Source Code on GitHub →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}