
# Movies Library

A web application to explore and search for movies using the imdbapi.dev API. Built with React and Vite, it features dynamic navigation, movie search, detailed views, and a highlight carousel.

## Introduction

Movies Library lets you search for movies, view detailed information, and browse popular genres. The interface is modern, responsive, and uses skeletons for smooth data loading.

## Main libraries used

- [React](https://react.dev/) - Main library for building the UI
- [Vite](https://vitejs.dev/) - Fast build and development tool
- [React Router DOM](https://reactrouter.com/) - Page navigation
- [React Icons](https://react-icons.github.io/react-icons/) - SVG icons
- [React Loading Skeleton](https://github.com/dvtng/react-loading-skeleton) - Skeletons for loading states
- [ESLint](https://eslint.org/) - Code quality and linting

## How to download and run the project

1. **Clone the repository:**
	```powershell
	git clone https://github.com/your-username/movies_library.git
	cd movies_library
	```
2. **Install dependencies:**
	```powershell
	npm install
	```
3. **Configure the `.env` file:**
	- Rename `.env.example` to `.env` (if it exists) or edit the current `.env` file.
	- Add your imdbapi.dev API key:
	  ```env
	  VITE_API_KEY=your_imdbapi_key
	  VITE_API=https://imdbapi.dev/api/v1/movie/
	  VITE_SEARCH=https://imdbapi.dev/api/v1/search/movie
	  VITE_IMG=https://imdbapi.dev/images/
	  ```
4. **Run the project in development mode:**
	```powershell
	npm run dev
	```
5. **Access in your browser:**
	- Open [http://localhost:5173](http://localhost:5173)

## Folder structure

- `src/pages` - Main pages (Home, Movie, Search)
- `src/components` - Reusable components (Navbar, MovieCard, Carousel, Skeletons)
- `src/assets` - Images and icons
- `src/styles` - Global styles and CSS variables

## Notes

- Make sure to get a valid API key from [imdbapi.dev](https://imdbapi.dev/) to access movie data.
- The project uses environment variables to easily switch endpoints and keys.

---
Developed by Jose Roberto Damasceno
