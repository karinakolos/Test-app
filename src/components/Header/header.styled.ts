import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";

export const HeaderArrow = styled.div`
  display: block;
  :after {
    content: "";
    display: block;
    height: 1px;
    background: #23282b;
    opacity: 0.4;
    width: 100%;
    margin: 2rem auto;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 1.5rem 0 0;
  top: 0;
  width: 100%;
`;

export const LogoWrapper = styled.div``;

export const SearchBar = styled.div`
  flex-basis: 40%;
  input {
    width: 100%;
    background: none;
    border: 1px solid #23282b;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #23282b;
    padding: 0.875rem 0 0.625rem 1.25rem;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 2rem;
`;
export const SideNavLink = styled(NavLink)`
  transition: all 0.8s ease-in;
  svg {
    width: 1.5rem;
    height: 1.5rem;

    &:hover:not(.active) path {
      stroke: #781a2b;
    }
    &.active path {
      stroke: #781a2b;
    }
  }
`;
