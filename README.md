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

4. Open your browser and visit the URL provided by the Vite development server (e.g., `http://localhost:5174/`) to view the website. The specific URL will be displayed in the terminal after running `npm run dev`. Use the `--host` option if you need to expose the server on your network.

## Project Setup

This template should help get you started developing with Vue 3 in Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

### Install dependencies

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run dev
```

### Compile and Minify for Production

```bash
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```bash
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```bash
npm run lint
```

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
