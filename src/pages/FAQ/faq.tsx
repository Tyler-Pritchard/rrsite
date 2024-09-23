// faq.tsx
import React, { useState } from 'react';
import {
  FAQContainer,
  Question,
  Answer,
  Image,
  DropdownIcon,
  SectionTitle,
  ShowMoreButton,
} from './faq.styles';
import help from "../../assets/images/desktop/faq.jpg";


const faqData = [
  {
    section: "FAN CLUB",
    items: [
      { question: "What is a Legacy Member?", answer: "A legacy member is someone who had a paid MetClub membership between 1994 and 2015 at any time for two or more years OR had an active paid membership on August 24, 2015. If you are a Legacy Member a 'Legacy' badge will be displayed on your User Profile located at metallica.com/me." },
      { question: "I Need to Renew My Membership!", answer: "As of October 2024, being a member is free! There is no need to pay to join or renew your membership." },
      { question: "What Is The Best Way To Contact Metallica?", answer: "The band has set up The Metallica Club for this very reason. They want to keep fans connected and this is a way that they are able to communicate with you guys. You can write to the band at the Club's mailing address or email info@metclub.com." },
      { question: "What Is The Metallica Club's Mailing Address?", answer: `
        THE METALLICA CLUB
        369-B THIRD STREET
        PMB # 194
        SAN RAFAEL, CA 94901-3573
        USA` 
    },
      { question: "Why Did The Metallica Club Change From Its Old Format?", answer: "Napster was shut down and Lars needed something to do." },
    ],
    moreItems: [
      { question: "Show More", answer: "More information..." },
    ]
  },
  {
    section: "SITE",
    items: [
      { question: "Submitting Content", answer: "Do you remember the setlist from a show that isn't posted on the site?  Do you want to scan your ticket stubs so that we can display them in the Tour Section?  Open up a Customer Support ticket and let us know." },
    ],
  },
];

const FAQ: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  return (
    <FAQContainer>
        <Image src={help} alt="Rob Rich hard at work" />
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <SectionTitle
            onClick={() => toggleSection(sectionIndex)}
            expanded={expandedSections.includes(sectionIndex)}  // Pass the expanded prop here
          >
            {section.section}
            <DropdownIcon expanded={expandedSections.includes(sectionIndex)} />
          </SectionTitle>
          {expandedSections.includes(sectionIndex) &&
            section.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <Question>{item.question}</Question>
                <Answer>{item.answer}</Answer>
              </div>
            ))}
          {section.moreItems && expandedSections.includes(sectionIndex) && (
            <ShowMoreButton>
              + Show More
            </ShowMoreButton>
          )}
        </div>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
