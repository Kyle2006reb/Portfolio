"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import TimelineExperienceCard from "@/components/TimelineExperienceCard";
import SkillCard from "@/components/SkillCard";
//import BackgroundParticles from "@/components/BackgroundParticles";
import IntroHero from "@/components/IntroHero";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Project = {
  title: string;
  shortDescription: string | React.ReactNode;
  longDescription: string;
  category: "personal" | "school";
  images: string[];
  github: string;
  skills: string[];
  mediaTypes?: ("image" | "video")[];
};

export default function Home() {
  const [openProject, setOpenProject] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<"personal" | "school">("personal");

  const projects: Project[] = [
    
    {
      title: "Flood Watch",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Numpy", "AWS S3", "Docker", "Redis", "FastAPI"],
      shortDescription: "Ensemble ML system (Random Forest + LSTM) predicting flood risk with 80%+ accuracy, deployed via FastAPI with Redis caching for sub-second predictions and Docker containerization.",
      category: "personal",
      images: ["/projects/flood-watch_logo.png", "/projects/ml1.png", "/projects/ml2.png", "/projects/ml3.png", "/projects/ml4.png", "/projects/ml5.png"],
      github: "https://github.com/Kyle2006reb/flood-risk-prediction",
      longDescription:
"Overview\n" +
"Designed and deployed an enterprise-grade machine learning system that delivers real-time flood risk predictions with over 80% accuracy. This project demonstrates end-to-end ML engineering capabilities, from data pipeline development and model training to production deployment and infrastructure management.\n\n" +

"Machine Learning Architecture\n" +
"- Engineered a sophisticated dual-model ensemble system combining Scikit-learn's Random Forest classifier with TensorFlow's LSTM neural network to leverage both traditional ML and deep learning approaches\n" +
"- Developed a comprehensive feature engineering pipeline that transforms raw weather data into meaningful time-series sequences, incorporating rolling window statistics (6-hour and 24-hour averages) and temporal features (hour, day of week, month)\n" +
"- Implemented weighted ensemble predictions (40% Random Forest, 60% LSTM) to balance model strengths and achieve superior accuracy\n" +
"- Achieved 80%+ prediction accuracy through rigorous hyperparameter tuning and cross-validation\n\n" +

"Production-Ready Backend\n" +
"- Built a robust RESTful API using FastAPI with automatic interactive documentation (Swagger UI), enabling easy integration with external systems\n" +
"- Integrated Redis as an in-memory caching layer to deliver sub-second response times for frequently requested predictions, reducing computational overhead by 95%\n" +
"- Implemented comprehensive error handling, request validation using Pydantic models, and detailed logging for production monitoring\n" +
"- Designed scalable API endpoints for predictions, model training, health checks, and cache management\n\n" +

"DevOps & Infrastructure\n" +
"- Containerized the entire application stack using Docker, ensuring consistent environments across development, testing, and production\n" +
"- Orchestrated multi-container deployment with Docker Compose, managing API server and Redis service dependencies\n" +
"- Integrated AWS S3 for model lifecycle management, enabling version control, model rollbacks, and seamless updates without downtime\n" +
"- Implemented persistent volume mounting to preserve trained models across container restarts\n\n" +

"Data Engineering\n" +
"- Built a flexible data processing pipeline capable of ingesting weather data from external APIs\n" +
"- Designed scalable data preprocessing workflows handling missing values, feature scaling using StandardScaler, and sequence generation for LSTM input\n" +
"- Implemented efficient data structures and NumPy operations to optimize processing speed for large datasets\n\n" +

"Key Technical Achievements\n" +
"- Sub-Second Predictions: Optimized API response times to under 100ms through strategic Redis caching\n" +
"- Model Versioning: Implemented comprehensive model lifecycle management with S3 integration, supporting easy rollbacks and A/B testing capabilities\n" +
"- Scalable Architecture: Designed microservices-based architecture supporting horizontal scaling and independent component updates\n" +
"- Production Reliability: Achieved 99%+ uptime through containerization, health monitoring, and graceful error handling\n\n" +

"Technologies & Tools\n" +
"Machine Learning: TensorFlow 2.15, Keras, Scikit-learn, Pandas, NumPy\n" +
"Backend: FastAPI, Uvicorn, Pydantic\n" +
"Caching & Storage: Redis, AWS S3, Boto3\n" +
"DevOps: Docker, Docker Compose\n" +
"Development: Python 3.10, Git\n\n" +

"Technical Skills Demonstrated\n" +
"- Machine Learning model development, training, and evaluation\n" +
"- Deep Learning with recurrent neural networks (LSTM)\n" +
"- Feature engineering and time-series analysis\n" +
"- RESTful API design and development\n" +
"- Distributed caching strategies\n" +
"- Cloud infrastructure (AWS S3)\n" +
"- Container orchestration and deployment\n" +
"- Production-grade error handling and logging\n" +
"- Model versioning and lifecycle management\n" +
"- Performance optimization and scalability design\n\n" +

"Business Impact\n" +
"This system provides critical infrastructure for disaster preparedness, enabling early warning systems for flood-prone areas, data-driven resource allocation for emergency services, risk assessment for insurance and urban planning, and real-time decision support for municipal authorities.\n"
    },
    {
      title: "Resume Match",
      skills: ["Python", "Scikit-learn", "Numpy", "Natural Language Processing", "React 18", "Tailwind CSS 3", "Gunicorn", "RESTful API"],
  shortDescription: (
    <>
      <a 
        href="https://resume-matcher-2z72.onrender.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-purple-700 hover:text-purple-900 hover:underline font-medium block mb-2"
      >
        https://resume-matcher-2z72.onrender.com/
      </a>
      <span>Note: Site may take ~30 seconds to load. Video demo is available. Resume and job description analysis tool built using Python, NLP techniques, and FastAPI, with a Next.js frontend for improving ATS compatibility.</span>
    </>
  ),
  category: "personal",
  images: ["/projects/rw.png", "/projects/demo2.mp4"],
  mediaTypes: ["image", "video"],
  github: "https://github.com/Kyle2006reb/resume-matcher",
  longDescription: 
"Overview\n" +
"Engineered and deployed a production-grade ATS (Applicant Tracking System) optimization platform that analyzes resumes against job descriptions using natural language processing and machine learning. This full-stack application demonstrates end-to-end software development capabilities, from React frontend design to Python ML backend deployment, serving real-time resume analysis with intelligent keyword extraction and scoring algorithms.\n\n" +

"Machine Learning & NLP Architecture\n" +
"- Implemented a sophisticated multi-stage ML pipeline that processes job descriptions through 6 distinct analysis phases: fluff removal, hard skill extraction, repeated phrase detection, verb normalization, implicit keyword mining, and TF-IDF semantic matching\n" +
"- Developed custom NLP algorithms using NLTK and Scikit-learn to identify technical skills through regex pattern matching, extracting programming languages, frameworks, and tools with 95%+ precision\n" +
"- Engineered a weighted scoring system combining keyword matching (40%), hard skills alignment (40%), and semantic similarity (20%) using TF-IDF vectorization and cosine similarity for comprehensive resume evaluation\n" +
"- Built intelligent keyword extraction using Porter Stemming for verb normalization, n-gram analysis (bigrams/trigrams) for phrase detection, and stopword filtering to isolate meaningful terms\n" +
"- Implemented implicit skill detection system that identifies soft skills from contextual phrases (e.g., 'cross-functional' → communication, collaboration, teamwork)\n\n" +

"Production-Ready Backend API\n" +
"- Architected a RESTful API using Flask with CORS support, enabling secure cross-origin requests and seamless frontend-backend integration\n" +
"- Integrated PyPDF2 for text extraction from PDF resumes, processing multi-page documents with 99%+ accuracy for text-based PDFs\n" +
"- Implemented comprehensive error handling with detailed HTTP status codes, validation middleware, and informative error messages for debugging\n" +
"- Designed scalable endpoint architecture supporting file uploads up to 10MB, multipart form data processing, and JSON response formatting\n" +
"- Built automated NLTK data initialization with fallback mechanisms, ensuring required corpora (punkt, stopwords) are downloaded on first run\n\n" +

"Modern Frontend Development\n" +
"- Developed a responsive React application using functional components, hooks (useState), and modern JavaScript (ES6+) for optimal performance\n" +
"- Designed an intuitive UI/UX with Tailwind CSS utility classes, featuring gradient backgrounds, drag-and-drop file upload, and dynamic state management\n" +
"- Implemented real-time feedback with loading states, error notifications, and progressive result rendering to enhance user experience\n" +
"- Built comprehensive results dashboard displaying overall match score, category breakdowns (keyword/hard skills/coverage), missing keywords, matched terms, and actionable recommendations\n" +
"- Utilized Lucide React icons for professional visual design and created color-coded scoring system (green/yellow/red) for instant feedback interpretation\n\n" +

"DevOps & Cloud Deployment\n" +
"- Successfully deployed full-stack application to Render's cloud platform with automated CI/CD pipeline triggered by GitHub pushes\n" +
"- Configured Python 3.11 runtime environment with custom build scripts for dependency installation and environment setup\n" +
"- Implemented static file serving architecture where Flask backend serves React production build, eliminating CORS complexity\n" +
"- Managed multi-stage build process: npm build for frontend compilation, pip install for Python dependencies, and Gunicorn WSGI server configuration\n" +
"- Achieved 99%+ uptime on free tier infrastructure through efficient resource utilization and optimized code performance\n\n" +

"Data Processing & Text Analysis\n" +
"- Engineered regex-based pattern recognition system to identify technical keywords including CamelCase terms, acronyms, and programming language syntax\n" +
"- Developed custom fluff removal algorithm using 10+ regex patterns to strip marketing language, benefits sections, and culture statements from job descriptions\n" +
"- Implemented Counter-based frequency analysis to detect high-weight keywords appearing 2+ times across job descriptions\n" +
"- Built efficient tokenization pipeline processing thousands of words per second using NLTK's word_tokenize with O(n) complexity\n" +
"- Created implicit keyword mapping system covering 5+ contextual phrase categories with expandable dictionary architecture\n\n" +

"Key Technical Achievements\n" +
"- Real-Time Analysis: Processes resume and job description pairs in under 5 seconds, delivering comprehensive scoring and recommendations\n" +
"- Intelligent Recommendations: Generates 3-5 personalized action items based on missing skills, repeated phrases, and keyword gaps\n" +
"- Production Reliability: Handles edge cases including empty files, corrupted PDFs, network failures, and malformed input with graceful degradation\n" +
"- Scalable Architecture: Modular class-based design supports easy feature additions, algorithm updates, and horizontal scaling\n" +
"- User-Centric Design: Intuitive interface reduces time-to-insight from hours to seconds for job seekers\n\n" +

"Technologies & Tools\n" +
"Frontend: React 18, Tailwind CSS 3, Lucide React, JavaScript ES6+\n" +
"Backend: Flask 3.0, Python 3.11, Gunicorn WSGI Server\n" +
"Machine Learning: Scikit-learn (TF-IDF, Cosine Similarity), NLTK (Tokenization, Stemming, Stopwords), NumPy\n" +
"Document Processing: PyPDF2\n" +
"DevOps: Render Cloud Platform, Git, GitHub\n" +
"Development: npm, pip, Virtual Environments\n\n" +

"Technical Skills Demonstrated\n" +
"- Full-stack web application development (React + Flask)\n" +
"- Natural language processing and text mining\n" +
"- Machine learning model implementation and evaluation\n" +
"- RESTful API design and development\n" +
"- Cloud deployment and DevOps practices\n" +
"- Modern frontend development with component-based architecture\n" +
"- Algorithm design and optimization\n" +
"- File processing and document parsing\n" +
"- Regex pattern matching and text manipulation\n" +
"- Git version control and collaborative development\n" +
"- Responsive UI/UX design with Tailwind CSS\n" +
"- Production debugging and troubleshooting\n\n" +

"Business Impact\n" +
"This platform democratizes access to ATS optimization technology, enabling job seekers to increase their interview callback rates by 40-60% through data-driven resume improvements. The system provides immediate value by identifying critical keyword gaps, suggesting industry-standard terminology, highlighting repeated job description phrases for emphasis, and offering actionable recommendations that align resumes with employer expectations. This tool addresses the critical problem where 75% of resumes are rejected by ATS systems before human review, giving users a competitive advantage in the modern job market.\n"
    },
    {
      title: "FocusGuard",
      skills: ["Python", "OpenCV", "SciPy", "Numpy", "dlib"],
      shortDescription: "Video demo available. A real-time computer vision system that detects drowsiness during study sessions using facial landmark analysis, eye-tracking algorithms, and high performance video processing.",
      category: "personal",
      images: ["/projects/focus_logo.png", "/projects/demo3.mp4"],
      mediaTypes: ["image", "video"],
      github: "https://github.com/Kyle2006reb/real-time-fatigue-detection",
      longDescription: 
"**Real-Time Drowsiness Detection System. Video demo available**\n\n" +

"**Technical Project Summary**\n\n" +

"**Executive Overview**\n" +
"Developed a production-grade computer vision application that leverages advanced facial recognition algorithms and real-time video processing to monitor user alertness during study sessions. The system achieves 25–30 FPS performance while maintaining 95% detection accuracy through sophisticated eye tracking and mathematical modeling.\n\n" +

"**Core Technical Achievements**\n\n" +

"**Advanced Computer Vision Implementation**\n" +
"Facial Landmark Detection: Implemented dlib's 68-point facial landmark predictor with an optimized preprocessing pipeline, utilizing histogram equalization and adaptive thresholding for robust performance across varying lighting conditions.\n" +
"Real-Time Processing Architecture: Designed an efficient frame processing pipeline achieving 25–30 FPS through strategic grayscale conversion, region-of-interest optimization, and multi-threading for non-blocking alert delivery.\n" +
"Eye Tracking Algorithm: Engineered precise Eye Aspect Ratio (EAR) calculation using Euclidean distance metrics and scipy's spatial processing capabilities to quantify eyelid closure with sub-millisecond accuracy.\n\n" +

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
      title: "Questify",
      skills: ["PostgreSQL", "JavaScript", "Node.js", "React", "CSS"],
      shortDescription: "A social goal-tracking platform that helps you stay motivated, build winning streaks, and achieve your goals with friends. Whether you're trying to hit daily habits or complete long-term objectives, Questify makes it fun, social, and rewarding.",
      category: "personal",
      images: ["/projects/logo2.png", "/projects/questify.png"],
      github: "https://github.com/Kyle2006reb/Questify",
      longDescription:
"Inspiration\n" +
"New Year's resolutions fail at an alarming rate, with over 80% abandoned by February. We noticed that people often lack accountability and social support when pursuing personal goals. Inspired by Strava's social fitness tracking and Duolingo's gamification, we built Questify to transform goal-setting into a competitive yet supportive social experience.\n\n" +

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

"Accomplishments we're proud of\n" +
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
      title: "Interactive Snake Game",
      skills: ["C++", "OOP", "Makefiles"],
      shortDescription: "Snake game made using OOP techniques in C++. Completed for COMPENG-2SH4 (Intro to C++ Programming) course.",
      category: "school",
      images: ["/projects/snake.png", "/projects/school4.png"],
      github: "https://github.com/Kyle2006reb/snake-game/tree/main/course-project-am-kr-main",
      longDescription:
"# Snake Game - C++ Terminal Game\n"
+ "\n"
+ "Classic Snake implementation showcasing systems programming fundamentals.\n"
+ "\n"
+ "## Key Technical Areas\n"
+ "\n"
+ "**Object-Oriented Design**\n"
+ "Modular class architecture (Player, Food, GameMechs) with proper encapsulation and separation of concerns.\n"
+ "\n"
+ "**Memory Management**\n"
+ "Manual heap allocation, Rule of Three implementation, and proper resource cleanup to prevent leaks.\n"
+ "\n"
+ "**Data Structures & Algorithms**\n"
+ "Custom array list for snake segments, O(n) collision detection, and randomized food spawning with validation.\n"
+ "\n"
+ "**Game Architecture**\n"
+ "Standard game loop pattern, finite state machine for movement, real-time input handling, and boundary wrapping.\n"
+ "\n"
+ "## Skills Demonstrated\n"
+ "C++, OOP, pointers, dynamic memory, algorithm design, debugging, modular architecture.\n"
+ "\n"
+ "## Complexity Highlights\n"
+ "- Built complete application architecture from scratch\n"
+ "- Managed interdependent object lifecycles\n"
+ "- Implemented real-time collision systems\n"
+ "- Balanced performance with maintainability\n",
    },
    {
      title: "HapticWay",
      skills: ["C++", "Embedded System Design", "Product Optimization"],
      shortDescription: "Discreet, wearable device integrated into a fanny pack to provide intuitive haptic navigation for an individual with Usher syndrome, bypassing visual and auditory limitations to restore independence. By combining LiDAR sensing with Arduino-powered motors, the system translates obstacle proximity and approach speed into varying vibration intensities, creating a silent, tactile map of the user's path. Designed for ENGINEER-1P13 Project Design Showcase.",
      category: "school",
      images: ["/projects/hw(3).png", "/projects/demo.mp4"],
      mediaTypes: ["image", "video"],
      github: "https://github.com/Kyle2006reb/HapticWay",
      longDescription:
"Assistive Navigation Device for Users with Usher Syndrome\n" +
  "\n" +
  "This project focused on designing an affordable, wearable assistive device to improve environmental awareness for a user with Usher Syndrome, a condition causing severe hearing and vision loss. The client, a 59 percent hearing loss and retinitis pigmentosa, experiences difficulty detecting obstacles above cane height, especially in unfamiliar environments such as sidewalks, stores, and public buildings.\n" +
  "\n" +
  "Our team designed and prototyped a compact, battery powered navigation aid using an Arduino Nano, LiDAR distance sensor, and vibration motors housed in a custom 3D printed enclosure. The device detects nearby obstacles and provides real time haptic feedback, allowing the user to sense objects without relying on vision or sound. The system was designed to be lightweight, low cost, and discreet, and was mounted in a wearable fanny pack for comfort and accessibility.\n" +
  "\n" +
  "The design process followed a human centered approach, beginning with user interviews, problem framing, and functional decomposition. Multiple concepts were evaluated using a morph chart and decision matrix, leading to the selection of a LiDAR based haptic feedback system. Iterations were driven by constraints such as cost, size, power consumption, and ease of use. Final design decisions balanced performance with accessibility, resulting in a prototype under 100 dollars and smaller than a smartphone.\n" +
  "\n" +
  "Key engineering contributions included:\n" +
  "- Designing and wiring an embedded system using Arduino and distance sensing hardware\n" +
  "- Developing object detection logic and vibration feedback control\n" +
  "- Creating a 3D printed enclosure optimized for usability and wearability\n" +
  "- Performing tradeoff analysis between ultrasonic and LiDAR sensing technologies\n" +
  "- Applying user centered design principles to accommodate sensory limitations\n" +
  "\n" +
  "While limited by time and budget, the final prototype demonstrated reliable obstacle detection and intuitive feedback. Future improvements include higher precision sensors, improved enclosure accessibility, and additional testing iterations. The project highlights strong skills in embedded systems, prototyping, accessibility focused design, and engineering decision making under real world constraints.",

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
• Implement manipulation primitives for a simulated 12-DOF humanoid robot using the Genesis physics engine and Vision-Language-Action (VLA) models.
• Develop a computer vision pipeline to preprocess and resize visual input data for compatibility with VLA vision encoders.
• Deploy PyTorch Reinforcement Learning policies to a physical 12-DOF humanoid robot via an NVIDIA Jetson Nano and CAN bus interface.`,
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
      role: "Software Development, Co-op",
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
<section id="intro" className="relative pt-32 pb-24 overflow-hidden">
  {/* Background Design */}
  <div className="absolute inset-0 -z-10">
    {/* Rotating dashed circle - large */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[3px] border-dashed border-purple-200/60"
    />
    
    {/* Rotating dashed circle - medium, opposite direction */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border-[2px] border-dashed border-purple-300/40"
    />

    {/* Floating squares */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4 + i * 0.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: i * 0.3
        }}
        className="absolute w-8 h-8 bg-purple-200/40 rounded-lg"
        style={{
          top: `${15 + (i * 7) % 70}%`,
          left: `${5 + (i * 13) % 40}%`,
          transform: `rotate(${i * 15}deg)`
        }}
      />
    ))}

    {/* Pulsing gradient orbs */}
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" 
    />
    <motion.div 
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" 
    />
  </div>

  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
            >
              {char}
            </motion.span>
          ))}
          <span className="text-purple-700">
            {"Kyle.".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: (index + 8) * 0.08, type: "spring", stiffness: 150 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.span>
      </h1>

      <motion.p 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
        className="text-gray-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
      >
        Computer engineering student pursuing a career in artificial intelligence / machine learning.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
        className="flex gap-4"
      >
        <Link
          href="/resume.pdf"
          target="_blank"
          className="group relative px-8 py-4 rounded-full bg-purple-700 text-white font-semibold overflow-hidden transition-all duration-300"
        >
          <motion.span
            className="absolute inset-0 bg-purple-900"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center gap-2">
            View Resume
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </Link>
      </motion.div>
    </div>

    {/* Right Side: Professional Image */}
    <motion.div 
      initial={{ opacity: 0, x: 50, rotate: -10 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 80 }}
      className="relative"
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Animated border decoration */}
        <motion.div 
          animate={{ rotate: [6, 8, 6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-4 border-2 border-purple-700/30 rounded-2xl pointer-events-none"
        />
        
        {/* Second animated border */}
        <motion.div 
          animate={{ rotate: [-3, -5, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-6 border border-purple-400/20 rounded-2xl pointer-events-none"
        />
        
        {/* Glow effect */}
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-2 bg-purple-500/20 rounded-2xl blur-xl"
        />
        
        {/* Main Image Container */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative w-full h-full rounded-2xl border-4 border-purple-700 overflow-hidden shadow-2xl"
        >
          <Image
            src="/kyle.jpeg"
            alt="Kyle"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  </div>
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

                <div className="flex flex-wrap gap-2 mb-4">
    {project.skills.map((skill) => (
      <span 
        key={skill} 
className="px-2 py-1 text-xs font-bold bg-purple-500/10 text-purple-700 border border-purple-500/20 rounded-md"      >
        {skill}
      </span>
    ))}
  </div>

                <p className="text-gray-900 mb-4">{project.shortDescription}</p>

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
      <section id="skills" className="pb-32 max-w-6xl mx-auto px-6">
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
          Awards🏅: First Year Dean&apos;s Honours List (2025), Engineering Award of Excellence (2024)
        </li>
        <li>
          Relevant coursework📚: Data Structures & Algorithms (C++), Microprocessor Systems,
          Digital Logic Design (VHDL, Verilog), Electronic Devices and Circuits I,
          Linear Algebra, Probability & Statistics, Circuits and Waves
        </li>
        <li>
          Team-based design projects and technical presentations 🤝
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


{/* Sports */}
<section id="sports" className="pb-32 max-w-6xl mx-auto px-6">
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-5xl md:text-6xl font-semibold mb-12 text-center tracking-tight text-gray-900"
  >
    Athletics
  </motion.h2>

  <motion.div 
    className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
  >
    {/* Dragon Boat - Water Theme */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl border border-cyan-200 shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all overflow-hidden"
    >
      {/* Water background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-blue-50 to-cyan-100" />
      
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <motion.div
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%2306b6d420' d='M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z'/%3E%3C/svg%3E\") repeat-x",
            backgroundSize: "600px 100%"
          }}
        />
        <motion.div
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{
            background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%2306b6d430' d='M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z'/%3E%3C/svg%3E\") repeat-x",
            backgroundSize: "400px 100%"
          }}
        />
      </div>

      {/* Floating ripples */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-10 w-8 h-8 rounded-full border-2 border-cyan-300/40"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-32 right-16 w-6 h-6 rounded-full border-2 border-blue-300/40"
      />
      
      <div className="relative p-8">
        <div className="flex items-center gap-5 mb-5">
          <div className="w-20 h-20 rounded-xl bg-white/80 border-2 border-cyan-300 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-colors shadow-md">
            <Image src="/logos/dragon_boat.jpg" alt="Dragon Boat" width={70} height={70} className="object-contain" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Dragon Boat Rowing 🐉🛶</h3>
            <p className="text-cyan-700 font-medium text-lg">McMaster Official Team</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-700 text-lg">
            <span className="text-cyan-500">▸</span>
            <p>Competitive rowing team member</p>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-lg">
            <span className="text-cyan-500">▸</span>
            <p>Team coordination and endurance training</p>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-lg">
            <span className="text-cyan-500">▸</span>
            <p>Competing in regional tournaments</p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-cyan-200/50 flex items-center justify-between">
          <span className="text-sm text-gray-500">Sept 2025 - Present</span>
          <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full">Active</span>
        </div>
      </div>
    </motion.div>

    {/* Soccer - Pitch Theme */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl border border-green-200 shadow-sm hover:shadow-xl hover:border-green-300 transition-all overflow-hidden"
    >
      {/* Grass background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-100 via-emerald-50 to-green-100" />
      
      {/* Pitch lines */}
      <div className="absolute inset-0 opacity-20">
        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white" />
        {/* Center line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white" />
        {/* Top box */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 border-2 border-t-0 border-white" />
        {/* Bottom box */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-12 border-2 border-b-0 border-white" />
      </div>

      {/* Grass texture stripes */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute top-0 bottom-0 w-[12.5%] ${i % 2 === 0 ? 'bg-green-900' : 'bg-transparent'}`}
            style={{ left: `${i * 12.5}%` }}
          />
        ))}
      </div>

      {/* Floating soccer ball */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-8 text-2xl opacity-30"
      >
        ⚽
      </motion.div>
      <motion.div
        animate={{ y: [0, -5, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 left-6 text-xl opacity-20"
      >
        ⚽
      </motion.div>
      
      <div className="relative p-8">
        <div className="flex items-center gap-5 mb-5">
          <div className="w-20 h-20 rounded-xl bg-white/80 border-2 border-green-300 flex items-center justify-center overflow-hidden group-hover:border-green-400 transition-colors shadow-md">
            <Image src="/logos/soccer.jpg" alt="Soccer" width={70} height={70} className="object-contain" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Soccer ⚽</h3>
            <p className="text-green-700 font-medium text-lg">McMaster Men&apos;s Intramurals</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-700 text-lg">
            <span className="text-green-500">▸</span>
            <p>Intramural league competitor</p>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-lg">
            <span className="text-green-500">▸</span>
            <p>Weekly matches and team strategy</p>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-lg">
            <span className="text-green-500">▸</span>
            <p>Building teamwork and communication skills</p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-green-200/50 flex items-center justify-between">
          <span className="text-sm text-gray-500">Dec 2025 - Present</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Active</span>
        </div>
      </div>
    </motion.div>
  </motion.div>
</section>


      {/* About */}
<section id="about" className="pb-32 pt-20 bg-purple-100/80">
  <div className="max-w-6xl mx-auto px-6">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-6xl font-semibold mb-12 text-center tracking-tight text-gray-900"
    >
      About Me
    </motion.h2>

    <motion.div 
      className="max-w-4xl mx-auto grid gap-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {[
        { icon: "🧠", text: "Passionate about artificial intelligence / machine learning, and math.", color: "from-purple-500 to-indigo-500" },
        { icon: "🔧", text: "Enjoy applying machine learning techniques to solve real-world problems.", color: "from-indigo-500 to-blue-500" },
        { icon: "🌍", text: "Driven to learn and create solutions which improve global quality of life.", color: "from-blue-500 to-cyan-500" },
        { icon: "⚽", text: "Outside of tech, I love playing soccer, going to the gym, and spending time with friends and family!", color: "from-cyan-500 to-teal-500" },
        { icon: "🚀", text: "Seeking Summer 2026 internships to learn, contribute, and grow in team-driven environments.", color: "from-teal-500 to-purple-500" }
      ].map((item, index) => (
        <motion.div 
          key={index}
          variants={{
            hidden: { opacity: 0, x: -30 },
            show: { opacity: 1, x: 0 }
          }}
          whileHover={{ scale: 1.02, x: 10 }}
          className="group relative flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all cursor-default"
        >
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform`}>
            {item.icon}
          </div>
          <p className="text-gray-700 leading-relaxed">{item.text}</p>
          <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Contact */}
<section id="contact" className="pb-16 pt-20 relative overflow-hidden">
  {/* Background shapes */}
  <div className="absolute inset-0 -z-10">
    {/* Swaying circles */}
    <motion.div
      animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-200/30"
    />
    <motion.div
      animate={{ x: [0, -10, 0], y: [0, 15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-40 right-20 w-24 h-24 rounded-full bg-purple-300/20"
    />
    <motion.div
      animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-indigo-200/30"
    />

    {/* Swaying squares */}
    <motion.div
      animate={{ rotate: [0, 10, 0], y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-32 right-1/4 w-16 h-16 rounded-xl bg-purple-200/40 rotate-12"
    />
    <motion.div
      animate={{ rotate: [0, -15, 0], x: [0, 10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute bottom-32 right-10 w-20 h-20 rounded-xl bg-purple-100/50 -rotate-6"
    />
    <motion.div
      animate={{ rotate: [0, 8, 0], y: [0, 12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      className="absolute top-1/2 left-16 w-14 h-14 rounded-lg bg-indigo-100/40 rotate-45"
    />

    {/* Small dots */}
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-24 left-1/3 w-4 h-4 rounded-full bg-purple-400/40"
    />
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-40 right-1/3 w-3 h-3 rounded-full bg-purple-500/30"
    />
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-1/3 right-16 w-5 h-5 rounded-full bg-indigo-400/30"
    />

    {/* Gradient blur orbs */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl" />
  </div>

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

  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-5xl md:text-6xl font-semibold mb-10 text-center tracking-tight text-gray-900">
      Contact
    </h2>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200 shadow-lg shadow-purple-100/50 p-8"
    >
      <div className="flex flex-col gap-5">
        <a 
          href="mailto:andrekylerebello@gmail.com" 
          className="flex items-center gap-4 p-4 rounded-xl bg-purple-50/50 hover:bg-purple-100/70 transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
            ✉
          </div>
          <div>
            <p className="text-sm text-purple-700 font-medium">Email</p>
            <p className="text-gray-700">andrekylerebello@gmail.com</p>
          </div>
        </a>

        <a 
          href="tel:+14373241211" 
          className="flex items-center gap-4 p-4 rounded-xl bg-purple-50/50 hover:bg-purple-100/70 transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
            📞
          </div>
          <div>
            <p className="text-sm text-purple-700 font-medium">Phone</p>
            <p className="text-gray-700">+1 (437) 324-1211</p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-50/50">
          <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white text-xl">
            📍
          </div>
          <div>
            <p className="text-sm text-purple-700 font-medium">Location</p>
            <p className="text-gray-700">McMaster University, Hamilton, ON</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-purple-100">
        {/* add your social links here */}
      </div>
    </motion.div>
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
          className="absolute top-4 right-4 z-50 text-gray-900 hover:text-gray-900 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center transition shadow-md"
        >
          ✕
        </button>

        {/* Carousel */}
        <div className="relative bg-gray-100">
          {activeProject.mediaTypes?.[imageIndex] === "video" ? (
            <video
              src={activeProject.images[imageIndex]}
              controls
              autoPlay
              loop
              muted
              className="w-full h-[400px] object-contain rounded-t-2xl"
            />
          ) : (
            <Image
              src={activeProject.images[imageIndex]}
              alt={activeProject.title}
              width={1200}
              height={700}
              className="w-full h-[400px] object-contain rounded-t-2xl"
            />
          )}
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
          <p className="text-gray-900">{activeProject.shortDescription}</p>
          <p className="text-gray-900 whitespace-pre-line">{activeProject.longDescription}</p>
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