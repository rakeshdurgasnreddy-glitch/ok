import { motion } from 'framer-motion';

export default function Girl() {
  const girlVariants = {
    initial: { x: '100vw', opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
        delay: 0.8,
        duration: 1.2
      }
    }
  };

  return (
    <motion.div 
      className="absolute right-[5%] bottom-[25vh] z-10"
      variants={girlVariants}
      initial="initial"
      animate="animate"
      data-testid="girl-character"
    >
      {/* Girl Head */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-b from-yellow-100 to-orange-100 border-3 border-slate-900 mx-auto mb-1">
        {/* Left Eye */}
        <div className="absolute top-5 left-3 w-2 h-3 bg-slate-900 rounded-full" />
        {/* Right Eye */}
        <div className="absolute top-5 right-3 w-2 h-3 bg-slate-900 rounded-full" />
        {/* Nose */}
        <div className="absolute top-7 left-1/2 -translate-x-1/2 w-1 h-2 bg-orange-300" />
        {/* Smile */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-1 border-b-2 border-slate-900 rounded-full" />
        {/* Cute blush */}
        <div className="absolute top-7 left-1 w-2 h-1.5 bg-pink-300 rounded-full opacity-70" />
        <div className="absolute top-7 right-1 w-2 h-1.5 bg-pink-300 rounded-full opacity-70" />
      </div>

      {/* Girl Hair */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-gradient-to-b from-amber-700 to-yellow-600 rounded-t-full border-2 border-slate-900" />

      {/* Girl Dress */}
      <div className="relative w-20 h-24 mx-auto">
        <div 
          className="w-20 h-24 bg-gradient-to-b from-pink-400 to-pink-300 border-3 border-slate-900 rounded-b-2xl shadow-lg"
          style={{
            clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)'
          }}
        >
          {/* Dress pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)'
          }} />
        </div>
      </div>

      {/* Girl Arms Animation */}
      <motion.div 
        className="absolute top-10 w-28 h-2 left-1/2 -translate-x-1/2 flex justify-between"
        animate={{ rotate: [-10, 15, -10] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-2 h-2 bg-orange-100 rounded-full border border-slate-900" />
        <div className="w-2 h-2 bg-orange-100 rounded-full border border-slate-900" />
      </motion.div>

      {/* Girl Heart Sparkle */}
      <motion.div
        className="absolute -top-2 -right-2 text-2xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ✨
      </motion.div>
    </motion.div>
  );
}
