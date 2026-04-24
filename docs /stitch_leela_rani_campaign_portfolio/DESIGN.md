---
name: Executive Leadership Portfolio
colors:
  surface: '#f2fbfa'
  surface-dim: '#d3dcdb'
  surface-bright: '#f2fbfa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf5f4'
  surface-container: '#e7f0ee'
  surface-container-high: '#e1eae9'
  surface-container-highest: '#dbe4e3'
  on-surface: '#151d1d'
  on-surface-variant: '#41474e'
  inverse-surface: '#2a3232'
  inverse-on-surface: '#eaf3f1'
  outline: '#72787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#316288'
  primary: '#002a44'
  on-primary: '#ffffff'
  primary-container: '#004165'
  on-primary-container: '#7eadd7'
  inverse-primary: '#9ccbf6'
  secondary: '#9c404d'
  on-secondary: '#ffffff'
  secondary-container: '#fd8d99'
  on-secondary-container: '#762432'
  tertiary: '#6b5f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#bdac47'
  on-tertiary-container: '#493f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#9ccbf6'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#124a6f'
  secondary-fixed: '#ffdadb'
  secondary-fixed-dim: '#ffb2b9'
  on-secondary-fixed: '#40000f'
  on-secondary-fixed-variant: '#7d2937'
  tertiary-fixed: '#f7e478'
  tertiary-fixed-dim: '#d9c75f'
  on-tertiary-fixed: '#201c00'
  on-tertiary-fixed-variant: '#514700'
  background: '#f2fbfa'
  on-background: '#151d1d'
  surface-variant: '#dbe4e3'
typography:
  h1:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  button:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The visual identity of this design system centers on a balance between institutional authority and modern accessibility. It is designed to position a candidate as an established leader who is forward-thinking yet grounded in the values of the organization. 

The style is defined as **Corporate Modern with Glassmorphism accents**. It utilizes high-end transparency effects to create a sense of depth and technical sophistication, while maintaining a rigorous structural layout that suggests stability. The emotional response should be one of confidence, warmth, and inspiration, achieved through the combination of deep, "Loyal" blues and the inviting glow of "Happy Yellow" highlights.

## Colors

The palette is rooted in heritage and prestige. **Loyal Blue** serves as the foundation for typography and primary navigation, establishing trust. **True Maroon** is used for secondary accents, such as sub-headers and supporting icons, adding a layer of sophisticated warmth.

**Happy Yellow** is the "Action" color. It is reserved exclusively for high-priority calls to action, highlights, and active states to ensure high visibility against the deeper tones. **Cool Gray** is utilized for subtle borders, secondary text, and background elements to maintain a clean, uncluttered canvas. The default state is a light, airy environment that allows the premium "Glass" surfaces to stand out.

## Typography

This design system uses **Epilogue** for headlines to provide a bold, geometric presence that mimics the professional weight of traditional executive typefaces while remaining contemporary. Headings should utilize tight letter-spacing and substantial weight to command attention.

For body copy, **Work Sans** is employed for its exceptional readability and neutral, professional tone. It balances the personality of the headlines with a clean, utilitarian clarity. Use the "Label-caps" style for section overlines and small metadata to maintain an organized hierarchy.

## Elevation & Depth

This design system utilizes **Glassmorphism** as its primary depth indicator. Main content cards should feature a backdrop-blur (minimum 16px) with a semi-transparent white fill (70-80% opacity). This creates a "frosted" effect that feels light and modern.

To support the glass layers, use **ambient shadows**. Shadows should be elongated and very soft (Blur: 30px, Spread: -5px) with a low-opacity tint of Loyal Blue (e.g., rgba(0, 65, 101, 0.08)) to prevent them from looking "dirty" or flat. This multi-layered approach ensures the UI feels tactile and premium, rather than strictly flat.

## Shapes

The shape language is defined by **large, friendly radii**. Standard UI elements (inputs, small buttons) use a base 0.5rem (8px) radius, but the defining characteristic of this design system is the use of **2xl rounded corners (24px)** on all primary cards and image containers. 

These soft edges contrast with the bold, authoritative typography to convey the "warm and empowering" aspect of the leadership tone. Interactive elements like "Happy Yellow" buttons should use a pill-shape or a highly rounded radius to feel inviting and clickable.

## Components

### Buttons
Primary buttons are solid **Happy Yellow** with Loyal Blue text for maximum contrast. They should feature a soft shadow that intensifies on hover to simulate the button "lifting" toward the user. Secondary buttons use a Loyal Blue outline with a transparent background.

### Glass Cards
The signature component. These must include a thin, 1px semi-transparent white border on the top and left sides to simulate a light source hitting the edge of the glass. They are used for project summaries, testimonials, and bio sections.

### Chips & Badges
Used for skills and Toastmasters designations. These should be rendered in **Cool Gray** with a low-opacity background or as a light "True Maroon" tint to indicate different categories of expertise.

### Input Fields
Clean and minimalist. Use a white background with a subtle Cool Gray border. On focus, the border should transition to Loyal Blue with a soft Happy Yellow glow (box-shadow) to guide the user's attention.

### Progress & Impact Metrics
Use Loyal Blue for the track and Happy Yellow for the "progress" to highlight leadership achievements and growth milestones vividly.