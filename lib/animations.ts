import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};
