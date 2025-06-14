import { motion } from 'framer-motion';

const AnimatedHeart = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-12 w-12 text-pink-500 mx-4"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 1.2, repeat: Infinity }}
  >
    <path d="M12 21s-6.5-5.2-9-8.3C-1.2 8.1 2.4 3.5 7 5.1c1.7.6 3 2.1 3 2.1s1.3-1.5 3-2.1c4.6-1.6 8.2 3 4 7.6-2.5 3.1-9 8.3-9 8.3z" />
  </motion.svg>
);

export default AnimatedHeart; 