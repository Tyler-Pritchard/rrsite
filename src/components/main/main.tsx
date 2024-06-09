import React from 'react';
import Header from "../header/Header";
import { MainWrapper, MainTitle } from "./main.styles";
import { Container } from "@mui/material";


const Main = () => {
  return (
    <Container style={MainWrapper} maxWidth={'xl'} disableGutters={true}>
      <Header />
      <Container style={MainTitle}>
        <h1>Rob Rich Official Website </h1>
      </Container>
    </Container>
  );
};
export default Main;
