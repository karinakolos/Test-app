import * as React from "react";

import { Header } from "../../components/Header/Header";
import { PostCard } from "../../components/Posts/PostCard/PostCard";
import { FetchBooks } from "../../api/fetchBooks";
import {
  WrapperMainContent,
  Wrapper,
  Title,
  PostsContainer,
  StyledLink,
} from "./MainPage.styled";
import { Foooter } from "../../components/Footer/Footer";

export function MainPage() {
  let books = FetchBooks();
  return (
    <Wrapper>
      <Header />
      <WrapperMainContent>
        <Title>New Releases Books</Title>
        <PostsContainer>
          {books.map((el: any) => {
            return (
              <StyledLink key={el.isbn13} to={`/book/${el.isbn13}`}>
                <PostCard book={el} />
              </StyledLink>
            );
          })}
        </PostsContainer>
      </WrapperMainContent>
      <Foooter />
    </Wrapper>
  );
}
