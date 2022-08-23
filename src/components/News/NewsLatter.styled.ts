import { Button } from "../ButtonNav/ButtonNav.styled";
import { Input } from "../Input/Input";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 5rem 1rem 4rem;
  padding: 2rem 2rem 3rem;
  background: #ccc4bc;
`;
export const Title = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2.5rem;
  line-height: 3.75rem;
  color: #313037;
`;
export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1.125rem;
  padding: 0.5rem 0 2rem;
  line-height: 1.75rem;
  color: #313037;
`;
export const Form = styled.div`
  display: flex;
`;
export const InputEmail = styled.div`
  flex-basis: 80%;
  display: flex;
  Input {
    outline: none;
    width: 100%;
    height: 3.07rem;
    padding-left: 1rem;
    margin-top: 1rem;
    border: 1px solid #e7e7e7;
  }
`;
export const BtbSubscibe = styled.div`
  flex-basis: 20%;
  Button {
    height: 100%;
  }
`;
