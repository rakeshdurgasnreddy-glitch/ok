# 💌 Interactive Greeting Card - Postman & Letter

A charming, interactive digital greeting card experience! Features an animated postman delivering a letter to a girl, with a beautiful PDF reveal modal. Built with React, Framer Motion, and Tailwind CSS.

## 🎨 Design Features

- **Pastel & Soft Aesthetic**: Warm amber sky (bg-amber-50) with lush emerald green hills
- **Ligne Claire Style**: Crisp 2px-4px dark borders on all interactive elements for a comic-book feel
- **Neo-Brutalist Touch**: Hard offset shadows (4px_4px_0px_0px) instead of soft blurs
- **Watercolor Texture**: Subtle background texture overlay for a storybook feel
- **Responsive Typography**: 
  - Primary: Fredoka (playful text, tooltips, modal headings)
  - Secondary: Nunito (body, buttons, UI elements)

## ✨ Animation Sequence

1. **Arrival**: Postman animates in from left with spring transition and bike wobble
2. **Receiver Appears**: Girl character animates in from right to center
3. **The Hand-off**: Envelope animates along an arc from postman to girl
4. **Interaction State**: Envelope scales up with floating animation, tooltip appears
5. **The Reveal**: User clicks envelope, PDF modal pops up with fade-in animation

## 🚀 Quick Start

### Installation

```bash
cd greeting-card
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Usage

1. **Upload PDF**: Click the "📄 Upload PDF" button in the top-left
2. **Select your PDF file**: Choose any PDF from your computer
3. **Watch the animation**: The postman and girl characters will perform their animation sequence
4. **Click the envelope**: The envelope has a tooltip saying "Click to open! 💌"
5. **View the PDF**: The PDF modal opens with your uploaded document
6. **Download or Close**: Use the buttons to download the PDF or close the modal

## 📁 Project Structure

```
greeting-card/
├── src/
│   ├── components/
│   │   ├── Postman.jsx      # Animated postman character
│   │   ├── Girl.jsx         # Animated girl character  
│   │   ├── Envelope.jsx     # Interactive envelope with animations
│   │   └── PDFModal.jsx     # PDF viewer modal component
│   ├── App.jsx              # Main app component
│   ├── App.css              # Custom styles for envelope, modal, buttons
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
├── index.html               # HTML with Tailwind CDN
├── package.json
└── README.md
```

## 🎨 Color Palette

| Element | Color | Class |
|---------|-------|-------|
| Sky Background | Amber-50 | `bg-amber-50` |
| Ground/Hill | Emerald-100 | `bg-emerald-100` |
| Envelope | Rose-400 | `bg-rose-400` |
| Envelope Flap | Rose-300 | `bg-rose-300` |
| Postman Shirt | Blue-300 | `bg-blue-300` |
| Postman Head | Orange-100 | `bg-orange-100` |
| Girl Dress | Pink-300 | `bg-pink-300` |
| Girl Head | Orange-100 | `bg-orange-100` |
| Borders | Slate-900 | `border-slate-900` |
| Modal Overlay | Slate-900 40% | `bg-slate-900/40` |
| Modal Surface | Off-white | `#FFFAF0` |

## 🔧 Technologies Used

- **React**: UI framework
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS (via CDN)
- **Lucide React**: Icon library (Bike, Heart, Download, Close icons)
- **Vite**: Build tool for fast development

## 🎭 Component Details

### Postman Component
- Animated entrance from left (-50vw to 20vw)
- Spring transition with bounce effect
- Head, body, and bike icon
- Bike rotates continuously

### Girl Component
- Animated entrance from right (100vw to 40vw)
- Head and flared dress design
- Arms animation (rotating up and down)

### Envelope Component
- CSS-drawn envelope with triangle flap
- Heart seal icon that pulses
- Floats and scales up at interaction state
- Animated hand-off sequence
- "Click to open! 💌" tooltip

### PDFModal Component
- Smooth fade-in animation
- Responsive PDF viewer iframe
- Download button with icon
- Close button (X)
- Hard shadows and thick borders for neo-brutalist style

## 🎯 Key Features

✅ PDF upload functionality
✅ Beautiful scene composition with multiple characters
✅ Smooth, intentional animations with Framer Motion
✅ Interactive envelope with visual feedback
✅ PDF viewer modal with download option
✅ Responsive design
✅ Accessibility considerations (data-testid attributes)
✅ Watercolor texture overlay for physical storybook feel

## 📱 Browser Support

Works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS transforms and animations
- Blob API for PDF handling

## 🚀 Production Deployment

For production, you should:

1. **Replace Tailwind CDN**: Install Tailwind CSS v4 with PostCSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. **Update PostCSS Config**:
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

3. **Update index.css**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Build for production**:
```bash
npm run build
```

## 💡 Customization

### Change Colors
Edit the color values in:
- `src/App.jsx` - Background colors
- `src/components/*.jsx` - Character colors
- `src/App.css` - Button and modal colors

### Change Animations
Modify animation duration and easing in Framer Motion `variants` in each component

### Change Fonts
Update the Google Fonts import in `index.html`:
```html
<link href='https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600&display=swap' rel='stylesheet'>
```

### Change Scene Composition
Modify the hill shape, character positions, and envelope animation in their respective component files

## 📄 Sample PDF

A sample PDF (`sample-letter.pdf`) is included for testing. You can replace it with your own PDF file.

## 🐛 Troubleshooting

### PDF not displaying in modal
- Ensure the PDF file is less than 100MB
- Check browser console for CORS errors
- Try a different PDF file

### Animations not smooth
- Check that Framer Motion is installed: `npm list framer-motion`
- Verify browser hardware acceleration is enabled
- Close other heavy applications

### Styles not applying
- Clear browser cache and restart dev server
- Verify Tailwind CDN is loading (check Network tab)
- Check that CSS files are being imported in main.jsx

## 📞 Support

For issues or improvements, refer to the source code comments in each component file.

---

**Made with ❤️ for creating delightful greeting card experiences!**

