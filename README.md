# AI Avatar Dashboard

<p align="center">
  <img src="public/logo.webp" alt="DCverse Logo" width="150" />
</p>

A modern web application for managing AI-generated avatars, built with Next.js and Tailwind CSS.

## 📋 Overview

This project is a simple assignment project for DCverse. It provides an intuitive interface for creating and managing digital avatar profiles. Users can create multiple AI avatars with different personas, social media presences, and content niches.

## ✨ Features

- View and manage your AI avatars
- Create new avatars with detailed configuration
- Customize avatar images (upload or drag-and-drop)
- Set social media platforms and demographics
- Responsive design works on desktop and mobile
- Light/dark mode support

## 🛠️ Technologies

- **Frontend Framework:** Next.js
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **HTTP Client:** Axios
- **Fonts:** Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-dashboard-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── globals.css     # Global CSS styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Main page component
│
├── components/         # React components
│   ├── AvatarCard.jsx  # Individual avatar card
│   ├── AvatarList.jsx  # List of avatars
│   ├── CreateAvatarModal.jsx  # Modal for creating avatars
│   └── Header.jsx      # Application header
│
└── public/             # Public assets
    └── logo.webp       # Logo image
```

## 🔧 Development

- The application uses React's useState and useEffect hooks for state management
- Avatars are currently fetched from a mock API (reqres.in)
- Custom scrollbar styling is applied for a better user experience

## 🎨 Customization

You can customize the application by:
- Modifying the color scheme in `globals.css`
- Adding new avatar properties in CreateAvatarModal
- Extending the AvatarCard component with additional features

## 📱 Responsive Design

The application is fully responsive:
- Desktop: Full featured interface
- Mobile: Optimized layout with collapsible sections
