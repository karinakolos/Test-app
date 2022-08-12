import * as React from "react";

import { Posts } from "../../components/Posts/Posts";
import { Header } from "../../components/Header/Header";

import { WrapperMainContent, Wrapper, Text } from "./SettingsPage";

export function SettingsPage() {
  return (
    <Wrapper>
      <Header />
      <WrapperMainContent>
        <Text> Settings</Text>
      </WrapperMainContent>
    </Wrapper>
  );
}
