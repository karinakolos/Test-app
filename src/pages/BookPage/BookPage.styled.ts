import { Button } from "./../../components/ButtonNav/ButtonNav.styled";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 2.2rem;
  padding: 0 0 2.5rem;
  color: #313037;
`;
export const WrapperPhoto = styled.div`
  position: relative;
  flex-basis: 40%;
  text-align: center;
`;
export const ButtonLike = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  border: none;
  padding: 0.6rem;
  background: #313037;
  cursor: pointer;
  svg {
    transition: all 0.3s ease-in-out;
    fill: #e6dacc;
  }
  :hover svg {
    fill: #781a2b;
  }
`;

export const WrapperInfo = styled.div`
  flex-basis: 40%;
`;

export const WrapperInfoRight = styled.div`
  display: flex;
  justify-content: space-between;
  :nth-child(1) {
    padding: 0 0 0.5rem;
  }
  :nth-child(7) {
    padding: 0.5rem 0;
  }
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.75rem;
  color: #313037;
`;
export const Pating = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.75rem;
  color: #313037;
`;
export const PathOne = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  padding-right: 3rem;
  color: #a8a8a8;
`;
export const PathTwo = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  color: #313037;
  a {
    color: #313037;
    transition: all 0.2s ease-in;
    :hover {
      color: #781a2b;
    }
  }
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 6rem 0 1rem;
  color: #313037;
  :after {
    content: "";
    display: block;
    height: 1px;
    background: #23282b;
    opacity: 0.4;
    width: 100%;
    margin: 1rem auto;
  }
`;
export const Desc = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  color: #313037;
`;
