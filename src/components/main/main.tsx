import React from 'react';
import { MainWrapper, MainTitle } from "./main.styles";
import { Container } from "@mui/material";


const Main = () => {
  return (
    <Container style={MainWrapper} maxWidth={'xl'} disableGutters={true}>
      <Container style={MainTitle}>
        <h1>Rob Rich Official Website </h1>
      </Container>
    </Container>
  );
};
export default Main;
