---
name: Atmospheric Clarity
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#c9cdd1'
  on-tertiary: '#2c3134'
  tertiary-container: '#adb2b6'
  on-tertiary-container: '#404548'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#dfe3e7'
  tertiary-fixed-dim: '#c3c7cb'
  on-tertiary-fixed: '#171c1f'
  on-tertiary-fixed-variant: '#43474b'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-temp:
    fontFamily: Inter
    fontSize: 96px
    fontWeight: '200'
    lineHeight: 100px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-padding: 20px
  stack-gap-sm: 8px
  stack-gap-md: 16px
  stack-gap-lg: 24px
  grid-gutter: 12px
---

## Brand & Style
The design system is centered on "Contextual Immersion," where the interface serves as a transparent window into the local climate. The target audience includes urban professionals and outdoor enthusiasts who require immediate, high-fidelity environmental data without visual clutter.

The design style is a refined hybrid of **Minimalism** and **Glassmorphism**. By utilizing frosted textures and translucent layers, the UI maintains a sense of depth and lightness. The emotional response should be one of calm and clarity, even during turbulent weather conditions. Visual hierarchy is established through spatial layering rather than heavy lines or solid blocks of color.

## Colors
This design system defaults to a **dark mode** architecture to ensure that weather imagery and gradients remain vibrant and immersive.

- **Primary (Sky Blue):** Used for active states, precipitation indicators, and highlighting critical weather events.
- **Secondary (Deep Slate):** The foundational color for semi-transparent surfaces and background containers.
- **Tertiary (Frost White):** Reserved for primary text and high-contrast iconography to ensure maximum legibility against dark backgrounds.
- **Surface Gradients:** Backgrounds should dynamically shift between Cerulean (#0EA5E9 to #38BDF8) for clear days and Moody Gray (#475569 to #1E293B) for overcast conditions. All gradients should maintain a subtle 135-degree angle.

## Typography
The typography utilizes **Inter** to achieve a systematic, utilitarian aesthetic that remains highly readable across varied background complexities. 

- **Display Scale:** Use the `display-temp` role for the primary current temperature. The thin weight (200) prevents the large size from feeling heavy.
- **Hierarchy:** High-contrast white (#FFFFFF) is the default for all text roles. Secondary information (e.g., "Feels like") should use the `body-md` role with 70% opacity.
- **Readability:** On complex photographic backgrounds, apply a subtle text shadow (0px 2px 4px, 20% black) to ensure the white glyphs remain distinct.

## Layout & Spacing
The layout follows a **fluid grid** model optimized for mobile-first interaction. 

- **Safe Areas:** A 20px horizontal margin is maintained globally to prevent content from touching the edges of the device.
- **Vertical Rhythm:** Content is organized into a vertical stack. Current conditions occupy the top 40% of the viewport, with a scrollable area for detailed cards below.
- **Card Grids:** For the 10-day forecast and hourly details, use a 2-column or horizontal scrolling layout with a 12px gutter. This ensures high information density without visual crowding.

## Elevation & Depth
Elevation is expressed through **Glassmorphism** rather than traditional shadows. 

- **Surface Tiers:** All interactive cards use a background blur (Backdrop Filter: blur(20px)) with a 10% white tint.
- **Borders:** "Ghost borders" are essential. Use a 1px solid white border at 15% opacity to define the edges of glass containers.
- **Z-Index Strategy:** The background gradient/imagery sits at the bottom. The primary data cards sit on the mid-layer. Modals or detailed overlays sit on the top layer with an increased blur (40px) and a darker 20% tint.

## Shapes
The shape language is consistently **Rounded**, echoing the organic nature of clouds and fluid weather patterns.

- **Base Radius:** Standard UI cards and input fields use 0.5rem (8px).
- **Large Radius:** Main containers and prominent forecast blocks use 1.5rem (24px) to create a friendly, modern appearance.
- **Interactive Elements:** Small buttons and selection chips should use a pill-shape (fully rounded) to differentiate them from static information cards.

## Components
- **Weather Cards:** The core component. Must feature a glassmorphic background, 1px subtle border, and internal padding of 16px. Content should be left-aligned.
- **Hourly Scroller:** A horizontal list component. Each item is a narrow vertical card showing time, a thin-line weather icon, and temperature.
- **Action Buttons:** Circular glass icons (44x44px) for settings or location switching, featuring a 20% white fill and high-contrast icons.
- **Weather Icons:** Use a custom thin-line set (1.5px stroke width). For the current weather display, these can be replaced with high-quality 3D illustrative assets or Lottie animations to provide visual delight.
- **Metric Chips:** Small, pill-shaped elements used to display auxiliary data like "UV Index" or "Humidity" within a card, using 20% opacity white backgrounds.
- **Data Visualizations:** Wind speed or precipitation charts should use a single-stroke primary color line (Sky Blue) with a soft glow effect.