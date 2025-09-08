# Netlify Deployment Guide

This portfolio website has been configured for easy deployment on Netlify.

## Quick Deploy

1. **Connect your repository to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub/GitLab/Bitbucket repository

2. **Build settings (auto-configured):**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

## Manual Deploy

1. **Build locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy the `dist` folder:**
   - Drag and drop the `dist` folder to Netlify's deploy area
   - Or use Netlify CLI: `netlify deploy --prod --dir=dist`

## Features Configured

✅ Single Page Application (SPA) routing  
✅ Asset optimization  
✅ PDF download functionality  
✅ Responsive design  
✅ SEO-friendly meta tags  
✅ Fast loading with optimized images  

## Development

- **Local development:** `npm run dev:client`
- **Preview build:** `npm run preview`
- **Build for production:** `npm run build`

## Notes

- The site is now fully static and doesn't require a server
- All API dependencies have been removed
- Assets are properly optimized for web delivery
- The portfolio works offline after initial load

## Troubleshooting

If you encounter issues:
1. Clear build cache: Delete `node_modules` and `dist`, then `npm install`
2. Check Node version (recommended: 18+)
3. Verify all dependencies are installed
