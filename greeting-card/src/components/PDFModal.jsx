import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { useState } from 'react';

export default function PDFModal({ file, onClose }) {

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    initial: { scale: 0.8, opacity: 0, y: 20 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const handleDownload = () => {
    if (file) {
      const a = document.createElement('a');
      a.href = file;
      a.download = 'greeting-card.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="pdf-modal-overlay"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={onClose}
        data-testid="pdf-modal-overlay"
      >
        <motion.div
          className="pdf-modal-content"
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          data-testid="pdf-modal-content"
        >
          {/* Close button */}
          <motion.button
            className="close-btn"
            onClick={onClose}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            data-testid="modal-close-button"
          >
            <X size={24} color="rgb(15, 23, 42)" strokeWidth={3} />
          </motion.button>

          {/* Modal Title */}
          <h2 className="text-3xl font-bold text-slate-900 mb-6 fredoka">
            💌 You have a letter! 
          </h2>

          {/* PDF Viewer */}
          <div className="pdf-viewer">
            {file && (
              <iframe
                src={file}
                title="PDF Viewer"
                data-testid="pdf-iframe"
                width="600"
                height="800"
              />
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <motion.button
              className="btn-modal"
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="pdf-download-button"
            >
              <Download size={18} className="inline mr-2" />
              Download PDF
            </motion.button>
            <motion.button
              className="btn-modal"
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="pdf-view-close-button"
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
