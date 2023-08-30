export const headingTextAnimation = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7,
    },
  },
};

export const infoCardAnimation = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delayChildren: 1,
      staggerChildren: 0.9,
    },
  },
};
