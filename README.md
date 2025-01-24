# LAIHC Website

This repository contains the code for the Latin American HCI Community (LAIHC) website. The main application is built using Vue.js and is located in the `laihc-website` directory.

## Structure

### Root Directory
- `README.md`: This file, which provides an overview of the repository.
- `LICENSE`: The license under which the code is distributed.
- `laihc-website/`: The directory containing the Vue.js application.

### `laihc-website/` Directory
This directory contains the full source code for the LAIHC website. The key files and folders include:
- `src/`: Source code for the application, including components, views, and assets.
- `public/`: Static files and the base `index.html`.
- `package.json`: Lists dependencies and scripts for building and running the application.
- `node_modules/`: Automatically generated folder for dependencies (not included in the repository).

## How to Run the Application

1. Navigate to the application directory:
   ```bash
   cd laihc-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run serve
   ```

4. Open your browser and visit `http://localhost:8080` to view the website.

## Project Setup

The following commands can be used to set up and manage the project:

### Install dependencies
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run serve
```

### Compiles and minifies for production
```bash
npm run build
```

### Lints and fixes files
```bash
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deployment

To build the application for production:

1. Navigate to the application directory:
   ```bash
   cd laihc-website
   ```

2. Build the application:
   ```bash
   npm run build
   ```

3. The production-ready files will be in the `dist/` directory inside `laihc-website`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
