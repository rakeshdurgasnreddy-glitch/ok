const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  layout: 'landscape',
  margin: 0
});

const filename = path.join(__dirname, 'greeting-card-output.pdf');
const stream = fs.createWriteStream(filename);

doc.pipe(stream);

// Create a beautiful dark gradient background
let gradient_steps = 256;
for (let i = 0; i < gradient_steps; i++) {
  let ratio = i / gradient_steps;
  let r = Math.floor(15 + (25 - 15) * ratio);
  let g = Math.floor(23 + (35 - 23) * ratio);
  let b = Math.floor(42 + (50 - 42) * ratio);
  doc.fillColor(`rgb(${r}, ${g}, ${b})`);
  doc.rect(0, i * (842 / gradient_steps), 1191, 842 / gradient_steps).fill();
}

// Title
doc.fontSize(48)
   .font('Helvetica-Bold')
   .fillColor('#FFE066')
   .text('✨ A Special Greeting ✨', { align: 'center' })
   .moveDown();

// Decorative line
doc.strokeColor('#FFD700')
   .lineWidth(2)
   .moveTo(100, doc.y)
   .lineTo(1091, doc.y)
   .stroke();

doc.moveDown();

// Main message
doc.fontSize(20)
   .font('Helvetica')
   .fillColor('#FFFFFF')
   .text('This magical greeting card was created with love and colors!', { align: 'center' })
   .moveDown(1);

doc.fontSize(16)
   .text('✨ Features of this card:', { align: 'left' })
   .moveDown(0.5);

const features = [
  '🌙 A beautiful glowing moon in the night sky',
  '⭐ Twinkling stars scattered across the black starry background',
  '👧 A cute, adorable girl character with a smile and rosy cheeks',
  '🧑 A cheerful postman ready to deliver joy',
  '🎨 Colorful floating orbs in pink, purple, and cyan',
  '💜 A magical purple hill landscape',
  '💌 A red envelope at the center waiting to be opened'
];

features.forEach(feature => {
  doc.fontSize(14)
     .text(feature, { align: 'left' })
     .moveDown(0.4);
});

doc.moveDown(1);

// Decorative line
doc.strokeColor('#FF6B9D')
   .lineWidth(2)
   .moveTo(100, doc.y)
   .lineTo(1091, doc.y)
   .stroke();

doc.moveDown();

// Closing message
doc.fontSize(18)
   .font('Helvetica')
   .fillColor('#FFB6E1')
   .text('💝 Special Message 💝', { align: 'center' })
   .moveDown(0.5);

doc.fontSize(14)
   .font('Helvetica')
   .fillColor('#FFFFFF')
   .text('This greeting card combines interactive design with beautiful animations and colors. The cute girl character, the charming postman, and the magical night sky create a unique and memorable experience. Open the interactive greeting card in your browser to see the full magic!', { align: 'center' })
   .moveDown(1.5);

doc.fontSize(12)
   .fillColor('#A0D7FF')
   .text('🌟 Enjoy this moment of joy and celebration! 🌟', { align: 'center' })
   .moveDown();

doc.fontSize(10)
   .fillColor('#888888')
   .text(`Created on: ${new Date().toLocaleDateString()} | Interactive Greeting Card`, { align: 'center' });

doc.end();

stream.on('finish', () => {
  console.log(`✨ PDF created successfully at: ${filename}`);
  console.log('📧 You can now share this beautiful greeting card!');
});
