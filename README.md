# Neo Auth0 React App

This is a React + TypeScript app with Auth0 authentication, a sidebar, and a topbar UI inspired by Figma design.

## Features
- Sidebar and topbar navigation
- All pages protected by Auth0 authentication
- User info (name, avatar) from Auth0 in sidebar
- Modern UI with Material-UI (MUI)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Auth0:**
   - Create an Auth0 application at https://auth0.com/
   - Copy your domain and client ID into `.env`

3. **Start the app:**
   ```bash
   npm start
   ```

4. **Login:**
   - You will be redirected to Auth0 to log in. After login, your name and avatar will appear in the sidebar.

## Project Structure
- `src/components/Sidebar.tsx` — Sidebar navigation
- `src/components/Topbar.tsx` — Topbar
- `src/auth/PrivateRoute.tsx` — Route protection
- `src/pages/` — Empty page components for each menu item
- `src/theme.ts` — MUI theme (optional)

## Customization
- Add your own content to the page components in `src/pages/`.
- Adjust the theme in `src/theme.ts`.

---

**Built with React, TypeScript, MUI, Auth0, and React Router.** 