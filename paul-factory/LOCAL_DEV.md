# Local Development Guide

## Quick Start

### 1. Install Dependencies
```bash
cd /Users/ferm/Documents/GitHub/Website/paul-factory
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The development server will start on `http://localhost:3000`

### 3. Make Edits
- Edit files in `src/` directory
- Changes will hot-reload automatically
- Check the browser for updates

## Available Commands

- **`npm run dev`** - Start development server (http://localhost:3000)
- **`npm run build`** - Build for production
- **`npm run start`** - Start production server (after build)
- **`npm run lint`** - Run ESLint

## Project Structure

```
paul-factory/
├── src/
│   ├── app/              # Next.js app directory (pages)
│   │   ├── page.tsx      # Homepage
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   └── clients/      # Clients page
│   ├── components/       # React components
│   ├── content/          # Content/data files
│   └── lib/              # Utility functions
├── public/               # Static assets
└── package.json          # Dependencies
```

## Making Quick Edits

### Edit Content
- **Site content**: `src/content/site.ts`
- **About page**: `src/content/about.ts`
- **Projects**: `src/content/projects.ts`
- **Services**: `src/content/services.ts`

### Edit Pages
- **Homepage**: `src/app/page.tsx`
- **About page**: `src/app/about/page.tsx`
- **Contact page**: `src/app/contact/page.tsx`

### Edit Components
- **Header**: `src/components/header.tsx`
- **Footer**: `src/components/footer.tsx`
- **Hero Section**: `src/components/hero-section.tsx`

### Edit Styles
- **Global styles**: `src/app/globals.css`
- **Tailwind config**: `tailwind.config.ts`

## Hot Reload

Next.js supports Fast Refresh, so changes to:
- React components
- Pages
- Styles

Will automatically update in the browser without losing state.

## Troubleshooting

### Port Already in Use
If port 3000 is in use:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Quick Tips

1. **Keep dev server running** - Keep `npm run dev` running in a terminal while editing
2. **Check browser console** - For any errors or warnings
3. **Use TypeScript** - The project uses TypeScript for type safety
4. **Check Tailwind classes** - Use Tailwind utility classes for styling

## Next Steps After Edits

1. **Test locally** - Verify changes work in dev mode
2. **Build test** - Run `npm run build` to ensure production build works
3. **Commit changes** - `git add .` and `git commit -m "your message"`
4. **Push to GitHub** - `git push` (if connected to Vercel, will auto-deploy)

