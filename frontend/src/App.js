import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ArtisansPage from "./pages/ArtisansPage";
import ArtisanDetail from "./pages/ArtisanDetail";
import NotFound from "./pages/NotFound";
import MentionsLegales from "./pages/MentionsLegales";
import DonneesPersonnelles from "./pages/DonneesPersonnelles";
import Accessibilite from "./pages/Accessibilite";
import Cookies from "./pages/Cookies";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artisans" element={<ArtisansPage />} />
              <Route path="/artisans/:id" element={<ArtisanDetail />} />
              <Route
                path="/categories"
                element={
                  <div className="container py-5">
                    <h1>Page catégories (à implémenter)</h1>
                  </div>
                }
              />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route
                path="/donnees-personnelles"
                element={<DonneesPersonnelles />}
              />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibilite" element={<Accessibilite />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
