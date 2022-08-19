import * as React from "react";

import { Header } from "../../components/Header/Header";
import { PostCard } from "../../components/Posts/PostCard/PostCard";
import { FetchBooks } from "../../api/fetchBooks";
import {
  WrapperMainContent,
  Wrapper,
  Title,
  PostsContainer,
} from "./MainPage.styled";
import { Foooter } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

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
              <Link key={el.isbn13} to={`/book/${el.isbn13}`}>
                <PostCard book={el} />;
              </Link>
            );
          })}
        </PostsContainer>
      </WrapperMainContent>
      <Foooter />
    </Wrapper>
  );
}
