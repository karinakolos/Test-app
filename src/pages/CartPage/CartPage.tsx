import * as React from "react";

import { Header } from "../../components/Header/Header";

import { Wrapper, Title } from "./CartPage.styled";
import { Foooter } from "../../components/Footer/Footer";
import { ButtonToMainPage } from "../../components/ButtonToMainPage/ButtonToMainPage";

export function CartPage() {
  return (
    <div>
      <Header />

      <Wrapper>
        <ButtonToMainPage />
        <Title>Your cart</Title>
      </Wrapper>
      <Foooter />
    </div>
  );
}
