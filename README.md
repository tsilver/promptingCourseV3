# Prompting for Educators Course Frontend

A modern, responsive web application for educators to learn about prompt engineering and AI tools for education.

## Overview

This Next.js application serves as the frontend for the "Prompting for Educators" course, designed to help teachers with no technical background learn how to effectively use AI prompts to enhance their teaching practice, reduce workload, and improve student engagement.

## Features

- Clean, minimalist design with a focus on clarity and usability
- Responsive layout that works on desktop and mobile devices
- Clear navigation through course units and lessons
- Source references to Obsidian documents for all content
- Consistent styling using Tailwind CSS
- Accessible to educators with no prior AI experience

## Course Structure

The course follows this sequence:

1. Pre-Assessment
2. Course Introduction
3. The TEACH Framework
4. Common Prompting Techniques
5. Common Applications of Prompting for Teachers
6. Conclusion

## Design Specifications

- **Color Palette**:
  - White (#FFFFFF) for backgrounds
  - Navy Blue (#1A202C) for header text and main navigation
  - Slate Gray (#4A5568) for body text and subheadings
  - Teal Blue (#319795) for accent buttons and highlights
  - Light Gray (#EDF2F7) for background cards/sections

- **Typography**:
  - Inter typeface for all text
  - Consistent text sizing for hierarchy

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Navigate to the course_frontend directory
3. Install dependencies:
   ```
   npm install
   ```

### Running the Development Server

```
npm run dev
```

The application will be available at [http://localhost:3001](http://localhost:3001)

### Building for Production

```
npm run build
npm start
```

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Next.js pages and routes
- `/src/styles` - Global styles and Tailwind configuration
- `/public` - Static assets

## Source References

Each page in the course includes references to the original Obsidian documents from which the content was derived, ensuring traceability back to the source material. 