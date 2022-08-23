import * as React from "react";

import { Header } from "../../components/Header/Header";

import { Wrapper, Title } from "./FavoritesPage.styled";
import { Foooter } from "../../components/Footer/Footer";
import { ButtonToMainPage } from "../../components/ButtonToMainPage/ButtonToMainPage";

export function FavoritesPage() {
  return (
    <div>
      <Header />

      <Wrapper>
        <ButtonToMainPage />
        <Title>Favorites</Title>
      </Wrapper>
      <Foooter />
    </div>
  );
}
