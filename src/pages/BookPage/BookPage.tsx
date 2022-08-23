import * as React from "react";

import { Header } from "../../components/Header/Header";

import {
  Wrapper,
  Title,
  WrapperPhoto,
  WrapperInfo,
  WrapperInfoRight,
  Price,
  Pating,
  PathOne,
  PathTwo,
  ButtonLike,
  Description,
  Desc,
} from "./BookPage.styled";
import { Foooter } from "../../components/Footer/Footer";

import { ButtonCart } from "../../components/ButtonToCart/ButtonToCart";
import { FavoriteIcon } from "../../components/Posts/PostCard/FavoriteIcon";
import { NewsLatter } from "../../components/News/NewsLatter";
import { FetchBookMain } from "../../api/fetchBook";
import { ButtonToMainPage } from "../../components/ButtonToMainPage/ButtonToMainPage";

export function BookPage() {
  let card = FetchBookMain();
  if (!card) {
    return (
      <div>
        <Header />
        <Title>Loading...</Title>
        <Foooter />
      </div>
    );
  }

  console.log(card);
  return (
    <div>
      <Header />
      <ButtonToMainPage />
      <Title>{card.title}</Title>
      <Wrapper>
        <WrapperPhoto>
          <img src={card.image} alt="Image" />
          <ButtonLike>
            <FavoriteIcon />
          </ButtonLike>
        </WrapperPhoto>
        <WrapperInfo>
          <WrapperInfoRight>
            <Price>{card.price}</Price>
            <Pating>{card.rating}</Pating>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne>Authors:</PathOne>
            <PathTwo>{card.authors}</PathTwo>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne>Publisher:</PathOne>
            <PathTwo>{card.publisher}</PathTwo>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne>Language:</PathOne>
            <PathTwo>English</PathTwo>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne>Year:</PathOne>
            <PathTwo>{card.year}</PathTwo>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne>Pages:</PathOne>
            <PathTwo>{card.pages}</PathTwo>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne></PathOne>
            <PathTwo>
              <a href={card.url} target="_blank">
                More detailse
              </a>
            </PathTwo>
          </WrapperInfoRight>
          <ButtonCart title="add to cart" />
        </WrapperInfo>
      </Wrapper>
      <Description>Description</Description>
      <Desc>{card.desc}</Desc>
      <NewsLatter />
      <Foooter />
    </div>
  );
}
