import * as React from "react";
import { bookType } from "../../../types/bookType";
import {
  PostWrapper,
  PostImage,
  PostName,
  PostAuthor,
  Price,
  Rating,
  WrapperInfo,
} from "./PostCard.styled";

export function PostCard({ book }: { book: bookType }): JSX.Element {
  return (
    <PostWrapper>
      <PostImage>
        <img src={book.image} alt="" />
      </PostImage>
      <PostName>{book.title} </PostName>
      <PostAuthor>{book.subtitle}</PostAuthor>
      <WrapperInfo>
        <Price>{book.price}</Price>
        <Rating>5.0</Rating>
      </WrapperInfo>
    </PostWrapper>
  );
}
