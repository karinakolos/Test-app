import * as React from "react";
import { ButtonReg } from "../../components/Button/Button";
import { ButtonNav } from "../../components/ButtonNav/ButtonNav";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { SideNavLink } from "./LoginPage.styled";
import { AppRoute } from "./../../enums/router";

import { Wrapper, WrapperNav } from "./LoginPage.styled";
import { Foooter } from "../../components/Footer/Footer";

export function LoginPage() {
  return (
    <div>
      <Header />
      <Wrapper>
        <WrapperNav>
          <SideNavLink to={AppRoute.Login}>
            <ButtonNav title="sign in" />
          </SideNavLink>
          <SideNavLink to={AppRoute.Reg}>
            <ButtonNav title="sign up" />
          </SideNavLink>
        </WrapperNav>
        <Input label="Email" placecholder="Your email" type="email" />
        <Input label="Password" placecholder="Your password" type="password" />
        <ButtonReg title="sign in" />
      </Wrapper>
      <Foooter />
    </div>
  );
}
