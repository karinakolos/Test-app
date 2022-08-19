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
import { Link } from "react-router-dom";
import { UserIcon } from "./UserIcon";
import { BasketIcon } from "./BasketIcon";
import { LikeIcon } from "./LikeIcon";

export function Header() {
  return (
    <HeaderArrow>
      <HeaderContainer>
        <LogoWrapper>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </LogoWrapper>
        <SearchBar>
          <input type="search" placeholder="Search..." />
        </SearchBar>
        <WrapperButtons>
          <SideNavLink to={AppRoute.Favorites}>
            <BasketIcon />
          </SideNavLink>
          <SideNavLink to={AppRoute.Basket}>
            <LikeIcon />
          </SideNavLink>
          <SideNavLink to={AppRoute.Login}>
            <UserIcon />
          </SideNavLink>
        </WrapperButtons>
      </HeaderContainer>
    </HeaderArrow>
  );
}
