import * as React from "react";
import { bookType } from "../../../types/bookType";
import { BasketIcon } from "./BasketIcon";
import {
  PostWrapper,
  PostImage,
  PostName,
  PostAuthor,
  Price,
  WrapperInfo,
  WrapperMain,
  ButtonBasket,
  WrapperButton,
} from "./PostCard.styled";
import { FavoriteIcon } from "./FavoriteIcon";

export function PostCard({ book }: { book: bookType }): JSX.Element {
  function PriceFree(pr: any) {
    if (pr == "$0.00") {
      return "Free";
    } else return pr;
  }
  return (
    <PostWrapper>
      <WrapperMain>
        <PostImage>
          <img src={book.image} alt="" />
        </PostImage>
        <PostName>{book.title} </PostName>
        <PostAuthor>{book.subtitle}</PostAuthor>
      </WrapperMain>
      <WrapperInfo>
        <Price>{PriceFree(book.price)}</Price>
        <WrapperButton>
          <ButtonBasket>
            <FavoriteIcon />
          </ButtonBasket>
          <ButtonBasket>
            <BasketIcon />
          </ButtonBasket>
        </WrapperButton>
      </WrapperInfo>
    </PostWrapper>
  );
}
