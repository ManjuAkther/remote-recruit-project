# RemoteRecruit Landing Page UI — Technical Assessment

A high-fidelity, fully responsive implementation of the RemoteRecruit features landing page built from view-only Figma specifications.

## 🚀 Live Demo & Repository
*   **Deployment Link:** [https://vercel.app](https://vercel.app)
*   **GitHub Repository:** [https://github.com/ManjuAkther/remote-recruit-project.git]

---

## 🛠️ Stack & Architecture
This project follows a strict component-driven development architecture:

*   **Frontend Library:** React.js (v18+)
*   **Styling Engine:** Tailwind CSS (Utility classes & custom configuration)
*   **Animations Engine:** Framer Motion (Scroll reveal and hardware-accelerated layouts)
*   **Icons/Indicators:** Standard UTF-8 Visual Anchors

### Project Structure Breakdown
```text
src/
├── components/
│   ├── Navbar.jsx       # Responsive header layout and route hashes
│   ├── Hero.jsx         # Staggered loading entrance segment
│   ├── Features.jsx     # Viewport slide-triggered side panels
│   ├── MidCta.jsx       # Accent interactive mid-break block
│   ├── Pricing.jsx      # Scale-on-hover membership tier configurations
│   ├── Faq.jsx          # Smooth layout height accordion blocks
│   ├── Footer.jsx       # Semantic copyright and legal metadata wrapper
│   └── ScrollToTop.jsx  # Event tracking window visibility return-triggers
└── App.jsx              # Main engine mount point wrap
```

---

## ✨ Features Implemented

1.  **Figma Fidelity Consistency:** Pixel-aligned spacing maps, semantic color scales (`slate`, `blue`), and responsive breakpoint setups matching absolute constraints.
2.  **Smooth Scroll Animations:** Intercepts viewports natively utilizing `framer-motion` to fade and float blocks sequentially instead of raw static renders.
3.  **High-Converting Clean Copy:** Replaced all native raw placeholder structural texts with production-ready copy for feature blocks, premium tier sheets, and accordion panels.
4.  **Interactive States:** Transitions on all buttons, custom interactive accordion panels via an asynchronous atomic expansion array state, and continuous tracking scroll-to-top hooks.
5.  **Performance Optimization:** Clean DOM node count structures built manually to target Lighthouse accessibility and rendering scores above 90+.

---

## ⚙️ Project Setup Instructions

### Prerequisites
*   Node.js (v16 or higher)
*   npm or yarn package managers

### Installation
1. Clone the project repository:
   ```bash
   git clone https://github.com.git
   cd remoterecruit-assessment
   ```

2. Install codebase dependencies:
   ```bash
   npm install
   ```

3. Launch local runtime build environment:
   ```bash
   npm run dev
   ```

4. Build production static bundle:
   ```bash
   npm run build
   ```

---

## ⚠️ Known Limitations / Assumptions
*   **Router Simulation:** Navigation anchor links rely on page section element ID hash tags (`#pricing`, `#features`) rather than initialized React Router parameters since it is single-page scope.
*   **Mock Asset Containers:** Structural card elements are wrapped inside native CSS layout mocks instead of fetching remote graphical components to retain zero network loading lag times.
