
# Movies Library

A web application to explore and search for movies using the imdbapi.dev API. Built with React and Vite, it features dynamic navigation, movie search, detailed views, and a highlight carousel.

🎬 **[Live Demo](https://roobertoAlves.github.io/movie_lib)** - Deployed on GitHub Pages

## Introduction

Movies Library lets you search for movies, view detailed information, and browse popular genres. The interface is modern, responsive, and uses skeletons for smooth data loading.

## Main libraries used

- [React](https://react.dev/) - Main library for building the UI
- [Vite](https://vitejs.dev/) - Fast build and development tool
- [React Router DOM](https://reactrouter.com/) - Page navigation
- [React Icons](https://react-icons.github.io/react-icons/) - SVG icons
- [React Loading Skeleton](https://github.com/dvtng/react-loading-skeleton) - Skeletons for loading states
- [ESLint](https://eslint.org/) - Code quality and linting
- [gh-pages](https://github.com/tschaub/gh-pages) - GitHub Pages deployment

## How to download and run the project

1. **Clone the repository:**
	```powershell
	git clone https://github.com/roobertoAlves/movie_lib.git
	cd movie_lib
	```
2. **Install dependencies:**
	```powershell
	npm install
	```
3. **Configure the `.env` file:**
	- Copy `.env.example` to `.env`:
	  ```powershell
	  cp .env.example .env
	  ```
	- Get your API key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api)
	- Edit the `.env` file and replace `YOUR_API_KEY_HERE` with your actual API key:
	  ```env
	  VITE_API_KEY=api_key=your_actual_api_key_here
	  VITE_API=https://api.themoviedb.org/3/movie/
	  VITE_SEARCH=https://api.themoviedb.org/3/search/movie
	  VITE_IMG=https://image.tmdb.org/t/p/w500/
	  ```

4. **Run the project in development mode:**
	```powershell
	npm run dev
	```
5. **Access in your browser:**
	- Open [http://localhost:5173](http://localhost:5173)

## Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions:

### Automated Deployment (Recommended)

1. **Configure GitHub Secrets:**
   - Go to your repository on GitHub
   - Navigate to Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VITE_API_KEY`: Your TMDB API key (format: `api_key=your_key_here`)
     - `VITE_API`: `https://api.themoviedb.org/3/movie/`
     - `VITE_SEARCH`: `https://api.themoviedb.org/3/search/movie`
     - `VITE_IMG`: `https://image.tmdb.org/t/p/w500/`

2. **Automatic deployment:**
   - Push your changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - The workflow injects the environment variables during build time

### Manual Deployment (Alternative)

1. **Build and deploy locally:**
	```powershell
	npm run deploy
	```
	⚠️ **Note**: This method requires environment variables to be available locally

The live application is available at: [https://roobertoAlves.github.io/movie_lib](https://roobertoAlves.github.io/movie_lib)

## Folder structure

- `src/pages` - Main pages (Home, Movie, Search)
- `src/components` - Reusable components (Navbar, MovieCard, Carousel, Skeletons)
- `src/assets` - Images and icons
- `src/styles` - Global styles and CSS variables

## Notes

- Make sure to get a valid API key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api) to access movie data.
- The project uses environment variables to easily switch endpoints and keys.
- The `.env` file is ignored by Git for security reasons - never commit API keys!
- Use the `.env.example` file as a template for your local environment setup.

---
Developed by Jose Roberto Damasceno
