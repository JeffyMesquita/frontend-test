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

export const navbarAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7,
    },
  },
};

export const footerCardAnimation = {
  hidden: {
    opacity: 0.5,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7,
    },
  },
};

export const iconAnimation = {
  hidden: {
    opacity: 0.1,
    x: 25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      duration: 0.5,
      delayChildren: 1,
      staggerChildren: 0.7,
    },
  },
};
