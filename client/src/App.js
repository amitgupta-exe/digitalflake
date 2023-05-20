
import './App.css';

import "./styles/styles.css"

// import { history } from "./helpers/history";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CategoriesPage from './pages/Categories/CategoriesPage';
import ProductsPage from './pages/Products/ProductsPage';
import NotAvailabePage from './pages/NotAvailabePage';
import AddNewCategory from './pages/Categories/AddNewCategory';
import Header from './components/Header';
import { useState } from 'react';
import LeftMenu from './components/LeftMenu';

function App() {


  return (
    <main className='app'>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/home" element={[ <HomePage />]} />
          <Route exact path="/" element={<LoginPage />} />


          <Route exact path="/categories" element={[ <CategoriesPage />]} />
          <Route exact path="/products" element={[ <ProductsPage />]} />

          <Route exact path="*" element={<NotAvailabePage />} />
        </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App;
