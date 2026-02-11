# MarkMySpot - Exam Slot Booking App

A modern SaaS-style exam slot booking application with professional UI design, clean cards, soft shadows, and responsive layouts.

## Quick Start

```bash
npm install
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in development mode.

## Available Scripts

- `npm start` - Development server
- `npm test` - Test runner
- `npm run build` - Production build

## Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Indigo) | `#6366f1` | Buttons, active states |
| Primary Dark | `#4f46e5` | Hover states |
| Success | `#10b981` | Status badges |
| Danger | `#ef4444` | Error messages |
| Info | `#3b82f6` | Info badges |
| Background | `#f9fafb` | Page background |
| Card | `#ffffff` | Card backgrounds |

### Spacing Scale
4px, 8px, 16px, 24px, 32px, 48px

### Border Radius
8px, 12px, 16px, 20px (cards use 16-20px)

### Typography
System UI stack (Inter, Segoe UI, Roboto) with weights: 400, 500, 600, 700

### Shadows
4 levels: light (cards), medium (hover), large (elevation), extra-large (modals)

## Project Structure

### CSS Files (Plain CSS - No Tailwind)
- **index.css** (282 lines) - Global styles, variables, typography
- **App.css** (550 lines) - Navbar, dashboards, tables, responsive design
- **components/common/Common.css** (150 lines) - Input, button, form styles
- **components/slots/Slots.css** (120 lines) - Slot card grid and capacity visualization
- **components/auth/Auth.css** (100 lines) - Auth page centered card design

### React Components (12 Modified)
| Component | Purpose |
|-----------|---------|
| App.js | CSS imports |
| Login.jsx | Centered card, gradient background |
| Register.jsx | Role selection, centered design |
| StudentDashboard.jsx | Navbar, search, tabs, slot grid |
| AdminDashboard.jsx | Admin controls, table, management |
| Button.jsx | Variants (primary/secondary), sizes (sm/md) |
| Input.jsx | Label support, placeholder, focus glow |
| SlotCard.jsx | Capacity bar, date/time, book button |
| SlotList.jsx | Responsive grid, empty state |
| LoginForm.jsx, RegisterForm.jsx | Form handling |
| ErrorText.jsx | Error styling |

## Features

### Navbar
- Logo on left
- Tab navigation in center (student/admin views)
- User profile + sign out on right
- Sticky positioning

### Student Dashboard
- Search exam slots
- Available Slots tab (responsive grid)
- My Bookings tab
- Slot cards with capacity progress bar
- Book Now CTA button

### Admin Dashboard
- Slots tab with exam management
- Bookings tab
- Audit Log tab
- Card-based table design
- Edit/Delete action buttons
- Status badges (ACTIVE/INACTIVE)
- Create Exam Slot button

### Authentication
- Centered card design
- Gradient background
- Email/password login
- Role-based registration (Student/Admin)
- Demo credentials display
- Error handling

## Component Usage

### Button
```jsx
<Button text="Click Me" variant="primary" size="md" onClick={handleClick} />
```
Props: `variant` (primary/secondary), `size` (sm/md), `disabled`, `icon`

### Input
```jsx
<Input label="Email" type="email" placeholder="user@example.com" value={val} onChange={handleChange} />
```

### SlotCard
```jsx
<SlotCard slot={slotObject} onBook={handleBook} />
```
Displays: exam name, date, time, capacity progress bar, book button

## Responsive Design

| Breakpoint | Device | Changes |
|------------|--------|---------|
| 1400px+ | Desktop | Full navbar, grid layout, tables |
| 768px | Tablet | Compact navbar, single-column slots |
| 480px | Mobile | Hidden tabs, stacked elements, touch-friendly |

## 🔧 CSS Variables (Customization)

Edit `src/index.css` `:root` section:
```css
--color-primary: #6366f1;        /* Main color */
--color-primary-dark: #4f46e5;   /* Hover */
--color-success: #10b981;        /* Success */
--color-danger: #ef4444;         /* Danger */
--color-bg-secondary: #f9fafb;   /* Page background */
--spacing-md: 16px;              /* Base spacing */
--radius-lg: 16px;               /* Card corners */
```

## Class Names Reference

### Layout
- `.navbar` - Top navigation
- `.dashboard` - Main dashboard
- `.student-container`, `.admin-container` - Specific dashboards
- `.slots-grid` - Responsive grid

### Cards & Tables
- `.slot-card` - Slot card container
- `.admin-table-card` - Table wrapper
- `.status-badge` - Status indicator

### Buttons & Forms
- `.btn-primary`, `.btn-secondary` - Button variants
- `.input-group` - Input wrapper
- `.search-input` - Search field
- `.action-btn` - Edit/Delete buttons

### States
- `.status-active` (green), `.status-inactive` (red) - Status colors
- `.empty-state` - No data placeholder
- `.error-text` - Error message

## Deployment

```bash
npm run build
```

Creates optimized production build in `build/` folder, ready for deployment.

## API Integration

The app connects to a Node.js backend with these endpoints:
- Auth: `/auth/login`, `/auth/register`, `/auth/logout`
- Slots: `/slots` (get), `/slots/create` (admin)
- Bookings: `/bookings/book`, `/bookings/my`, `/bookings/cancel`
- Admin: Audit logs, slot management

API client configured in `services/api.js`

## Authentication & Roles

- **Student**: View available slots, book exams, cancel bookings
- **Admin**: Manage slots, view bookings, audit logs
- Tokens stored in localStorage
- Protected routes via `useAuthGuard` hook

## Design Requirements Met

✓ Clean white cards with 16-20px rounded corners
✓ Soft Apple-like shadows throughout
✓ Light gray page backgrounds
✓ Indigo primary color scheme
✓ Professional typography and spacing
✓ Responsive grid layouts
✓ Status badges as pills
✓ Admin tables styled as cards
✓ Student slot grid
✓ Centered auth cards
✓ Professional navbar
✓ Plain CSS (no Tailwind, no external UI libraries)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
