import * as React from "react";

import { Header } from "../../components/Header/Header";

import { Wrapper, Title } from "./BookPage.styled";
import { Foooter } from "../../components/Footer/Footer";
import { bookTypePage } from "../../types/bookTypePage";
import { useParams } from "react-router-dom";
import axios from "axios";

export function BookPage() {
  const [card, setCard] = React.useState<bookTypePage | null>();
  let params = useParams();
  console.log(params);

  React.useEffect(() => {
    async function fetchBook() {
      try {
        const { data }: any = await axios.get(
          `https://api.itbook.store/1.0/books/${params}`
        );
        setCard(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBook();
  }, []);
  if (!card) {
    return <div>Загрузка ...</div>;
  }
  console.log(card);
  return (
    <div>
      <Header />
      <Wrapper>
        <Title>sss</Title>
      </Wrapper>
      <Foooter />
    </div>
  );
}
