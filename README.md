# Rob Rich Artist Website

Welcome to the official digital space of the artist & musician Rob Rich. This web application showcases a media player, performance dates, a media gallery, an artist biography, fan club sign-up, contact information, news, and merchandise sales.

## Project Overview

The website is built with React and Redux in TypeScript, following modern frontend development practices. It offers a seamless experience for users to explore the artist’s content, interact with fan services, and make purchases.

## Table of Contents

[Rob Rich Artist Website](#rob-rich-artist-website)
- [Rob Rich Artist Website](#rob-rich-artist-website)
  - [Project Overview](#project-overview)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Dependencies](#dependencies)
    - [Installing](#installing)
  - [Project Structure](#project-structure)
    - [Key Configuration Files:](#key-configuration-files)
  - [Running the Application](#running-the-application)
    - [Development Environment](#development-environment)
    - [Production Build](#production-build)
    - [Deployment](#deployment)
  - [Lighthouse Integration](#lighthouse-integration)
    - [Setup](#setup)
    - [Usage](#usage)
  - [Timeline Feature](#timeline-feature)
    - [Description](#description)
    - [Usage and Configuration](#usage-and-configuration)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Getting Started
To get started with this project, follow the instructions below for installation and setup.

### Prerequisites
Ensure you have the following installed:

- Node.js (>= v14.x.x)
- npm or yarn
- TypeScript (>= v4.5)

### Dependencies
The project uses several libraries and dependencies, as listed in the ```package.json```:

- React for UI development
- Redux & Redux Thunk for state management
- React Router for navigation
- Material UI for design components
- Styled Components and Emotion for CSS-in-JS styling
- Axios for API requests
- React Google Recaptcha for secure forms
- React Hook Form for handling form inputs
- React Helmet for SEO optimization

For full details of the project's dependencies, refer to the ```package.json``` file.

### Installing
1. Clone the repository:
    ```
    git clone https://github.com/tyler-pritchard/rrsite.git
    ```
2. Navigate into the project directory:
    ```
    cd rrsite
    ```
3. Install dependencies:
    ```
    npm install
    ```
## Project Structure
The project is structured as follows:
```
rrsite/
├── README.md
├── package.json
├── tsconfig.json
├── src/
│   ├── assets/              # Static assets (images, videos)
│   ├── components/          # Reusable components (header, footer, etc.)
│   │   ├── footer/
│   │   ├── header/
│   ├── pages/               # Different pages (home, about, etc.)
│   ├── store/               # Redux store, actions, and reducers
│   │   ├── actions/
│   │   ├── reducers/
│   ├── utils/               # Utility functions (e.g., validation)
│   ├── App.tsx              # Main application component
│   ├── globalStyles.tsx     # Global styles
│   ├── axiosConfig.ts       # Axios configuration for API calls
│   └── index.tsx            # Entry point of the application
```

### Key Configuration Files:
- ```tsconfig.json```: Defines the TypeScript configuration for the project[​(tsconfig)](./tsconfig.json).
- ```package.json```: Manages project dependencies, scripts, and metadata[​(package)](./package.json).

## Running the Application

### Development Environment
To start the application in a development environment:
```
npm start
```
This will run the app in development mode, accessible at ```http://localhost:3000/```.

### Production Build
To create an optimized production build:
```
npm run build
```
The build is minified and the filenames include hashes for cache busting.

### Deployment
You can deploy the application using GitHub Pages:
```
npm run deploy
```

Make sure to configure the ```homepage``` field in ```package.json``` for the correct URL (currently set to ```https://www.robrich.band/```).

## Lighthouse Integration

### Setup

Lighthouse CI has been integrated into the project to monitor and improve the performance, accessibility, best practices, and SEO of the application. The setup includes:

- A ``lhci-setup.js`` script to ensure ``globalThis.fetch`` is available in the node environment.
- A ``lighthouserc.json`` configuration file with settings for testing local and production environments.

### Usage
1. Install Lighthouse CI:
```
npm install -g @lhci/cli
```
2. Run the Lighthouse CI tests:
```
npm run lhci:autorun
```

This will:

- Start a local server.
- Run Lighthouse tests on specified URLs.
- Provide a detailed report for performance, accessibility, best practices, and SEO.

3. Reports:

- Reports are uploaded to temporary public storage and include detailed metrics for:
  - Page load performance.
  - Compliance with accessibility standards.
  - Adherence to SEO best practices.

4. Configuration:

- The ``lighthouserc.json`` file defines thresholds for various metrics. For example:
```
"assert": {
  "assertions": {
    "categories:performance": ["error", { "minScore": 0.9 }],
    "categories:seo": ["error", { "minScore": 0.9 }]
  }
}
```

- Adjust these values if needed for development.

## Timeline Feature

### Description

The **Timeline** feature, accessible under the "History" section, provides a detailed view of Rob Rich’s journey and accomplishments. Built using Knight Lab’s Timeline.js library, it dynamically imports content from a Google Sheet, displaying text, images, and audio clips hosted on Soundcloud.

### Usage and Configuration
1. **Embedding the Timeline**: The timeline is embedded using an iframe that connects to Knight Lab’s external service, which reads directly from a designated Google Sheet. Each row in the sheet represents an event on the timeline, where you can define:

- **Date**: Date of the event
- **Headline**: Title of the event
- **Text**: Description of the event
- **Media URL**: Links to images or audio hosted on Soundcloud, which users can play directly within the timeline
  
2. **Updating the Timeline Content:**

- Modify the Google Sheet associated with the timeline.
- Add new rows to include additional events or edit existing rows to update content.
- Ensure that images are publicly accessible URLs (we recommend Google Drive or other free hosting platforms) and that audio files are hosted via Soundcloud for compatibility.

3. **Troubleshooting Common Issues**:

- If the timeline is not loading or displaying correctly, verify the Content Security Policy (CSP) settings in `vercel.json` and `server.js`. Ensure the following directives are present:
  - `"frame-src"` allows both `https://cdn.knightlab.com` and `https://soundcloud.com`.
- If an audio or image link appears broken, ensure the link is public and formatted correctly in the Google Sheet.
- Make a copy of the spreadsheet template at `https://timeline.knightlab.com/#make` and follow the instructions to create your own custome timeline.

## Contributing
We welcome contributions to improve this project! Please follow the steps below:

1. Fork the repository.
2. Create a feature branch (```git checkout -b feature-branch```).
3. Commit your changes (```git commit -m 'Add new feature'```).
4. Push to the branch (```git push origin feature-branch```).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact
For any questions or support, please reach out:

Tyler Pritchard
[GitHub](https://www.github.com/tyler-pritchard)
[LinkedIn](https://www.linkedin.com/in/tyler-pritchard)