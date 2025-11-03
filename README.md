# Mittal Soham UI Garden - Component Library

This project is a React component library built with TypeScript, Styled Components, and Storybook. It includes a collection of reusable UI components that are responsive and accessible.

## Components Included

- Button
- Label
- Text
- Table (with Header, Row, Cell, Footer)
- Dropdown
- RadioButton
- Img
- HeroImage
- Card

Each component includes:
- TypeScript types
- Styled Components for styling
- Storybook stories with controls
- Unit tests
- Default and disabled states

## Prerequisites

- Node.js (latest version)
- Docker Desktop (for containerized deployment)

## Installation and Setup

### Local Development

1. Clone or download the project
2. Navigate to the project directory: `cd mittal_soham_ui_garden`
3. Install dependencies: `npm install`
4. Start Storybook: `npm run storybook`
5. Open your browser to `http://localhost:6006` to view the component library

### Building for Production

1. Build the Storybook: `npm run build-storybook`
2. The built files will be in the `storybook-static` directory

## Docker Deployment

### Build the Docker Image

```bash
docker build -t mittal_soham_ui_garden .
```

### Run the Container

```bash
docker run -d -p 8083:80 --name mittal_soham_ui_garden_container mittal_soham_ui_garden
```

### Access the Application

Open your browser and navigate to `http://localhost:8083` or `http://127.0.0.1:8083`

## Project Structure

```
mittal_soham_ui_garden/
├── src/
│   └── components/
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── Button.types.ts
│       │   ├── Button.stories.tsx
│       │   ├── Button.tests.tsx
│       │   └── index.ts
│       └── ... (other components)
├── .storybook/
├── storybook-static/ (built files)
├── Dockerfile
├── README.md
└── package.json
```

## Features

- **Responsive Design**: All components are responsive and work on mobile and desktop
- **Accessibility**: Components follow accessibility best practices
- **TypeScript**: Full type safety with TypeScript
- **Styled Components**: CSS-in-JS for component styling
- **Storybook**: Interactive component documentation with controls
- **Testing**: Unit tests for component visibility and disabled states
- **Dockerized**: Easy deployment with Docker

## Component States

All components support:
- Default state
- Disabled state (greyed out, cursor not-allowed)

## Storybook Controls

Each component story includes controls for:
- Text content
- Background color
- Disabled state

## Testing

Run tests with: `npm test`

Tests cover:
- Component visibility
- Disabled state styling changes

