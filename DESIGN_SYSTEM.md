# Design System

## Colors

### Primary Colors
- Primary: `#5A47FB` (Purple)
- Secondary: `#676778` (Gray)

### Gradient Colors
```css
--color-1: 0 100% 63%    /* Red */
--color-2: 270 100% 63%  /* Purple */
--color-3: 210 100% 63%  /* Blue */
--color-4: 195 100% 63%  /* Cyan */
--color-5: 90 100% 63%   /* Green */
```

### UI Colors
- Background: `#FFFFFF` (White)
- Text Primary: `#070513` (Dark)
- Text Secondary: `#46434F` (Gray)
- Border: `#070513/[0.06]` (Semi-transparent)

## Typography

### Font Families
- Primary: 'DM Sans'
- Secondary: 'Outfit'
- Alternative: 'Figtree', 'Inter'

### Font Weights
- Regular: 400
- Semibold: 600
- Bold: 700

### Text Sizes
- XS: 0.75rem
- SM: 0.875rem
- Base: 1rem
- LG: 1.125rem
- XL: 1.25rem
- 2XL: 1.5rem
- 3XL: 1.875rem
- 4XL: 2.25rem

## Animations

### Keyframes
- `border-beam`: Animated border effect
- `spin-around`: 360-degree rotation
- `magicslide`: Sliding animation
- `marquee`: Horizontal scrolling
- `marquee-vertical`: Vertical scrolling
- `gradient`: Background position shift
- `rainbow`: Color cycling effect

### Durations
- Fast: 200ms
- Normal: 300ms
- Slow: 500ms
- Very Slow: 800ms

## Components

### Buttons
- Interactive Hover Button
- Rainbow Button
- Shimmer Button

### Cards
- Project Card
- Review Card
- Product Card

### Effects
- Blur Reveal
- Text Reveal
- Border Beam
- Animated Gradient Text

## Breakpoints

```css
/* Tailwind default breakpoints */
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1536px'
```

## Spacing

- Base unit: 4px
- Common spacing values: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- Section padding: 64px (desktop), 32px (mobile)
- Container max-width: 1280px

## Shadows

- Subtle: `shadow-sm`
- Medium: `shadow-md`
- Card Hover: `shadow-[0_4px_12px_-4px_rgba(90,71,251,0.1),0_4px_16px_-8px_rgba(90,71,251,0.06)]`