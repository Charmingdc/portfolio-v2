import { useReducedMotion } from "motion/react";

const useMotionPresets = () => {
  const reduceMotion = useReducedMotion();

  const duration = reduceMotion ? 0.2 : 0.6;
  const ease = "easeInOut";

  return {
    containerAnim: {
      hide: {},
      show: {
        transition: {
          staggerChildren: 0.12
        }
      }
    },

    fadeInUp: {
      hide: {
        opacity: 0,
        y: reduceMotion ? 0 : "1rem"
      },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration, ease }
      }
    },

    fadeInLeft: {
      hide: {
        opacity: 0,
        x: reduceMotion ? 0 : "-1rem"
      },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration, ease }
      }
    },

    fadeInRight: {
      hide: {
        opacity: 0,
        x: reduceMotion ? 0 : "1rem"
      },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration, ease }
      }
    },

    fadeIn: {
      hide: { opacity: 0, scale: reduceMotion ? 1 : 0.5 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { duration }
      }
    }
  };
};

export default useMotionPresets;
