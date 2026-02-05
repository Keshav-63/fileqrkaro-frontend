# Industrial Skeuomorphism - Quick Design Reference

## 🎨 Core Design Tokens

### Colors
```css
/* Backgrounds */
--background: #e0e5ec;      /* Main chassis color */
--surface: #f5f6f8;         /* Elevated surfaces */

/* Text */
--text-primary: #2d3436;    /* Headings, primary text */
--text-secondary: #636e72;  /* Body text, captions */

/* Accent */
--accent: #ff4757;          /* Primary actions, focus states */

/* Status LEDs */
--led-success: #4cd964;     /* Green - active/success */
--led-warning: #ffcc00;     /* Amber - warning/alert */
--led-error: #ff4757;       /* Red - error/danger */
```

### Shadows (45° Top-Left Lighting)
```css
/* Card Elevation */
--shadow-card: 8px 8px 16px rgba(163, 177, 198, 0.6), 
               -8px -8px 16px rgba(255, 255, 255, 0.5);

/* Floating/Hover Elevation */
--shadow-floating: 12px 12px 24px rgba(163, 177, 198, 0.6), 
                   -12px -12px 24px rgba(255, 255, 255, 0.5);

/* Pressed/Active State */
--shadow-pressed: inset 4px 4px 8px rgba(163, 177, 198, 0.5), 
                  inset -4px -4px 8px rgba(255, 255, 255, 0.5);

/* Recessed Wells (Inputs) */
--shadow-recessed: inset 6px 6px 12px rgba(163, 177, 198, 0.5), 
                   inset -2px -2px 8px rgba(255, 255, 255, 0.5);
```

## 🔘 Button Patterns

### Primary Button (Accent)
```css
.button-primary {
  padding: 1rem 2rem;
  min-height: 48px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-floating);
  transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 24px -6px rgba(0,0,0,0.2), 
              0 8px 12px -6px rgba(0,0,0,0.15);
}

.button-primary:active {
  transform: translateY(2px);
  box-shadow: var(--shadow-pressed);
}
```

### Secondary Button (Neumorphic)
```css
.button-secondary {
  padding: 1rem 2rem;
  min-height: 48px;
  background: var(--background);
  color: var(--text-primary);
  border: none;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-card);
  transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button-secondary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-floating);
}

.button-secondary:active {
  transform: translateY(2px);
  box-shadow: var(--shadow-pressed);
}
```

## 📦 Card Pattern with Corner Screws
```css
.industrial-card {
  position: relative;
  padding: 2.5rem;
  background: var(--background);
  border: none;
  border-radius: 24px;
  box-shadow: var(--shadow-card);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Corner screws */
.industrial-card::before,
.industrial-card::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, var(--text-secondary) 0%, var(--text-secondary) 40%, transparent 40%);
  border-radius: 50%;
  opacity: 0.3;
}

.industrial-card::before {
  top: 16px;
  left: 16px;
}

.industrial-card::after {
  top: 16px;
  right: 16px;
}

.industrial-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-floating);
}
```

## 📝 Input Field Pattern (Recessed Well)
```css
.industrial-input {
  width: 100%;
  padding: 1rem;
  background: var(--background);
  border: none;
  border-radius: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9375rem;
  color: var(--text-primary);
  box-shadow: var(--shadow-recessed);
  transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.industrial-input:focus {
  outline: none;
  box-shadow: var(--shadow-recessed), 
              inset 0 0 0 2px var(--accent);
}

.industrial-input::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
}
```

## 💡 LED Indicator Pattern
```css
.led-indicator {
  width: 8px;
  height: 8px;
  background: var(--led-success); /* or --led-warning, --led-error */
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(76, 217, 100, 0.6),
              inset 0 1px 2px rgba(255, 255, 255, 0.3);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

## 🎯 Icon Housing Pattern (Recessed Circle)
```css
.icon-housing {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
  border-radius: 50%;
  color: var(--accent);
  box-shadow: var(--shadow-recessed);
  position: relative;
}

/* Optional LED in bottom-right */
.icon-housing::after {
  content: '';
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 8px;
  height: 8px;
  background: var(--led-success);
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(76, 217, 100, 0.6),
              inset 0 1px 2px rgba(255, 255, 255, 0.3);
}
```

## 📏 Typography Scale

### Display (Hero Titles)
```css
font-size: 4rem;
font-weight: 800;
line-height: 1.1;
color: var(--text-primary);
text-transform: uppercase;
letter-spacing: -0.02em;
```

### Heading (Section Titles)
```css
font-size: 3rem;
font-weight: 800;
color: var(--text-primary);
text-transform: uppercase;
letter-spacing: 0.02em;
```

### Subheading (Card Titles)
```css
font-size: 1.5rem;
font-weight: 700;
color: var(--text-primary);
text-transform: uppercase;
letter-spacing: 0.05em;
```

### Body Text
```css
font-size: 1rem;
font-weight: 400;
line-height: 1.7;
color: var(--text-secondary);
```

### Labels (Technical)
```css
font-family: 'JetBrains Mono', monospace;
font-size: 0.8125rem;
font-weight: 600;
color: var(--text-secondary);
text-transform: uppercase;
letter-spacing: 0.05em;
```

## 🎬 Animation Timing

```css
/* Fast Interactions (Buttons, Clicks) */
transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);

/* Medium Transitions (Cards, Modals) */
transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

/* Slow Transitions (Page Navigation) */
transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

## 🔧 Manufacturing Details

### Vent Slots Pattern
```css
.vent-slots {
  width: 40px;
  height: 8px;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 4px,
    var(--background) 4px,
    var(--background) 8px
  );
  box-shadow: var(--shadow-recessed);
  border-radius: 4px;
}
```

### Noise Texture Overlay
```css
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}
```

## 📱 Mobile Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) {
  /* Reduce hero font sizes */
  .hero-title { font-size: 3rem; }
  .section-title { font-size: 2.5rem; }
}

/* Mobile */
@media (max-width: 768px) {
  /* Further reduce sizes */
  .hero-title { font-size: 2.5rem; }
  .section-title { font-size: 2rem; }
  
  /* Stack grids */
  .grid-layout { grid-template-columns: 1fr; }
  
  /* Full-width buttons */
  .button { width: 100%; }
}
```

## ✅ Accessibility Checklist

- ✅ **Contrast**: All text meets WCAG AA (4.5:1 minimum)
- ✅ **Touch Targets**: Minimum 48px height on all interactive elements
- ✅ **Focus States**: Visible accent-colored focus indicators
- ✅ **Keyboard Navigation**: Full keyboard support with visible focus
- ✅ **Aria Labels**: Proper labeling on icon-only buttons
- ✅ **Semantic HTML**: Proper heading hierarchy and landmarks

---

**Quick Reference Card Complete** | Industrial Skeuomorphism Design System v1.0
