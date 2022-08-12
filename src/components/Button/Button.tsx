import * as React from "react";
import { WrapperButton, ButtonLog } from "./Button.styled";

export function ButtonReg({ title }: { title: string }) {
  return (
    <WrapperButton>
      <ButtonLog>{title}</ButtonLog>
    </WrapperButton>
  );
}
