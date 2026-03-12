# ToolNova - Free Online Tools

A modern, responsive collection of free online tools that run completely in the browser with no backend required. Perfect for GitHub Pages hosting.

## 🚀 Features

- ⚡ **Lightning Fast** - All tools run in your browser with zero server latency
- 🔒 **100% Private** - Your data never leaves your device
- 🎨 **Beautiful UI** - Modern, responsive design that works on all devices
- 📱 **Mobile Friendly** - Fully responsive for desktop, tablet, and mobile
- 🆓 **Completely Free** - No ads, no subscriptions, no hidden costs
- 📦 **No Backend** - Deploy anywhere, including GitHub Pages
- ⚙️ **Vanilla JavaScript** - No heavy frameworks, fast and lightweight

## 🛠️ Available Tools

### 1. **Password Generator**
- Generate strong, random passwords
- Customize character types (uppercase, lowercase, numbers, symbols)
- Adjustable password length (4-128 characters)
- Password strength indicator
- Generate multiple passwords at once
- Copy to clipboard with one click

### 2. **Word Counter**
- Count words, characters, sentences, and paragraphs
- Real-time text analysis
- Reading time calculation
- Average word length
- Unique word count
- Top 10 most used words
- Download statistics as text file

### 3. **Text Case Converter**
- Convert to 10 different text cases:
  - lowercase
  - UPPERCASE
  - Title Case
  - AlTeRnAtInG cAsE
  - reverse
  - camelCase
  - PascalCase
  - snake_case
  - kebab-case
  - Title Case (with spaces)
- Real-time conversion
- Copy any format to clipboard

### 4. **QR Code Generator**
- Generate QR codes from text or URLs
- Customize size (100px to 500px)
- Custom colors (dark and light)
- Download as PNG image
- Copy QR code to clipboard
- Data type detection
- Supports up to 4,296 characters

### 5. **Unit Converter**
- Convert between metric and imperial units
- **Length**: meters, kilometers, centimeters, millimeters, inches, feet, yards, miles
- **Weight**: milligrams, grams, kilograms, ounces, pounds, tons
- **Volume**: milliliters, liters, gallons, pints, cups, tablespoons, teaspoons, cubic meters
- **Temperature**: Celsius, Fahrenheit, Kelvin
- Quick reference tables
- Swap units instantly

### 6. **Color Converter** (Bonus)
- Convert between HEX, RGB, and HSL formats
- Color picker for easy selection
- Generate color palettes
- Color variations (lighten, darken, saturate, desaturate)
- Copy colors in multiple formats
- Random color generator

## 📁 Project Structure

```
toolnova/
├── index.html                 # Homepage
├── css/
│   └── style.css             # All styles and responsive design
├── js/
│   └── script.js             # Utility functions and helpers
├── tools/
│   ├── password-generator.html
│   ├── word-counter.html
│   ├── text-case.html
│   ├── qr-generator.html
│   ├── unit-converter.html
│   └── color-converter.html
├── assets/
│   └── icons/               # Optional: place icons here
└── README.md                # This file
```

## 💻 Installation & Usage

### Local Development

1. **Clone or download the project**
   ```bash
   git clone https://github.com/yourusername/toolnova.git
   cd toolnova
   ```

2. **Open in browser**
   - Option A: Double-click `index.html` to open locally
   - Option B: Use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (if you have http-server installed)
     http-server
     ```
   - Then visit `http://localhost:8000`

## 🚀 Deployment to GitHub Pages

### Method 1: Direct Upload

1. Fork the repository or create a new one
2. Upload all files to the repository root or into a `docs` folder
3. Go to GitHub repository **Settings** → **Pages**
4. Set Source to `main` branch (or `docs` folder)
5. Your site will be live at `https://yourusername.github.io/toolnova`

### Method 2: Using Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .
git commit -m "Initial commit: Add ToolNova"

# Add remote repository
git remote add origin https://github.com/yourusername/toolnova.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Method 3: GitHub Desktop

1. Open GitHub Desktop
2. Click "File" → "Add Local Repository"
3. Select the toolnova folder
4. Publish the repository
5. Configure GitHub Pages in settings

## 🎨 Customization

### Change Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #ec4899;
    /* ... more colors ... */
}
```

### Add or Remove Tools

1. **Add a new tool**: Create a new HTML file in `tools/` folder
2. **Use the template**: Copy from existing tool and modify
3. **Add to homepage**: Add a new tool card in `index.html`
4. **Update navigation**: Link the tool in footer and navigation

### Modify Content

- **Homepage**: Edit `index.html`
- **Styles**: Edit `css/style.css`
- **Utilities**: Edit `js/script.js` (add new helper functions)
- **Tool logic**: Edit individual tool files in `tools/`

## 📋 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

All modern browsers with ES6 support.

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **Vanilla JavaScript (ES6+)** - No dependencies
- **QRCode.js** - External CDN library for QR code generation (optional)

## 📦 Dependencies

Only one external dependency:

- **QRCode.js** (for QR code generation) - loaded from CDN
  - Automatically falls back if CDN unavailable
  - All other tools work without external dependencies

## 🔐 Privacy & Security

- ✅ All processing happens in your browser
- ✅ No data sent to servers
- ✅ No cookies or tracking
- ✅ No personal information collected
- ✅ Open source - you can review the code

## 🎯 Performance

- **Size**: ~150KB total (everything included)
- **Load Time**: < 1 second
- **Tools**: All complete instantly
- **Lightweight**: Vanilla JS, no frameworks

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest new tools
- Improve UI/UX
- Optimize code
- Add more features

## 📞 Support

For issues or questions:
1. Check if your browser is supported
2. Clear browser cache and reload
3. Try opening in a different browser
4. Check the console for errors (F12)

## 🎓 Learning Resources

This project is great for learning:
- Vanilla JavaScript
- Responsive CSS design
- HTML5 forms and inputs
- DOM manipulation
- Local storage
- Browser APIs (Clipboard, Canvas, etc.)

## 🚀 Future Ideas

- [ ] Text encryption/decryption tool
- [ ] JSON formatter and validator
- [ ] Base64 encoder/decoder
- [ ] Markdown preview
- [ ] Code formatter
- [ ] Image compressor
- [ ] URL encoder/decoder
- [ ] Hash generator (MD5, SHA-256)
- [ ] Regex tester
- [ ] Timezone converter
- [ ] CSV/JSON converter
- [ ] Password strength tester
- [ ] Palindrome checker
- [ ] Morse code converter
- [ ] Roman numeral converter

## 🎉 You're All Set!

Your ToolNova instance is ready to use. Start by opening `index.html` in your browser or deploy to GitHub Pages.

Happy coding! 🚀

---

**Made with ❤️ for developers and creators**
