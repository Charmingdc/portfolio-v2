import type { Project } from "@/types";

const useProjects = () => {
 const allProjects: Project[] = [
  {
   name: "ScrollJs",
   githubLink: "https://github.com/Charmingdc/ScrollJs",
   type: "JavaScript Library",
   imgSources: [
    "/illustrations/scrolljs-preview.jpg",
    "/illustrations/scrolljs-preview-02.jpg",
    "/illustrations/scrolljs-preview-03.jpg"
   ],
   description:
    "A lightweight JavaScript library for scroll-triggered animations.",
   detailedDescription:
    "ScrollJs is a performance-first library designed for developers who need powerful scroll-triggered animations without the bloat of larger frameworks.",
   challenge:
    "Managing scroll event listeners often leads to layout thrashing and dropped frames as the browser struggles with high-frequency calculations.",
   approach:
    "Built entirely with vanilla JavaScript, I utilized a class-based architecture and the Intersection Observer API to decouple boundary detection from the main thread.",
   solution:
    "A zero-dependency library that offers fine-grained control over animation triggers and custom callback functions for maximum developer flexibility.",
   technologies: ["JavaScript", "Rollup"],
   date: "2024",
   liveUrl: "https://www.npmjs.com/package/@charmingdc/scrolljs"
  },
  {
   name: "Emojinary",
   githubLink: "https://github.com/Charmingdc/Emojinary",
   type: "Web-based Emoji Puzzles Game",
   imgSources: [
    "/illustrations/emojinary-preview.jpg",
    "/illustrations/emojinary-preview-02.jpg",
    "/illustrations/emojinary-preview-03.jpg"
   ],
   description: "AI-powered puzzle game decoding emoji sequences into words.",
   detailedDescription:
    "Emojinary is a full-stack puzzle game that combines AI-driven logic with engaging gameplay to challenge cognitive skills through interactive emoji clues.",
   challenge:
    "Coordinating unpredictable AI generations with a fast-paced client-side game state while maintaining 60fps interaction fidelity.",
   approach:
    "I leveraged Vercel Serverless Functions for AI generation and used Zod for strict schema validation of Groq LLM outputs. The frontend uses React and Motion for physics-based feedback.",
   solution:
    "A resilient gaming engine featuring Daily and Classic modes, supported by a scoring system that rewards accuracy and persistent local progress tracking.",
   technologies: [
    "TypeScript",
    "React",
    "Groq AI",
    "Zod",
    "Vercel Functions",
    "LangChain"
   ],
   date: "2025",
   liveUrl: "https://funemojinary.vercel.app"
  },
  {
   name: "SafeWords",
   githubLink: "https://github.com/Charmingdc/SafeWords",
   type: "Secure Text Encryption Tool",
   imgSources: [
    "/illustrations/safewords-preview.jpg",
    "/illustrations/safewords-preview-02.jpg",
    "/illustrations/safewords-preview-03.jpg"
   ],
   description:
    "Client-side web app for encrypting and decrypting sensitive text.",
   detailedDescription:
    "SafeWords is a privacy-first utility engineered to give users absolute control over their sensitive data through local-only cryptographic operations.",
   challenge:
    "Ensuring that encryption keys and raw data never leave the browser, preventing potential server-side interception or data leaks.",
   approach:
    "I integrated the native Web Cryptography API for AES-GCM encryption and utilized IndexedDB to provide secure, offline-first data persistence.",
   solution:
    "A zero-knowledge application that outputs compact, portable Base64 strings, ensuring total user ownership and confidentiality of data.",
   technologies: ["TypeScript", "React", "Web Cryptography API", "IndexedDB"],
   date: "2025",
   liveUrl: "https://safewords.vercel.app"
  },
  {
   name: "MindEcho",
   githubLink: "https://github.com/Charmingdc/MindEcho",
   type: "Mental Health App",
   imgSources: [
    "/illustrations/mindecho-preview.jpg",
    "/illustrations/mindecho-preview-02.jpg",
    "/illustrations/mindecho-preview-03.jpg"
   ],
   description: "Well-being management featuring mood logging and AI coaching.",
   detailedDescription:
    "MindEcho is a mental health companion designed to help users track emotional trends and engage in positive mental health practices.",
   challenge:
    "Translating abstract user logs into clear, actionable trends that provide genuine insight into mental well-being over time.",
   approach:
    "Built with a HTML5/JavaScript core, I used Firebase for real-time synchronization and ApexCharts to build high-performance data visualizations.",
   solution:
    "A secure dashboard offering mood logging, calming soundscapes, and an AI coach that encourages long-term mental health consistency.",
   technologies: ["JavaScript", "Firebase", "ApexCharts"],
   date: "2025",
   liveUrl: "https://mindecho-six.vercel.app"
  },
  {
   name: "BookQuest",
   githubLink: "https://github.com/Charmingdc/BookQuest",
   type: "Book Discovery App",
   imgSources: [
    "/illustrations/bookquest-preview.jpg",
    "/illustrations/bookquest-preview-02.jpg",
    "/illustrations/bookquest-preview-03.jpg"
   ],
   description: "Discovery app to explore genres and build personalized lists.",
   detailedDescription:
    "BookQuest is a modern platform that streamlines book discovery, allowing users to explore curated genres and manage personal favorites.",
   challenge:
    "Managing large datasets from external APIs while preventing redundant network requests and maintaining a smooth UI state.",
   approach:
    "I used React and TypeScript with TanStack Query to implement intelligent caching and used Firebase for real-time authentication and database scaling.",
   solution:
    "A seamless, responsive browsing experience with optimized data fetching and persistent user collections across all devices.",
   technologies: ["TypeScript", "React", "Firebase", "TanStack Query"],
   date: "2025",
   liveUrl: "https://bookquest-eosin.vercel.app"
  },
  {
   name: "Romanify",
   githubLink: "https://github.com/Charmingdc/Romanify",
   type: "Number-to-Roman converter",
   imgSources: [
    "/illustrations/romanify-preview.jpg",
    "/illustrations/romanify-preview-02.jpg"
   ],
   description:
    "Minimalistic library for converting numbers into Roman numerals.",
   detailedDescription:
    "Romanify is a lightweight TypeScript library built for programmatic conversion of integers into Roman numerals with support for large values.",
   challenge:
    "Handling conversions beyond the standard 3,999 limit while maintaining a zero-dependency, negligible bundle size.",
   approach:
    "I developed a recursive algorithm that extends standard numerals using valid overline notation, focusing on clarity and correctness.",
   solution:
    "A fast, reliable, and open-source ES module that provides accurate conversions for creative and technical documentation projects.",
   technologies: ["TypeScript", "Node.js", "ES Modules"],
   date: "2026",
   liveUrl: "https://romanify.vercel.app"
  },
  {
   name: "Thryve",
   githubLink: "https://github.com/Charmingdc/Thryve",
   type: "Gratitude Journaling App",
   imgSources: [
    "/illustrations/thryve-preview.jpg",
    "/illustrations/thryve-preview-02.jpg",
    "/illustrations/thryve-preview-03.jpg"
   ],
   description: "Journaling app with stress-relief features and streak counts.",
   detailedDescription:
    "Thryve is a mindfulness-focused app designed to encourage daily gratitude through gamified tracking and interactive progress visualization.",
   challenge:
    "Calculating and displaying live consistency streaks based on asynchronous Firebase data streams across different timezones.",
   approach:
    "I used React and Firebase to handle real-time data sync, developing custom date-logic hooks to visualize journaling consistency through calendar integration.",
   solution:
    "A motivating experience that transforms habit-building into a rewarding journey via gamified streaks and secure, private storage.",
   technologies: ["JavaScript", "ReactJS", "Firebase"],
   date: "2025",
   liveUrl: "https://thryve-alpha.vercel.app"
  },
  {
   name: "SwiftScan",
   githubLink: "https://github.com/Charmingdc/SwiftScan",
   type: "Qrcode generator",
   imgSources: [
    "/illustrations/swiftscan-preview.jpg",
    "/illustrations/swiftscan-preview-02.jpg",
    "/illustrations/swiftscan-preview-03.jpg"
   ],
   description: "Minimalistic QR code generator for emails, text, and URLs.",
   detailedDescription:
    "SwiftScan is an open-source utility designed for speed and accessibility, allowing users to generate and export QR codes instantly.",
   challenge:
    "Providing a faster, distraction-free alternative to ad-heavy online generators without sacrificing functionality or export quality.",
   approach:
    "Built with Vite and TypeScript to ensure immediate load times, I focused on a lean frontend architecture that handles generation entirely client-side.",
   solution:
    "A versatile, lightweight generator that supports multiple data types including URLs and phone numbers, with clean UI interactions.",
   technologies: ["TypeScript", "React", "Vite"],
   date: "2025",
   liveUrl: "https://swiftscan-delta.vercel.app"
  }
 ];

 const projects = allProjects.slice(0, 5);
 return { projects, allProjects };
};

export default useProjects;
