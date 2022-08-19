import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 40%;
  margin: 3rem auto 7rem;
`;
export const WrapperNav = styled.div`
  display: flex;
`;
export const SideNavLink = styled(NavLink)`
  flex-basis: 50%;
  color: #313037;
  text-decoration: none;
  transition: all 0.8s ease-in;
  &.active {
    color: #881ae6;
    :after {
      content: "";
      display: block;
      height: 2px;
      background: #881ae6;
      width: 100%;
      margin: 0 auto 0.5rem;
    }
  }
  &:hover:not(.active) {
    opacity: 0.6;
  }
`;
