import React from 'react';
import { ConstructionWrapper, ContentContainer, Image, Message } from "./Construction.styles";
import construction from "../../assets/images/desktop/under_construction.png"

const ConstructionPage: React.FC = () => {
  return (
    <ConstructionWrapper>
      <ContentContainer>
        <Message>We're working hard to get this section up and running. In the meantime you can check out my artist <a href="/band/timeline">Timeline</a> or <a href="/register">sign up</a> for the email list.</Message>
        <Image src={construction} alt="Rob Rich hard at work" />
      </ContentContainer>
    </ConstructionWrapper>
  );
};

export default ConstructionPage;
