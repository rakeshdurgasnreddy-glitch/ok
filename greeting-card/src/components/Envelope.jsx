import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Envelope({ onClick, disabled }) {
  const envelopeVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 2.2,
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    },
    handoff: {
      x: [0, 50],
      y: [0, -40, -20],
      transition: {
        duration: 1.5,
        delay: 2.8,
        ease: 'easeInOut'
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const tooltipVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: -50,
      transition: {
        delay: 3.5,
        duration: 0.5
      }
    }
  };

  return (
    <>
      <motion.div
        className={`absolute bottom-[30vh] left-1/3 z-30 cursor-${disabled ? 'not-allowed' : 'pointer'} opacity-${disabled ? '50' : '100'}`}
        variants={envelopeVariants}
        initial="initial"
        animate={["animate", "handoff", "float"]}
        onClick={onClick}
        disabled={disabled}
        data-testid="envelope-click-target"
      >
        {/* Envelope */}
        <motion.div className="envelope relative">
          {/* Heart seal */}
          <motion.div 
            className="envelope-heart"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart size={16} fill="rgb(239, 68, 68)" color="rgb(239, 68, 68)" />
          </motion.div>
        </motion.div>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap mb-3 px-3 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg fredoka"
          variants={tooltipVariants}
          initial="initial"
          animate={!disabled ? "animate" : "initial"}
        >
          Click to open! 💌
        </motion.div>
      </motion.div>
    </>
  );
}
