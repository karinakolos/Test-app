import * as React from "react";
import {
  HeaderContainer,
  LogoWrapper,
  SearchBar,
  WrapperButtons,
  HeaderArrow,
} from "./header.styled";
import { SideNavLink } from "./header.styled";
import { AppRoute } from "./../../enums/router";
import logo from "./../../icons/logo.svg";
import { SvgSelector } from "./SvgSelector";

export function Header() {
  return (
    <HeaderArrow>
      <HeaderContainer>
        <LogoWrapper>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </LogoWrapper>
        <SearchBar>
          <input type="search" placeholder="Search..." />
        </SearchBar>
        <WrapperButtons>
          <SideNavLink to={AppRoute.Favorites}>
            <SvgSelector id="like" />
          </SideNavLink>
          <SideNavLink to={AppRoute.Basket}>
            <SvgSelector id="basket" />
          </SideNavLink>
          <SideNavLink to={AppRoute.Login}>
            <SvgSelector id="user" />
          </SideNavLink>
        </WrapperButtons>
      </HeaderContainer>
    </HeaderArrow>
  );
}
