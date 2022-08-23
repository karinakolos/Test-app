import * as React from "react";
import { useState, useEffect } from "react";
import { bookType } from "../types/bookType";
import { bookTypePage } from "../types/bookTypePage";
import { useParams } from "react-router-dom";
import axios from "axios";

export function FetchBookMain() {
  const [card, setCard] = React.useState<bookTypePage | null>();
  let params = useParams();

  React.useEffect(() => {
    async function fetchBook() {
      try {
        const { data }: any = await axios.get(
          `https://api.itbook.store/1.0/books/${params.bookId}`
        );
        setCard(data);
      } catch (error) {}
    }
    fetchBook();
  }, []);
  return card;
}
