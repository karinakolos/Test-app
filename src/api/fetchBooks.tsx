import * as React from "react";
import { useState, useEffect } from "react";
import { bookType } from "../types/bookType";

type ApiResponse = { books: bookType };

export function FetchBooks() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    (async () => {
      let bookData: any | Array<{}>;
      try {
        const response = await fetch("https://api.itbook.store/1.0/new ");
        const book = ((await response.json()) as ApiResponse).books;
        bookData = book;
      } catch (error) {
        console.log(error);
        bookData = [];
      }
      setBooks(bookData);
    })();
  }, []);
  return books;
}
