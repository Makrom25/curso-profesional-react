import React from "react";
import {ListOfCategories} from "./components/ListoOfCategories";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListoOfPhotoCard";
import { Logo } from "./components/Logo";

const App = () => {
  return ( 
    <div>
      <GlobalStyles />
      <Logo />
      <ListOfCategories/>
      <ListOfPhotoCards />
    </div>
  );
}

export { App };