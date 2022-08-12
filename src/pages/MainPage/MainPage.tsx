import * as React from "react";

import { Header } from "../../components/Header/Header";
import { Posts } from "../../components/Posts/Posts";

import { WrapperMainContent, Wrapper, Title } from "./MainPage.styled";

export function MainPage() {
  return (
    <Wrapper>
      <Header />
      <WrapperMainContent>
        <Title>New Releases Books</Title>
        <Posts />
      </WrapperMainContent>
    </Wrapper>
  );
}
