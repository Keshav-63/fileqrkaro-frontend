# 🚀 Quick Start Guide - FileQRkaro React

## ⚡ Get Started in 30 Seconds

```bash
cd frontend-react
npm install
npm run dev
```

Visit: **http://localhost:5173**

---

## 📁 File Locations

### Need to Edit Something?

| What | Where |
|------|-------|
| Home page content | `src/pages/Home.jsx` |
| About page content | `src/pages/About.jsx` |
| Contact page content | `src/pages/Contact.jsx` |
| Navigation links | `src/components/Navbar.jsx` |
| File upload logic | `src/components/FileUpload.jsx` |
| Colors & theme | `src/App.css` (`:root` section) |
| Backend URL | `vite.config.js` (proxy section) |

---

## 🎨 Quick Customizations

### Change Primary Color:

Edit `src/App.css`:
```css
:root {
  --color-primary: #your-color-here;
}
```

### Add a New Page:

1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/new" element={<NewPage />} />
   ```
3. Add link in `src/components/Navbar.jsx`:
   ```jsx
   { path: '/new', label: 'New Page' }
   ```

### Change Animation Speed:

Find Framer Motion props and adjust `duration`:
```jsx
<motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }} // Change this
/>
```

---

## 🔧 Common Tasks

### Build for Production:
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build:
```bash
npm run preview
```

### Check for Errors:
```bash
npm run lint  # (if configured)
```

### Clean Install:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🐛 Troubleshooting

### Dev server won't start:
```bash
# Kill any process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Then restart
npm run dev
```

### API calls not working:
1. Check `vite.config.js` proxy configuration
2. Ensure backend is running
3. Check browser console for errors

### Styles not updating:
1. Hard refresh: `Ctrl + Shift + R`
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Restart dev server

### Build fails:
1. Check for console errors
2. Ensure all imports are correct
3. Run `npm install` again

---

## 📊 Project Structure (Simplified)

```
frontend-react/
├── src/
│   ├── components/     ← Reusable UI pieces
│   ├── pages/          ← Full pages (Home, About, Contact)
│   ├── context/        ← Global state (theme, etc.)
│   ├── App.jsx         ← Main app & routing
│   └── App.css         ← Global styles & theme
├── public/             ← Static files (images, etc.)
├── index.html          ← HTML template
└── vite.config.js      ← Build & proxy config
```

---

## 🎯 Key Concepts

### Component = UI Piece
```jsx
const MyComponent = () => {
  return <div>Hello!</div>;
};
```

### State = Data that Changes
```jsx
const [count, setCount] = useState(0);
```

### Effect = Side Effect (API calls, etc.)
```jsx
useEffect(() => {
  // Run when component mounts
}, []);
```

### Context = Global State
```jsx
const { isDark, toggleTheme } = useTheme();
```

---

## 🔗 Important Links

- **Dev Server**: http://localhost:5173
- **Backend API**: Check `vite.config.js` proxy
- **Documentation**: See `README.md` files
- **Deployment Guide**: `../DEPLOYMENT.md`

---

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-refresh (no need to refresh browser)
2. **React DevTools**: Install Chrome extension for debugging
3. **Vite Inspector**: Hover over elements to see source files
4. **Console**: Always check browser console for errors
5. **Network Tab**: Check API calls in browser DevTools

---

## 🆘 Need Help?

1. Check browser console for errors
2. Review `MIGRATION_GUIDE.md` for examples
3. Read component comments in source files
4. Email: keshavdev241@gmail.com

---

## ✅ Health Check

Everything working? Test these:

- [ ] Dev server starts without errors
- [ ] Home page loads with animations
- [ ] File upload works
- [ ] QR code generates
- [ ] Navigation works
- [ ] Dark mode toggles
- [ ] Contact form submits
- [ ] Mobile menu works
- [ ] No console errors

All good? You're ready to code! 🎉

---

**Made with ❤️ by Keshav & Shreeyansh**
