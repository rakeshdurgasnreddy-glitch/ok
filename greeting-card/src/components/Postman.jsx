import { motion } from 'framer-motion';
import { Bike } from 'lucide-react';

export default function Postman() {
  const postmanVariants = {
    initial: { x: '-50vw', opacity: 0 },
    animate: { 
      x: '10vw', 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
        delay: 0.3,
        duration: 1.2
      }
    }
  };

  return (
    <motion.div 
      className="absolute left-0 bottom-[25vh] z-10"
      variants={postmanVariants}
      initial="initial"
      animate="animate"
      data-testid="postman-character"
    >
      {/* Postman Head */}
      <div className="relative w-12 h-12 mx-auto mb-1">
        <div className="w-12 h-12 rounded-full bg-orange-100 border-2 border-slate-900 absolute z-20" />
      </div>

      {/* Postman Body */}
      <div className="relative w-20 h-12 mx-auto mb-2">
        <div className="w-20 h-12 bg-blue-300 rounded-full border-2 border-slate-900 absolute z-10" />
      </div>

      {/* Bike */}
      <motion.div 
        className="flex items-center justify-center"
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Bike size={48} strokeWidth={2} className="text-slate-800" />
      </motion.div>
    </motion.div>
  );
}
