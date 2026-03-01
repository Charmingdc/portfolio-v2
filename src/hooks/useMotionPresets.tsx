import { useReducedMotion } from "motion/react";
import type { Variants, Easing } from "motion/react";

const useMotionPresets = () => {
 const reduceMotion = useReducedMotion();

 const duration = reduceMotion ? 0.2 : 0.4;
 const ease: Easing = reduceMotion ? [0, 0, 1, 1] : [0.42, 0, 0.58, 1];

 const containerAnim: Variants = {
  hide: {},
  show: {
   transition: {
    staggerChildren: 0.12,
    delayChildren: 0.1
   }
  }
 };

 const fadeInUp: Variants = {
  hide: { opacity: 0, y: reduceMotion ? 0 : "1rem" },
  show: { opacity: 1, y: 0, transition: { duration, ease } }
 };

 const fadeInLeft: Variants = {
  hide: { opacity: 0, x: reduceMotion ? 0 : "-1rem" },
  show: { opacity: 1, x: 0, transition: { duration, ease } }
 };

 const fadeInRight: Variants = {
  hide: { opacity: 0, x: reduceMotion ? 0 : "1rem" },
  show: { opacity: 1, x: 0, transition: { duration, ease } }
 };

 const fadeIn: Variants = {
  hide: { opacity: 0, scale: reduceMotion ? 1 : 0.5 },
  show: { opacity: 1, scale: 1, transition: { duration, ease } }
 };

 return {
  containerAnim,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeIn
 };
};

export default useMotionPresets;
