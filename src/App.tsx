import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "./enums/router";

import { AppWrapper } from "./App.styled";
import { MainPage } from "./pages/MainPage/MainPage";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { RegistrationPage } from "./pages/RegistrarionPage/RegistrationPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { BookPage } from "./pages/BookPage/BookPage";

export function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.BookPage} element={<BookPage />} />
        <Route path={AppRoute.Settings} element={<SettingsPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Reg} element={<RegistrationPage />} />
        <Route path={AppRoute.Favorites} element={<FavoritesPage />} />
        <Route path={AppRoute.Basket} element={<CartPage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
