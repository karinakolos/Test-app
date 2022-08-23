import * as React from "react";
import { WrapperButton, ButtonLog } from "./ButtonToCart.styled";

export function ButtonCart({ title }: { title: string }) {
  return (
    <WrapperButton>
      <ButtonLog>{title}</ButtonLog>
    </WrapperButton>
  );
}
