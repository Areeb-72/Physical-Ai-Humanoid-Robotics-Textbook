# Quickstart

**Date**: 2025-12-28
**Plan**: [plan.md](./plan.md)

This document provides essential commands for setting up and running the textbook project locally.

## Prerequisites

- **Node.js**: Version 18.x or higher.
- **npm** or **yarn**: Package manager for Node.js.

## Local Development

1.  **Clone the repository**:
    ```bash
    git clone [repository-url]
    cd [repository-name]
    ```

2.  **Install dependencies**:
    This will install Docusaurus and all other required packages.
    ```bash
    npm install
    ```
    *or*
    ```bash
    yarn install
    ```

3.  **Run the development server**:
    This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
    ```bash
    npm run start
    ```
    *or*
    ```bash
    yarn start
    ```
    The site will be available at `http://localhost:3000`.

## Build for Production

This command generates static content into the `build` directory and can be served using any static content hosting service.
```bash
npm run build
```
*or*
```bash
yarn build
```
