import * as React from "react";
import { useState, useEffect } from "react";
import { bookType } from "../../types/bookType";

import { PostCard } from "./PostCard/PostCard";
import { PostsContainer } from "./Posts.styled";

type ApiResponse = { books: bookType };

export function Posts() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    (async () => {
      let bookData: any | Array<{}>;
      try {
        const response = await fetch(
          "https://api.itbook.store/1.0/search/mongodb "
        );
        const book = ((await response.json()) as ApiResponse).books;
        const bookData = book;
      } catch (error) {
        console.log(error);
        bookData = [];
      }
      setBooks(bookData);
    })();
  }, []);

  return (
    <PostsContainer>
      {books.map((el: any) => {
        return <PostCard key={el.isbn13} book={el} />;
      })}
      {/* {new Array(10).fill(0).map((_, index) => (
        <PostCard key={index} />
      ))} */}
    </PostsContainer>
  );
}
