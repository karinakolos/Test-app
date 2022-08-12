import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "./enums/router";

import { AppWrapper } from "./App.styled";
import { MainPage } from "./pages/MainPage/MainPage";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage2";
import { RegistrationPage } from "./pages/RegistrarionPage/RegistrationPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

export function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Settings} element={<SettingsPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Reg} element={<RegistrationPage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
