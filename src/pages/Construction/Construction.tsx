import React from 'react';
import { ConstructionWrapper, ContentContainer, Image, Message } from "./Construction.styles";
import construction from "../../assets/images/desktop/under_construction.png"

const ConstructionPage: React.FC = () => {
  return (
    <ConstructionWrapper>
      <ContentContainer>
        <Message>We're working hard to get this section up and running. Check back soon!</Message>
        <Image src={construction} alt="Rob Rich hard at work" />
      </ContentContainer>
    </ConstructionWrapper>
  );
};

export default ConstructionPage;
