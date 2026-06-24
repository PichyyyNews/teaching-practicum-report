# Modern Swiss Design System
### Website Design Specification — Black · Gray · White

> **Design Philosophy**: Swiss International Typographic Style — ความเป็นระเบียบ, ความชัดเจน, และความเรียบง่ายที่มีพลัง  
> Grid เป็นโครงสร้างหลัก, Typography คือเสียง, Whitespace คือลมหายใจ

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Grid & Layout](#4-grid--layout)
5. [Spacing System](#5-spacing-system)
6. [Components — Navigation](#6-components--navigation)
7. [Components — Hero / Header](#7-components--hero--header)
8. [Components — Buttons](#8-components--buttons)
9. [Components — Cards](#9-components--cards)
10. [Components — Forms & Inputs](#10-components--forms--inputs)
11. [Components — Tags & Badges](#11-components--tags--badges)
12. [Components — Tables](#12-components--tables)
13. [Components — Dividers & Rules](#13-components--dividers--rules)
14. [Components — Media & Images](#14-components--media--images)
15. [Components — Quotes & Callouts](#15-components--quotes--callouts)
16. [Components — Statistics & Numbers](#16-components--statistics--numbers)
17. [Components — Lists & Index](#17-components--lists--index)
18. [Components — Footer](#18-components--footer)
19. [Motion & Animation](#19-motion--animation)
20. [Responsive Breakpoints](#20-responsive-breakpoints)
21. [Accessibility](#21-accessibility)

---

## 1. Design Principles

### หลักการออกแบบ Swiss Style

| หลักการ | คำอธิบาย |
|--------|----------|
| **Grid-First** | ทุก element ยึดอยู่บน mathematical grid ที่แม่นยำ |
| **Typography as Hierarchy** | ตัวอักษรทำหน้าที่สร้างลำดับความสำคัญ ไม่ใช่ decoration |
| **Functional Whitespace** | พื้นที่ว่างไม่ใช่ความว่างเปล่า แต่คือ "breathing room" ที่มีความหมาย |
| **No Decoration** | ไม่มี ornament ที่ไม่มีหน้าที่ — ทุกชิ้นส่วนต้องมีเหตุผล |
| **Objective Communication** | ความชัดเจนมาก่อนความสวยงาม |
| **Alignment Precision** | ทุก element ต้อง align กับ baseline grid หรือ column grid เสมอ |

### Design DNA
```
Structure   → 12-column grid + 8px base unit
Voice       → Sans-serif, heavy weight for impact
Rhythm      → Consistent vertical spacing
Accent      → Rules, lines, geometric shapes (no color)
Motion      → Purposeful, never decorative
```

---

## 2. Color System

### Primary Palette

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ████████  #0A0A0A   Black        — Primary text, borders  │
│  ████████  #1A1A1A   Off-Black    — Dark surfaces          │
│  ████████  #3D3D3D   Dark Gray    — Secondary elements     │
│  ████████  #6B6B6B   Mid Gray     — Muted text, icons      │
│  ████████  #9E9E9E   Gray         — Placeholder, disabled  │
│  ████████  #C8C8C8   Light Gray   — Borders, lines         │
│  ████████  #E5E5E5   Pale Gray    — Backgrounds, cards     │
│  ████████  #F5F5F5   Near White   — Page backgrounds       │
│  ████████  #FFFFFF   Pure White   — Primary background     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### CSS Custom Properties

```css
:root {
  /* Core Colors */
  --color-black:       #0A0A0A;
  --color-off-black:   #1A1A1A;
  --color-dark-gray:   #3D3D3D;
  --color-mid-gray:    #6B6B6B;
  --color-gray:        #9E9E9E;
  --color-light-gray:  #C8C8C8;
  --color-pale-gray:   #E5E5E5;
  --color-near-white:  #F5F5F5;
  --color-white:       #FFFFFF;

  /* Semantic Tokens */
  --color-bg-primary:     var(--color-white);
  --color-bg-secondary:   var(--color-near-white);
  --color-bg-surface:     var(--color-pale-gray);
  --color-bg-inverse:     var(--color-black);

  --color-text-primary:   var(--color-black);
  --color-text-secondary: var(--color-dark-gray);
  --color-text-muted:     var(--color-mid-gray);
  --color-text-disabled:  var(--color-gray);
  --color-text-inverse:   var(--color-white);

  --color-border-strong:  var(--color-black);
  --color-border-default: var(--color-light-gray);
  --color-border-subtle:  var(--color-pale-gray);

  --color-accent:         var(--color-black);   /* Swiss accent = bold black */
}
```

### Color Usage Rules

> [!IMPORTANT]
> Swiss Design ใช้ contrast สูงสุดระหว่าง element เสมอ  
> หลีกเลี่ยง gray-on-gray combination ที่ทำให้ hierarchy เลือนราง

| Context | Background | Text | Border |
|---------|-----------|------|--------|
| Body / Default | `#FFFFFF` | `#0A0A0A` | `#C8C8C8` |
| Card / Surface | `#F5F5F5` | `#0A0A0A` | `#E5E5E5` |
| Dark Section | `#0A0A0A` | `#FFFFFF` | `#3D3D3D` |
| Muted / Meta | `#FFFFFF` | `#6B6B6B` | — |
| Hover State | `#0A0A0A` | `#FFFFFF` | `#0A0A0A` |
| Disabled | `#E5E5E5` | `#9E9E9E` | `#C8C8C8` |

---

## 3. Typography

### Font Family

```css
/* Primary — Swiss/Grotesk สำหรับ UI ทั้งหมด */
font-family: 'Inter', 'Helvetica Neue', 'Arial', sans-serif;

/* Display — สำหรับ Hero text ขนาดใหญ่ */
font-family: 'Space Grotesk', 'Helvetica Neue', sans-serif;

/* Mono — สำหรับ code, numbers, labels */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

> **Google Fonts Import**
> ```html
> <link rel="preconnect" href="https://fonts.googleapis.com">
> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
> ```

### Type Scale — Major Third (1.25 ratio)

```
┌──────────────────────────────────────────────────────────────────┐
│ Token          │ Size    │ Weight │ Line-H │ Letter-S │ Use      │
├──────────────────────────────────────────────────────────────────┤
│ --text-display │ 96px    │ 900    │ 0.95   │ -0.04em  │ Hero     │
│ --text-h1      │ 64px    │ 700    │ 1.05   │ -0.03em  │ Page H1  │
│ --text-h2      │ 48px    │ 700    │ 1.1    │ -0.02em  │ Section  │
│ --text-h3      │ 36px    │ 600    │ 1.15   │ -0.01em  │ Sub-sec  │
│ --text-h4      │ 24px    │ 600    │ 1.2    │ 0em      │ Card H   │
│ --text-h5      │ 20px    │ 500    │ 1.3    │ 0em      │ Label    │
│ --text-body-lg │ 18px    │ 400    │ 1.65   │ 0em      │ Lead     │
│ --text-body    │ 16px    │ 400    │ 1.6    │ 0em      │ Default  │
│ --text-body-sm │ 14px    │ 400    │ 1.55   │ 0.01em   │ Small    │
│ --text-caption │ 12px    │ 500    │ 1.4    │ 0.08em   │ Caption  │
│ --text-label   │ 11px    │ 700    │ 1.2    │ 0.12em   │ Label    │
│ --text-micro   │ 10px    │ 500    │ 1.3    │ 0.15em   │ Micro    │
└──────────────────────────────────────────────────────────────────┘
```

### CSS Variables

```css
:root {
  --text-display:  clamp(56px, 8vw, 96px);
  --text-h1:       clamp(40px, 6vw, 64px);
  --text-h2:       clamp(28px, 4vw, 48px);
  --text-h3:       clamp(22px, 3vw, 36px);
  --text-h4:       24px;
  --text-h5:       20px;
  --text-body-lg:  18px;
  --text-body:     16px;
  --text-body-sm:  14px;
  --text-caption:  12px;
  --text-label:    11px;
  --text-micro:    10px;
}
```

### Typography Rules

```
1. UPPERCASE + LETTER-SPACING → ใช้สำหรับ Label, Category, Section marker
2. Heavy weight (700-900)    → เฉพาะ Headings และ Hero text
3. Regular (400)             → Body text เสมอ
4. Tabular numbers           → ใช้ font-variant-numeric: tabular-nums
5. Max line length           → 70-75 characters สำหรับ body text
6. Flush-left alignment      → Swiss style หลีกเลี่ยง centered text ยกเว้นกรณีพิเศษ
```

---

## 4. Grid & Layout

### 12-Column Grid System

```
Viewport: 1440px (Desktop)
┌─────────────────────────────────────────────────────────────────────┐
│ margin │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 10│ 11│ 12│ margin │
│  80px  │   │   │   │   │   │   │   │   │   │   │   │   │  80px  │
└─────────────────────────────────────────────────────────────────────┘
Container max-width: 1280px
Column count:        12
Column gap (gutter): 24px
Column width:        ~84px (calculated)
```

### Baseline Grid

```
Base unit:      8px
Half unit:      4px
Quarter unit:   2px

All vertical spacing = multiples of 8px
Example: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 128px
```

### Container Sizes

```css
.container-full   { max-width: 100%; }
.container-xl     { max-width: 1440px; }
.container-lg     { max-width: 1280px; }    /* Default */
.container-md     { max-width: 1024px; }
.container-sm     { max-width: 768px; }
.container-prose  { max-width: 720px; }     /* Long-form text */
```

### Layout Zones

```
┌─────────────────────────────────────────────┐
│  NAVIGATION BAR                 (64px tall) │
├─────────────────────────────────────────────┤
│                                             │
│  HERO ZONE              (100vh or 640-960px)│
│                                             │
├─────────────────────────────────────────────┤
│  ─── HORIZONTAL RULE ───────────────────── │
├─────────────────────────────────────────────┤
│  SECTION HEADER                 (label+h2)  │
│                                             │
│  CONTENT GRID               (variable)      │
│                                             │
│  ─── HORIZONTAL RULE ───────────────────── │
├─────────────────────────────────────────────┤
│  FOOTER                         (320-480px) │
└─────────────────────────────────────────────┘
```

### Swiss Grid Patterns

````
Pattern A — Editorial Split (50/50):
│ col 1-6 ────────────── │ col 7-12 ──────────── │
│ Large Image / Visual   │ Text block / Heading   │

Pattern B — Feature + List (7/5):
│ col 1-7 ─────────────────── │ col 8-12 ──── │
│ Primary content              │ Sidebar list   │

Pattern C — 3-Column Cards (4/4/4):
│ col 1-4  │ col 5-8  │ col 9-12 │
│ Card 01  │ Card 02  │ Card 03  │

Pattern D — Asymmetric (2/10):
│ col 1-2 │ col 3-12 ────────────────────────── │
│ Label   │ Large content                        │
````

---

## 5. Spacing System

### Space Tokens

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-32:  128px;
  --space-40:  160px;
  --space-48:  192px;
}
```

### Section Spacing

| Section Type | Padding Top/Bottom |
|-------------|-------------------|
| Hero | `160px / 128px` |
| Primary Section | `128px / 128px` |
| Secondary Section | `80px / 80px` |
| Compact Section | `64px / 64px` |
| Component Internal | `40px / 40px` |

---

## 6. Components — Navigation

### Navbar Structure

```
┌────────────────────────────────────────────────────────────────┐
│  ● LOGO/WORDMARK          Nav Links              CTA Button    │
│  [16px] [bold uppercase]  [regular 14px]        [outlined/fill]│
└────────────────────────────────────────────────────────────────┘
Height: 64px  │  Border-bottom: 1px solid #C8C8C8
```

### Navbar Variants

#### Variant 1 — Transparent (on Hero)
```css
.nav-transparent {
  background:    transparent;
  border-bottom: 1px solid rgba(255,255,255,0.15);
  color:         var(--color-white);
  position:      fixed;
  top:           0;
  z-index:       100;
}
```

#### Variant 2 — Sticky White (scrolled)
```css
.nav-sticky {
  background:    rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-light-gray);
  color:         var(--color-black);
  position:      fixed;
  top:           0;
}
```

### Logo / Wordmark
```
Font:         Space Grotesk, 700 weight
Size:         18px
Case:         ALL CAPS or Title Case
Color:        #0A0A0A (light bg) / #FFFFFF (dark bg)
Letter-space: 0.08em (uppercase), 0em (title)
```

### Nav Links
```
Font:        Inter, 500 weight, 14px
Case:        ALL CAPS
Letter-space: 0.1em
Color:       #3D3D3D (default) → #0A0A0A (hover/active)
Hover:       border-bottom: 2px solid #0A0A0A  (animated)
Active:      font-weight: 700, border-bottom solid
```

### Navigation HTML Structure
```html
<nav class="navbar">
  <div class="container-lg navbar__inner">
    <a href="/" class="navbar__logo">BRAND</a>

    <ul class="navbar__links">
      <li><a href="/work">WORK</a></li>
      <li><a href="/about">ABOUT</a></li>
      <li><a href="/services">SERVICES</a></li>
      <li><a href="/journal">JOURNAL</a></li>
    </ul>

    <div class="navbar__actions">
      <a href="/contact" class="btn btn--outline btn--sm">Contact</a>
    </div>

    <button class="navbar__burger" aria-label="Toggle menu">
      <!-- hamburger icon -->
    </button>
  </div>
</nav>
```

### Mobile Navigation (Hamburger Menu)
```
Trigger:  3-line icon → transforms to ✕
Menu:     Full-screen overlay
Background: #0A0A0A (black)
Links:    Large, 36px, white, stacked vertically
Animation: Slide-in from top, 300ms ease
```

---

## 7. Components — Hero / Header

### Hero Type A — Full Bleed Typography
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ── CATEGORY LABEL ──────────────────────                      │
│                                                                │
│  MASSIVE DISPLAY                                               │
│  TEXT GOES HERE                                                │
│  BREAKING GRID                                                 │
│                                                                │
│  Lead paragraph text that explains the context,               │
│  keeping it brief and impactful.                               │
│                                                                │
│  [Primary CTA]    [Secondary CTA]                              │
│                                                                │
│  ─────────────────────────────────────────── 01 / 03 ──       │
└────────────────────────────────────────────────────────────────┘
```

**Specs:**
```
Height:          100vh (min 640px)
Background:      #FFFFFF
Display text:    clamp(64px, 10vw, 128px), weight 900
                 letter-spacing: -0.04em
                 line-height: 0.9
Category label:  11px, uppercase, weight 700, letter-spacing: 0.15em
                 color: #6B6B6B
                 preceded by thin horizontal line (40px)
Lead text:       18px, weight 400, color: #3D3D3D
                 max-width: 520px
Slide counter:   12px mono, float right, color: #9E9E9E
```

### Hero Type B — Split Layout (Image + Text)
```
┌─────────────────────────┬──────────────────────────┐
│                         │                          │
│   FULL-HEIGHT           │  Label ──────────        │
│   IMAGE                 │                          │
│   (col 1-6)             │  H1 Heading              │
│                         │  Large and Bold          │
│   ● overlay rule        │                          │
│                         │  Body text...            │
│                         │                          │
│                         │  [CTA Button]            │
│                         │                          │
└─────────────────────────┴──────────────────────────┘
```

**Image treatment:**
```
filter: grayscale(100%)         — Swiss monochrome aesthetic
Image overlay: 1px grid lines   — ตกแต่งด้วย SVG grid pattern
object-fit: cover
aspect-ratio: 1/1 (col 1-6)
```

### Hero Type C — Marquee / Scrolling Text
```
Background: #0A0A0A
Text:       Huge text scrolling horizontally
Font:       900 weight, uppercase
Color:      #FFFFFF stroke text (text-stroke) alternating filled
Speed:      40s linear infinite
```

---

## 8. Components — Buttons

### Button Scale

```
┌──────────────────────────────────────────────────────────────┐
│  SIZE    │ Height │ Padding H │ Font Size │ Font Weight      │
├──────────────────────────────────────────────────────────────┤
│  XS      │  28px  │  12px     │  11px     │  700             │
│  SM      │  36px  │  16px     │  13px     │  600             │
│  MD      │  44px  │  24px     │  14px     │  600  (default)  │
│  LG      │  52px  │  32px     │  16px     │  600             │
│  XL      │  64px  │  40px     │  18px     │  700             │
└──────────────────────────────────────────────────────────────┘
Border-radius: 0px (Swiss style — square corners always)
```

### Button Variants

#### Primary (Filled Black)
```css
.btn--primary {
  background:    #0A0A0A;
  color:         #FFFFFF;
  border:        2px solid #0A0A0A;
  font-weight:   600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size:     13px;
  /* hover */
  &:hover {
    background: #3D3D3D;
    border-color: #3D3D3D;
  }
}
```

#### Outline (Ghost)
```css
.btn--outline {
  background:    transparent;
  color:         #0A0A0A;
  border:        2px solid #0A0A0A;
  &:hover {
    background: #0A0A0A;
    color:      #FFFFFF;
  }
}
```

#### Ghost / Text Link
```css
.btn--ghost {
  background:    transparent;
  color:         #0A0A0A;
  border:        none;
  text-decoration: none;
  position: relative;
  /* underline animation */
  &::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 2px;
    background: #0A0A0A;
    transition: width 0.3s ease;
  }
  &:hover::after { width: 100%; }
}
```

#### Inverse (on Dark Background)
```css
.btn--inverse {
  background:  #FFFFFF;
  color:       #0A0A0A;
  border:      2px solid #FFFFFF;
  &:hover {
    background:  transparent;
    color:       #FFFFFF;
  }
}
```

#### Icon Button
```css
.btn--icon {
  width:       44px;
  height:      44px;
  padding:     0;
  display:     flex;
  align-items: center;
  justify-content: center;
  border:      2px solid #C8C8C8;
  background:  transparent;
  &:hover {
    border-color: #0A0A0A;
    background:   #0A0A0A;
    color:        #FFFFFF;
  }
}
```

### Button States Matrix

| Variant | Default | Hover | Active | Disabled | Focus |
|---------|---------|-------|--------|----------|-------|
| Primary | Black fill | Dark gray | Scale 0.98 | Pale gray | 3px offset ring |
| Outline | Transparent | Black fill | Scale 0.98 | Light gray border | 3px offset ring |
| Ghost | Transparent | Underline | Scale 0.98 | Gray text | Underline |

---

## 9. Components — Cards

### Card Type A — Default Content Card

```
┌─────────────────────────────────┐
│                                 │  Border: 1px solid #E5E5E5
│   ████████████████████████      │  Border-radius: 0px
│   IMAGE AREA                    │  Background: #FFFFFF
│   (aspect-ratio: 4/3)           │  Hover: border-color → #0A0A0A
│                                 │         transform: translateY(-4px)
├─────────────────────────────────┤  ─── thin line ───
│                                 │
│  CATEGORY LABEL    DATE         │  11px, uppercase, #6B6B6B
│                                 │
│  Card Heading                   │  24px, weight 700, #0A0A0A
│  Two Lines Max Here             │
│                                 │
│  Short description text goes    │  14px, #6B6B6B, 2-3 lines
│  here, concise and clear...     │
│                                 │
│  Read More ─────────────────→   │  13px, #0A0A0A, arrow animate
│                                 │
└─────────────────────────────────┘
Padding: 24px
```

### Card Type B — Numbered Index Card (Swiss Style)
```
┌─────────────────────────────────┐
│                                 │
│  01                             │  64px, weight 900, #E5E5E5
│  ─────────────────────          │  1px rule, full width
│                                 │
│  CARD TITLE                     │  20px, weight 700
│                                 │
│  Supporting text that           │  14px, #6B6B6B
│  explains this item             │
│                                 │
└─────────────────────────────────┘
Border-left: 3px solid #0A0A0A   (accent line)
Padding-left: 24px
```

### Card Type C — Horizontal Media Card
```
┌─────────────────┬───────────────────────────────────┐
│                 │  CATEGORY           DATE           │
│  IMAGE (1/1)    │                                    │
│  grayscale      │  Article Title                     │
│                 │  Long and Descriptive              │
│                 │                                    │
│                 │  Brief excerpt text...             │
│                 │                                    │
│                 │  → Read Article                    │
└─────────────────┴───────────────────────────────────┘
Image col: fixed 240px (desktop) / full width (mobile)
```

### Card Type D — Stat / Feature Card
```
┌─────────────────────────────────┐
│                                 │
│  ████ 96px number               │  Display size, weight 900
│       bold stat                 │  Color: #0A0A0A
│                                 │
│  ─────────────────              │  1px rule
│                                 │
│  Label describing the stat      │  14px, #6B6B6B
│                                 │
└─────────────────────────────────┘
Background: #F5F5F5
Padding: 40px 32px
```

---

## 10. Components — Forms & Inputs

### Input Fields

```
┌──────────────────────────────────────────────────────┐
│ LABEL TEXT                                           │
│ 11px, uppercase, weight 700, letter-spacing: 0.1em  │
├──────────────────────────────────────────────────────┤
│ Placeholder text...                                  │
│                                                      │
│  ─────────────────────────────────────────────────  │
└──────────────────────────────────────────────────────┘
         ↑ Border: bottom-only, 1px solid #C8C8C8
```

### Input Variants

```css
/* Base Input — Swiss Underline Style */
.input {
  width:           100%;
  height:          48px;
  padding:         0 0 12px 0;
  background:      transparent;
  border:          none;
  border-bottom:   1px solid var(--color-light-gray);
  font-size:       var(--text-body);
  color:           var(--color-black);
  border-radius:   0;

  &::placeholder { color: var(--color-gray); }

  &:focus {
    outline:       none;
    border-bottom: 2px solid var(--color-black);
  }

  &:invalid, &.is-error {
    border-bottom: 2px solid #0A0A0A; /* stays black — no red */
    /* use an error icon instead of color */
  }
}

/* Boxed Input — for search / prominent inputs */
.input--boxed {
  padding:       14px 16px;
  border:        1px solid var(--color-light-gray);
  border-radius: 0;
  &:focus {
    border-color: var(--color-black);
    outline:      3px solid rgba(10,10,10,0.1);
    outline-offset: 0;
  }
}
```

### Form States

| State | Border | Label Color | Notes |
|-------|--------|-------------|-------|
| Default | `#C8C8C8` | `#6B6B6B` | — |
| Focus | `#0A0A0A` (2px) | `#0A0A0A` | Label animates up |
| Error | `#0A0A0A` (2px) | `#0A0A0A` | Error icon + message below |
| Disabled | `#E5E5E5` | `#9E9E9E` | cursor: not-allowed |
| Filled/Valid | `#3D3D3D` | `#0A0A0A` | checkmark icon |

### Textarea
```css
.textarea {
  min-height:  160px;
  resize:      vertical;
  padding:     16px;
  border:      1px solid var(--color-light-gray);
  font-family: var(--font-body);
  font-size:   var(--text-body);
  border-radius: 0;
  &:focus { border-color: var(--color-black); }
}
```

### Select / Dropdown
```css
.select {
  appearance:  none;
  background-image: url("data:image/svg+xml,..."); /* Custom arrow */
  background-position: right 16px center;
  background-repeat: no-repeat;
  padding-right: 48px;
  /* Same border style as .input--boxed */
}
```

### Checkbox & Radio
```css
/* Square checkbox — no border-radius (Swiss) */
.checkbox {
  width:         20px;
  height:        20px;
  border:        2px solid var(--color-dark-gray);
  border-radius: 0;
  appearance:    none;
  &:checked {
    background:  var(--color-black);
    /* White checkmark via pseudo-element */
  }
}
```

---

## 11. Components — Tags & Badges

### Tag Sizes

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  ┌──────────┐  ┌────────────┐  ┌──────────────────┐   │
│  │  SM TAG  │  │  MD TAG    │  │    LG TAG        │   │
│  └──────────┘  └────────────┘  └──────────────────┘   │
│   10px          12px             14px                  │
│   H:20px        H:24px           H:32px                │
│   P:6px 8px     P:6px 12px       P:8px 16px            │
│                                                        │
└────────────────────────────────────────────────────────┘
Border-radius: 0px  │  Font-weight: 600  │  Letter-spacing: 0.06em
```

### Tag Variants

| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| Default | `#F5F5F5` | `#3D3D3D` | `1px solid #E5E5E5` |
| Strong | `#0A0A0A` | `#FFFFFF` | `1px solid #0A0A0A` |
| Outline | `transparent` | `#0A0A0A` | `1px solid #0A0A0A` |
| Muted | `#E5E5E5` | `#6B6B6B` | none |

### Badges (Notification / Status)

```css
.badge {
  display:        inline-flex;
  align-items:    center;
  justify-content: center;
  min-width:      20px;
  height:         20px;
  padding:        0 6px;
  font-size:      11px;
  font-weight:    700;
  background:     var(--color-black);
  color:          var(--color-white);
  border-radius:  0;  /* square badge */
}
```

---

## 12. Components — Tables

### Data Table

```
┌──────┬────────────────────┬──────────┬──────────┬──────────┐
│  #   │ Name               │ Type     │ Value    │ Status   │
├──────┼────────────────────┼──────────┼──────────┼──────────┤
│  01  │ Item Alpha         │ Primary  │ 1,240    │ Active   │
│  02  │ Item Beta          │ Secondary│ 893      │ Pending  │
│  03  │ Item Gamma         │ Primary  │ 2,100    │ Active   │
└──────┴────────────────────┴──────────┴──────────┴──────────┘
```

```css
.table {
  width:           100%;
  border-collapse: collapse;

  th {
    font-size:       11px;
    font-weight:     700;
    text-transform:  uppercase;
    letter-spacing:  0.1em;
    color:           var(--color-mid-gray);
    padding:         12px 16px;
    border-bottom:   2px solid var(--color-black);
    text-align:      left;
  }

  td {
    font-size:       14px;
    padding:         16px;
    border-bottom:   1px solid var(--color-pale-gray);
    color:           var(--color-black);
    font-variant-numeric: tabular-nums;
  }

  tr:hover td {
    background: var(--color-near-white);
  }
}
```

---

## 13. Components — Dividers & Rules

### Horizontal Rules (Swiss Design Signature)

```css
/* Standard Rule */
.rule          { border-top: 1px solid #C8C8C8; }

/* Bold Rule */
.rule--bold    { border-top: 2px solid #0A0A0A; }

/* Thick Rule */
.rule--thick   { border-top: 4px solid #0A0A0A; }

/* Section Marker (label + rule) */
.section-marker {
  display:         grid;
  grid-template-columns: 40px 1fr;
  align-items:     center;
  gap:             16px;
  font-size:       11px;
  font-weight:     700;
  text-transform:  uppercase;
  letter-spacing:  0.12em;
  color:           #6B6B6B;
  margin-bottom:   64px;
}

.section-marker::before {
  content:     '';
  display:     block;
  height:      2px;
  background:  #0A0A0A;
}
```

### Vertical Rules
```css
.vr {
  width:      1px;
  background: var(--color-light-gray);
  align-self: stretch;
}
```

---

## 14. Components — Media & Images

### Image Treatment

```css
/* Swiss Monochrome Default */
.img-swiss {
  filter:      grayscale(100%) contrast(1.05);
  display:     block;
  width:       100%;
  object-fit:  cover;
}

/* On hover — reveal color (optional, modern touch) */
.img-swiss:hover {
  filter: grayscale(0%) contrast(1);
  transition: filter 0.6s ease;
}
```

### Image Aspect Ratios

| Ratio | Use Case |
|-------|---------|
| `16/9` | Full-width banners, hero backgrounds |
| `4/3` | Standard card images |
| `1/1` | Profile, thumbnail, feature image |
| `3/4` | Portrait, editorial |
| `21/9` | Cinematic hero |

### Image Frame (Swiss Grid Overlay)

```css
/* Grid overlay effect — signature Swiss style */
.img-frame {
  position: relative;
  overflow: hidden;
}
.img-frame::after {
  content:  '';
  position: absolute;
  inset:    0;
  background-image:
    linear-gradient(rgba(200,200,200,0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200,200,200,0.3) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}
```

### Captions
```css
.caption {
  font-size:      12px;
  font-weight:    500;
  color:          #6B6B6B;
  letter-spacing: 0.04em;
  margin-top:     8px;
  padding-top:    8px;
  border-top:     1px solid #E5E5E5;
}
```

### Figure Counter (Swiss Editorial Style)
```html
<figure class="figure">
  <img src="..." alt="..." class="img-swiss">
  <figcaption class="caption">
    <span class="caption__num">Fig. 01</span>
    Description of the image content.
  </figcaption>
</figure>
```

---

## 15. Components — Quotes & Callouts

### Blockquote

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ▌  "Typography is the craft of endowing human           │
│     language with a durable visual form, and thus       │
│     with an independent existence."                      │
│                                                          │
│     — Robert Bringhurst                                  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

```css
.blockquote {
  margin:       0;
  padding:      32px 0 32px 32px;
  border-left:  4px solid var(--color-black);

  p {
    font-size:    clamp(20px, 2.5vw, 28px);
    font-weight:  300;   /* Light weight = elegance */
    line-height:  1.4;
    color:        var(--color-black);
    font-style:   italic;
  }

  cite {
    display:      block;
    margin-top:   16px;
    font-size:    13px;
    font-style:   normal;
    font-weight:  600;
    color:        var(--color-mid-gray);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
}
```

### Callout Box
```css
.callout {
  padding:       32px;
  background:    var(--color-near-white);
  border-left:   4px solid var(--color-black);

  .callout__label {
    font-size:      11px;
    font-weight:    700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color:          var(--color-mid-gray);
    margin-bottom:  8px;
  }

  .callout__body {
    font-size:   16px;
    line-height: 1.6;
  }
}
```

---

## 16. Components — Statistics & Numbers

### Large Number Display

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ┌──────────────┐  ┌──────────────┐  ┌─────────────┐  │
│   │    1,240     │  │      98%     │  │     24      │  │
│   │ ──────────── │  │ ──────────── │  │ ─────────── │  │
│   │ Active Users │  │ Satisfaction │  │ Countries   │  │
│   └──────────────┘  └──────────────┘  └─────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

```css
.stat-block {
  .stat-block__number {
    font-size:    clamp(48px, 6vw, 80px);
    font-weight:  900;
    line-height:  1;
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
    color:        var(--color-black);
  }

  .stat-block__rule {
    height:       2px;
    background:   var(--color-black);
    width:        40px;
    margin:       16px 0;
  }

  .stat-block__label {
    font-size:    13px;
    font-weight:  500;
    color:        var(--color-mid-gray);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
}
```

---

## 17. Components — Lists & Index

### Numbered List (Swiss Index Style)

```
01  ──────────────────────────────────────────
    Primary Item Title
    Brief description of this item.

02  ──────────────────────────────────────────
    Secondary Item Title
    Brief description of this item.

03  ──────────────────────────────────────────
    Tertiary Item Title
    Brief description of this item.
```

```css
.index-list {
  list-style: none;
  margin: 0; padding: 0;

  .index-list__item {
    display:       grid;
    grid-template-columns: 48px 1fr;
    gap:           24px;
    padding:       24px 0;
    border-top:    1px solid var(--color-light-gray);

    &:last-child { border-bottom: 1px solid var(--color-light-gray); }
  }

  .index-list__num {
    font-size:    12px;
    font-weight:  700;
    color:        var(--color-mid-gray);
    font-variant-numeric: tabular-nums;
    padding-top:  2px;
  }

  .index-list__title {
    font-size:    18px;
    font-weight:  600;
    color:        var(--color-black);
    margin-bottom: 4px;
  }

  .index-list__desc {
    font-size:    14px;
    color:        var(--color-mid-gray);
  }
}
```

### Link List / Menu List

```css
.link-list {
  .link-list__item {
    display:       flex;
    justify-content: space-between;
    align-items:   center;
    padding:       20px 0;
    border-bottom: 1px solid var(--color-pale-gray);
    cursor:        pointer;
    transition:    padding-left 0.2s ease;

    &:hover {
      padding-left: 8px;
      border-color: var(--color-black);
    }

    .link-list__label {
      font-size:   16px;
      font-weight: 500;
    }

    .link-list__arrow {
      /* → arrow, animates right on hover */
      transition: transform 0.2s ease;
    }

    &:hover .link-list__arrow { transform: translateX(4px); }
  }
}
```

---

## 18. Components — Footer

### Footer Structure

```
═══════════════════════════════════════════════════════════════
  2px top rule (full width, black)
───────────────────────────────────────────────────────────────

  BRAND NAME              Col 2: Links        Col 3: Links
  Short tagline           About               Services
  or description          Work                Journal
                          Contact             Legal

  ─────────────────────────────────────────────────────────────
  © 2024 Brand Name    Privacy  ·  Terms    Designed in TH ←→

═══════════════════════════════════════════════════════════════
```

```css
.footer {
  padding-top:    80px;
  border-top:     2px solid var(--color-black);

  .footer__grid {
    display:               grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap:                   64px;
    padding-bottom:        64px;
    border-bottom:         1px solid var(--color-light-gray);
  }

  .footer__brand {
    .brand-name {
      font-size:   18px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .brand-desc {
      margin-top: 12px;
      font-size:  14px;
      color:      var(--color-mid-gray);
      max-width:  280px;
    }
  }

  .footer__nav-title {
    font-size:      11px;
    font-weight:    700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color:          var(--color-mid-gray);
    margin-bottom:  24px;
  }

  .footer__nav-link {
    display:         block;
    font-size:       14px;
    color:           var(--color-dark-gray);
    padding:         6px 0;
    text-decoration: none;
    &:hover { color: var(--color-black); }
  }

  .footer__bottom {
    display:         flex;
    justify-content: space-between;
    align-items:     center;
    padding:         24px 0;
    font-size:       12px;
    color:           var(--color-mid-gray);
  }
}
```

---

## 19. Motion & Animation

### Animation Principles (Swiss = Purposeful)

> [!NOTE]
> Swiss Design ไม่ใช้ animation เพื่อความบันเทิง  
> ทุก motion ต้องมีหน้าที่: **guide attention**, **confirm action**, **show state change**

### Timing Functions

```css
:root {
  --ease-default:  cubic-bezier(0.4, 0, 0.2, 1);   /* Material-like */
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --ease-sharp:    cubic-bezier(0.4, 0, 0.6, 1);

  --duration-fast:    150ms;
  --duration-base:    250ms;
  --duration-slow:    400ms;
  --duration-slower:  600ms;
}
```

### Keyframe Library

```css
/* Fade Up — page load, scroll reveal */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Line Draw — for rules and underlines */
@keyframes drawLine {
  from { transform: scaleX(0); transform-origin: left; }
  to   { transform: scaleX(1); }
}

/* Counter — for stat numbers */
@keyframes countUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Marquee — for scrolling text */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

### Scroll-Triggered Animations (Intersection Observer)

```css
.reveal {
  opacity:    0;
  transform:  translateY(32px);
  transition: opacity var(--duration-slow) var(--ease-out),
              transform var(--duration-slow) var(--ease-out);
}
.reveal.is-visible {
  opacity:    1;
  transform:  translateY(0);
}

/* Stagger delays for grid items */
.reveal-stagger:nth-child(1) { transition-delay: 0ms;   }
.reveal-stagger:nth-child(2) { transition-delay: 100ms; }
.reveal-stagger:nth-child(3) { transition-delay: 200ms; }
.reveal-stagger:nth-child(4) { transition-delay: 300ms; }
```

---

## 20. Responsive Breakpoints

### Breakpoint Scale

```css
/* Mobile First */
:root {
  --bp-xs:  320px;    /* Small phones */
  --bp-sm:  480px;    /* Large phones */
  --bp-md:  768px;    /* Tablets */
  --bp-lg:  1024px;   /* Small desktop */
  --bp-xl:  1280px;   /* Desktop (default) */
  --bp-2xl: 1440px;   /* Large desktop */
  --bp-3xl: 1920px;   /* Ultra-wide */
}
```

### Breakpoint Behavior

| Component | Mobile (<768) | Tablet (768-1024) | Desktop (>1024) |
|-----------|--------------|------------------|----------------|
| Navbar | Hamburger menu | Hamburger menu | Full links |
| Hero | Stack vertically | Stack + smaller text | Split layout |
| Grid (3col) | 1 column | 2 columns | 3 columns |
| Grid (2col) | 1 column | 2 columns | 2 columns |
| Footer | 1 column | 2 columns | 3 columns |
| Container padding | 24px | 40px | 80px |
| Section padding | 64px | 96px | 128px |
| Display text | 40px | 56px | 96px |

---

## 21. Accessibility

### Color Contrast Requirements

| Pairing | Ratio | WCAG Level |
|---------|-------|-----------|
| Black `#0A0A0A` on White `#FFFFFF` | 19.9:1 | AAA ✓ |
| Dark Gray `#3D3D3D` on White | 10.4:1 | AAA ✓ |
| Mid Gray `#6B6B6B` on White | 5.8:1 | AA ✓ |
| Gray `#9E9E9E` on White | 2.8:1 | Fail ✗ (use for decorative only) |
| White on Black | 19.9:1 | AAA ✓ |

> [!CAUTION]
> ห้ามใช้ `#9E9E9E` หรืออ่อนกว่าสำหรับ text ที่มีความหมาย  
> ใช้ได้เฉพาะ placeholder, disabled state, decorative text เท่านั้น

### Focus Indicators

```css
/* Global focus style — visible and Swiss */
:focus-visible {
  outline:        3px solid var(--color-black);
  outline-offset: 3px;
}

/* On dark backgrounds */
.dark :focus-visible {
  outline-color:  var(--color-white);
}
```

### Semantic HTML Requirements

```
✓ Use <nav> for navigation
✓ Use <main> for primary content
✓ Use <article> for standalone content
✓ Use <section> with aria-label
✓ Use <h1> only once per page
✓ Heading hierarchy: h1 → h2 → h3 (never skip)
✓ All images must have alt text
✓ Icons must have aria-label or aria-hidden
✓ Form inputs must have associated <label>
✓ Buttons must have descriptive text or aria-label
```

---

## Component Quick Reference

```
┌────────────────────────────────────────────────────────────────────┐
│  SWISS DESIGN TOKEN CHEATSHEET                                     │
├────────────────────────────────────────────────────────────────────┤
│  Colors                                                            │
│  · Primary text:   #0A0A0A    · Primary bg:  #FFFFFF               │
│  · Secondary text: #3D3D3D    · Surface:     #F5F5F5               │
│  · Muted text:     #6B6B6B    · Border:      #C8C8C8               │
│  · Dark bg:        #0A0A0A    · Dark text:   #FFFFFF               │
├────────────────────────────────────────────────────────────────────┤
│  Typography                                                        │
│  · Display: Space Grotesk 900, clamp(56px, 8vw, 96px)             │
│  · H1: Inter 700, clamp(40px, 6vw, 64px)                          │
│  · H2: Inter 700, clamp(28px, 4vw, 48px)                          │
│  · Body: Inter 400, 16px, line-height 1.6                         │
│  · Label: Inter 700, 11px, uppercase, ls: 0.12em                  │
├────────────────────────────────────────────────────────────────────┤
│  Spacing (8px base)                                                │
│  · Component padding: 24px / 32px / 40px                          │
│  · Section padding:   80px / 128px                                 │
│  · Grid gap:          24px                                         │
├────────────────────────────────────────────────────────────────────┤
│  Shape                                                             │
│  · Border-radius: 0px (all elements, Swiss = sharp corners)        │
│  · Border-width:  1px default / 2px active / 4px accent           │
├────────────────────────────────────────────────────────────────────┤
│  Motion                                                            │
│  · Fast: 150ms   · Base: 250ms   · Slow: 400ms                    │
│  · Easing: cubic-bezier(0.4, 0, 0.2, 1)                           │
└────────────────────────────────────────────────────────────────────┘
```

---

*Design System Version 1.0 — Modern Swiss Style*  
*Theme: Black · Gray · White — Functional, Precise, Timeless*
