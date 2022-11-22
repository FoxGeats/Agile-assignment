import React, { lazy, Suspense } from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";

import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import Login from "./pages/Login";

const MoviePage = lazy(() => import("./pages/movieDetailsPage"));

const PeoplePage = lazy(() => import("./pages/peoplePage"));
const PersonDetailsPage = lazy(() => import("./pages/personDetailsPage"));
const TopRatedMoviesPage = lazy(() => import("./pages/topRatedMoviesPage"));
const TVPage = lazy(() => import("./pages/TVPage"));
const TVDetailPage = lazy(() => import("./pages/TVDetailPage"));
const ResetPage = lazy(() => import("./pages/resetPage"));
const RegisterPage = lazy(() => import("./pages/registerPage"));

const LogoutPage = lazy(() => import("./pages/logoutPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <SiteHeader />
    <MoviesContextProvider>
    <Suspense fallback={<h1>Loading page</h1>}>
    <Routes>
    <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
      <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
      <Route path="/movies/people" element={<PeoplePage />} />
      <Route path="/persons/:id" element={<PersonDetailsPage />} />
      <Route path="/TV/popular" element={<TVPage />} />
      <Route path="/TV/:id" element={<TVDetailPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/reset" element={<ResetPage />} />
      <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
      <Route path="/pages/logout" element={<LogoutPage />} />
      <Route path="/pages/login" element={<Login />} />
    </Routes>
    </Suspense>
    </MoviesContextProvider>
  </BrowserRouter>
  <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(  document.getElementById("root") )
rootElement.render(<App />);