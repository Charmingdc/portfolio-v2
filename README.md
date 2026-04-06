# Developer Portfolio & Blog

## Overview

This project is a personal website designed to showcase my work, share my thoughts on technology, and provide a central hub for my online presence. It helps me present my skills and projects to the world in an organized and engaging way, allowing visitors to easily learn about what I do and read my articles.

## Features

- **Dynamic Blog**: Browse a collection of articles and dive into individual posts with rich content.
- **Project Showcase**: Explore a dedicated section highlighting various projects with descriptions and links to live demos or source code.
- **About Me Section**: Learn about my background, the tools I commonly use, and my professional interests.
- **Responsive Design**: Enjoy a seamless experience across different devices, from desktops to mobile phones.
- **Theme Toggling**: Switch between light and dark modes to suit your viewing preference.
- **Smooth Page Transitions**: Experience fluid navigation between different sections of the site.

## Getting Started

To get this portfolio up and running on your local machine, follow these steps:

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Charmingdc/portfolio-v2.git
    cd portfolio-v2
    ```
2.  **Install Dependencies**:
    This project uses `npm` for package management.
    ```bash
    npm install
    ```

### Environment Variables

This application does not require any custom environment variables to run.

## Usage

Once you've installed the dependencies, you can start the development server, build the project, or preview the production build.

### Development Server

To start the development server with hot module reloading:

```bash
npm run dev
```

Open your browser to `http://localhost:5173` (or the port specified in your console).

### Building the Project

To build the project for production:

```bash
npm run build
```

This will compile the application into static assets in the `build` directory.

### Previewing the Build

After building, you can preview the production version locally:

```bash
npm run preview
```

This will start a local server to serve the built application.

## API Documentation

This project uses SvelteKit's server-side rendering (SSR) capabilities, where data fetching happens on the server before the page is delivered to the client. The following describes the server-side data loaders that supply content to the application.

### Base URL

The base URL for these server-side data loaders is relative to the application's root. For local development, this is typically:
`http://localhost:5173`

### Endpoints

#### GET `/blog`

Retrieves a list of all blog posts available on the site. This endpoint is primarily for SvelteKit's internal server-side data loading.

**Request**:
No request body or query parameters are needed.

**Response**:

```json
{
	"posts": [
		{
			"slug": "hello-there",
			"data": {
				"title": "Welcome to my space",
				"description": "My first blog post, just introducing myself.",
				"date": "2026-03-4",
				"order": 1,
				"tags": ["intro", "welcome"]
			}
		}
	]
}
```

**Errors**:

- No specific error responses are returned directly by this loader; issues would typically result in an empty `posts` array or a SvelteKit internal error page.

#### GET `/blog/[slug]`

Retrieves the details and content of a single blog post based on its unique slug. This endpoint is primarily for SvelteKit's internal server-side data loading.

**Request**:
The `slug` parameter is part of the URL path (e.g., `/blog/hello-there`). No request body or query parameters are needed.

**Response**:

```json
{
	"post": {
		"slug": "hello-there",
		"data": {
			"title": "Welcome to my space",
			"description": "My first blog post, just introducing myself.",
			"date": "2026-03-4",
			"order": 1,
			"tags": ["intro", "welcome"]
		},
		"content": "Hi, I'm **Adebayo Muis** but mostly recongnized as **Charmingdc** in the developers space.\n\nI'm currently a frontend engineer who priotize intentional designs and functional code over just \"this is beautiful UIs\" that doesn't resonate with users.\n"
	}
}
```

**Errors**:

- 404: If a blog post with the provided `slug` cannot be found.

## Technologies Used

| Technology               | Description                                          | Link                                                           |
| :----------------------- | :--------------------------------------------------- | :------------------------------------------------------------- |
| **SvelteKit**            | A web framework for building performant apps.        | [SvelteKit](https://kit.svelte.dev/)                           |
| **Svelte**               | A reactive component framework.                      | [Svelte](https://svelte.dev/)                                  |
| **TypeScript**           | A strongly typed superset of JavaScript.             | [TypeScript](https://www.typescriptlang.org/)                  |
| **Node.js**              | JavaScript runtime for server-side operations.       | [Node.js](https://nodejs.org/en/)                              |
| **Vite**                 | Next-generation frontend tooling.                    | [Vite](https://vitejs.dev/)                                    |
| **Tailwind CSS**         | A utility-first CSS framework.                       | [Tailwind CSS](https://tailwindcss.com/)                       |
| **PostCSS**              | A tool for transforming CSS with JavaScript.         | [PostCSS](https://postcss.org/)                                |
| **Autoprefixer**         | PostCSS plugin to parse CSS and add vendor prefixes. | [Autoprefixer](https://github.com/postcss/autoprefixer)        |
| **skriplet**             | Content collection manager for SvelteKit.            | [skriplet](https://www.npmjs.com/package/skriplet)             |
| **svelte-motion**        | Declarative animations for Svelte.                   | [svelte-motion](https://www.npmjs.com/package/svelte-motion)   |
| **@charmingdc/romanify** | Roman numeral converter.                             | [romanify](https://www.npmjs.com/package/@charmingdc/romanify) |
| **Hugeicons**            | Free and open-source icon library.                   | [Hugeicons](https://hugeicons.com/)                            |

## Author Info

- **Name**: Adebayo Muis (Charmingdc)
- **GitHub**: [@Charmingdc](https://github.com/Charmingdc)
- **X (formerly Twitter)**: [@Charmingdc01](https://x.com/Charmingdc01)
- **Email**: charmingdc002@gmail.com
- **Myhappr**: [@muis](https://myhappr.xyz/muis)

## Badges

![Svelte](https://img.shields.io/badge/svelte-%23F74B00.svg?style=for-the-badge&logo=svelte&logoColor=white)
![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
