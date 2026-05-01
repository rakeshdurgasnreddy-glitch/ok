
import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import PDFModal from './components/PDFModal';
import Postman from './components/Postman';
import Girl from './components/Girl';
import Envelope from './components/Envelope';


export default function App() {
  const [showModal, setShowModal] = useState(false);
  // Always use the included PDF from public folder
  const pdfUrl = process.env.NODE_ENV === 'development' ? '/it me.pdf' : './it me.pdf';

  const handleEnvelopeClick = () => {
    setShowModal(true);
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-slate-950 relative">
      {/* Starry background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{ opacity: [Math.random() * 0.5, Math.random() * 1] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Moon */}
      <motion.div
        className="absolute top-12 right-20 z-5"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-24 h-24 rounded-full bg-yellow-200 border-4 border-yellow-100 shadow-2xl shadow-yellow-300 relative">
          <div className="absolute inset-2 rounded-full bg-slate-950" style={{
            clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 70%)'
          }} />
        </div>
      </motion.div>

      {/* Colorful floating orbs */}
      <motion.div
        className="absolute top-32 left-12 w-8 h-8 rounded-full bg-pink-400 opacity-60 blur-md"
        animate={{ y: [0, -20, 0], x: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-32 w-6 h-6 rounded-full bg-purple-400 opacity-60 blur-md"
        animate={{ y: [0, 15, 0], x: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-7 h-7 rounded-full bg-cyan-400 opacity-60 blur-md"
        animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      {/* Main scene container */}
      <motion.div 
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hill background */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] h-[40vh] bg-gradient-to-b from-purple-900 to-slate-800 rounded-[100%] border-t-[3px] border-purple-500"
        />



        {/* Postman character */}
        <Postman />

        {/* Girl character */}
        <Girl />

        {/* Envelope */}
        <Envelope 
          onClick={handleEnvelopeClick}
          disabled={false}
        />
      </motion.div>

      {/* PDF Modal */}
      {showModal && (
        <PDFModal 
          file={pdfUrl}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
