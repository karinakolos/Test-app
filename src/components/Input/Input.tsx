import * as React from "react";

import {
  InputContainer,
  InputError,
  InputLabel,
  StyledInput,
} from "./Input.styled";
import { InputProps } from "../../components/Input/Input.types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, type, placecholder, error, ...passThroughProps }, ref) => (
    <InputContainer ref={ref}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <StyledInput
        id={id}
        {...passThroughProps}
        type={type}
        placeholder={placecholder}
      />
      <InputError>{error}</InputError>
    </InputContainer>
  )
);
