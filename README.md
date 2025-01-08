# Lite Studio

A web development and design studio that helps bring ideas to life.

## Overview

This is the codebase for Lite Studio's website, built with Svelte, TypeScript, and TailwindCSS.

## Tech Stack

- **Framework**: Svelte + TypeScript
- **Styling**: TailwindCSS
- **Routing**: svelte-routing
- **Animations**: svelte-motion
- **Icons**: lucide-svelte

## Project Structure

```
src/
├── components/        # UI components
│   ├── work/         # Work page specific components
│   └── ...
├── lib/              # Shared utilities and types
│   ├── types.ts      # TypeScript interfaces
│   ├── utils.ts      # Utility functions
│   ├── colors.ts     # Color definitions
│   └── projects.ts   # Project data
└── app.css          # Global styles
```

## Key Features

- Responsive design with mobile-first approach
- Smooth animations and transitions
- Interactive project showcase
- Dynamic navigation
- Scroll-based animations and reveals

## Components

- **Hero**: Landing page hero section with animated tiles
- **MarqueeSection**: Auto-scrolling project and review showcase
- **TextSection**: Animated text reveals on scroll
- **Work**: Project portfolio with dynamic navigation
- **CardProduct**: Product showcase with hover effects

## Image Storage

Project images should be stored in a CDN or similar service for production. Currently, images are stored in:

```
public/
├── logo.png
└── work/            # Project screenshots
    ├── work1.jpg
    ├── work2.jpg
    └── work3.jpg
```

For production, update the image URLs in `src/lib/projects.ts` to point to your CDN.