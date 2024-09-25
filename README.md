# Rob Rich Artist Website

Welcome to the official digital space of the artist & musician Rob Rich. This web application showcases a media player, performance dates, a media gallery, an artist biography, fan club sign-up, contact information, news, and merchandise sales.

## Project Overview

The website is built with React and Redux in TypeScript, following modern frontend development practices. It offers a seamless experience for users to explore the artist’s content, interact with fan services, and make purchases.

## Table of Contents
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
The project uses several libraries and dependencies, as listed in the package.json:

- React for UI development
- Redux & Redux Thunk for state management
- React Router for navigation
- Material UI for design components
- Styled Components and Emotion for CSS-in-JS styling
- Axios for API requests
- React Google Recaptcha for secure forms
- React Hook Form for handling form inputs
- React Helmet for SEO optimization

For full details of the project's dependencies, refer to the package.json file.

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
- tsconfig.json: Defines the TypeScript configuration for the project​(tsconfig).
- package.json: Manages project dependencies, scripts, and metadata​(package).

## Running the Application

### Development Environment
To start the application in a development environment:
```
npm start
```
This will run the app in development mode, accessible at http://localhost:3000/.

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

Make sure to configure the homepage field in package.json for the correct URL (currently set to https://www.robrich.band/).

## Contributing
We welcome contributions to improve this project! Please follow the steps below:

1. Fork the repository.
2. Create a feature branch (git checkout -b feature-branch).
3. Commit your changes (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE.md file for details.

## Contact
For any questions or support, please reach out:

Tyler Pritchard
[GitHub](https://www.github.com/tyler-pritchard)
[LinkedIn](https://www.linkedin.com/in/tyler-pritchard)