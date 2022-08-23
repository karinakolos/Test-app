import * as React from "react";
import { Button } from "../ButtonNav/ButtonNav.styled";
import { ButtonCart } from "../ButtonToCart/ButtonToCart";
import {
  Wrapper,
  Title,
  Subtitle,
  Form,
  InputEmail,
  BtbSubscibe,
} from "./NewsLatter.styled";
export function NewsLatter() {
  return (
    <Wrapper>
      <Title>Subscribe to Newsletter</Title>
      <Subtitle>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </Subtitle>
      <Form>
        <InputEmail>
          <input type="email" placeholder="Your email" />
        </InputEmail>
        <BtbSubscibe>
          <ButtonCart title="Subscribe" />
        </BtbSubscibe>
      </Form>
    </Wrapper>
  );
}
