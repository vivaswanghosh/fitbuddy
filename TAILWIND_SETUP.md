# Tailwind CSS Setup & Build Guide

## Overview
FitBuddy uses **Tailwind CSS** for responsive, utility-first styling. The project can be built in two ways:

### Option 1: **CDN (Current - No Build Required)**
The HTML templates currently use Tailwind via CDN:
```html
<script src="https://cdn.tailwindcss.com"></script>
```
✅ Works immediately - no build step  
✅ Simple for quick development  
❌ Not optimized for production  
❌ All utilities loaded regardless of usage  

### Option 2: **Build Process (Production Recommended)**
Use the provided build configuration for optimized CSS.

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Build CSS
```bash
# One-time build
npm run build:css

# Watch mode (auto-rebuild on file changes)
npm run watch:css

# Development mode
npm run dev
```

### 3. Output
Compiled CSS will be generated at:
```
app/static/dist/styles.css
```

### 4. Update HTML Templates
Replace the CDN script with a local link:
```html
<!-- Remove this: -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Add this: -->
<link rel="stylesheet" href="{{ url_for('static', filename='dist/styles.css') }}">
```

## Configuration Files

### `tailwind.config.js`
- **Content paths**: Scans templates for Tailwind classes
- **Theme extensions**: Custom colors (gym-orange, gym-red, etc.)
- **Plugins**: Includes `@tailwindcss/forms` for better form styling

### `postcss.config.js`
- Processes Tailwind directives
- Adds vendor prefixes automatically (autoprefixer)

### `app/static/styles.css`
- Entry point for Tailwind
- Includes `@tailwind` directives
- Custom components (@layer components)
- Custom utilities (@layer utilities)

### `package.json`
- Build scripts and dependencies
- Dev dependencies: tailwindcss, postcss, autoprefixer

## Project Structure
```
fitbuddy/
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # npm scripts and dependencies
└── app/
    ├── templates/              # HTML files (scanned by Tailwind)
    │   ├── index.html
    │   ├── result.html
    │   └── all_users.html
    └── static/
        ├── styles.css          # Input CSS file
        └── dist/
            └── styles.css      # Compiled output
```

## Custom Theme Extensions

The `tailwind.config.js` includes custom extensions:

```javascript
colors: {
  'gym-dark': '#0f3460',
  'gym-darker': '#16213e',
  'gym-darkest': '#1a1a2e',
  'gym-orange': '#ff6b35',
  'gym-red': '#e63946',
}

backgroundImage: {
  'gym-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
}

boxShadow: {
  'gym': '0 10px 30px rgba(255, 107, 53, 0.2)',
  'gym-lg': '0 20px 50px rgba(255, 107, 53, 0.3)',
}
```

## Custom Components

Custom Tailwind components are defined in `styles.css`:

```css
@layer components {
  .btn-primary { /* Orange gradient button */ }
  .form-input { /* Styled input fields */ }
  .card-gym { /* Gym-themed cards */ }
  .plan-card { /* Workout plan cards */ }
  /* ... more components ... */
}
```

Usage in HTML:
```html
<button class="btn-primary">Generate Plan</button>
<input class="form-input" type="text">
<div class="card-gym">Content</div>
```

## Quick Reference - Common Classes

### Buttons
```html
<button class="btn-primary">Primary Action</button>
<button class="btn-secondary">Secondary Action</button>
<button class="btn-delete">Delete</button>
```

### Forms
```html
<label class="form-label">Label Text</label>
<input class="form-input" type="text">
```

### Cards
```html
<div class="card-gym">Gym-themed card</div>
<div class="user-card">User information</div>
<div class="plan-card">Workout plan</div>
```

### Status
```html
<span class="status-badge status-active">Active</span>
```

## Performance Tips

1. **Content Scanning**: Tailwind scans template files for class usage
   - Ensure paths in `tailwind.config.js` content array are correct
   - Only classes found in templates are included in final CSS

2. **PurgeCSS** (Automatic)
   - Build process removes unused styles
   - Production CSS is ~10-20KB after minification

3. **JIT Mode**
   - Tailwind v3 includes Just-In-Time compilation by default
   - Dynamic classes compile on-demand

## Troubleshooting

### Styles not appearing after build?
1. Check if file paths in `content` array are correct
2. Verify class names match Tailwind conventions
3. Run `npm run build:css` again
4. Clear browser cache

### Node modules issues?
```bash
# Clear cache and reinstall
npm cache clean --force
rm -r node_modules
npm install
```

### Watch mode not updating?
- Restart the watch with `npm run watch:css`
- Ensure you're editing template files in the paths listed in config

## Deployment

For production:
1. Run `npm run build:css` to generate optimized CSS
2. Include `app/static/dist/styles.css` in HTML templates
3. The compiled CSS file can be uploaded to your server
4. No npm/Node.js required at runtime

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Config Reference](https://tailwindcss.com/docs/configuration)
- [Tailwind Components](https://tailwindcss.com/docs/reusing-styles#extracting-components-with-apply)
