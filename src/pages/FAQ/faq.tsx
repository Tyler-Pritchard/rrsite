// faq.tsx
import React, { useState } from 'react';
import {
  FAQContainer,
  Question,
  Answer,
  DropdownIcon,
  SectionTitle,
  ShowMoreButton,
} from './faq.styles';

const faqData = [
  {
    section: "FAN CLUB",
    items: [
      { question: "What is a Legacy Member?", answer: "A legacy member is ..." },
      { question: "I Need to Renew My Membership!", answer: "Renewing membership is ..." },
      { question: "What Is The Best Way To Contact Metallica?", answer: "Contact them at ..." },
      { question: "What Is The Metallica Club's Mailing Address?", answer: "The mailing address is ..." },
      { question: "Why Did The Metallica Club Change From Its Old Format?", answer: "The format changed because ..." },
    ],
    moreItems: [
      { question: "Show More", answer: "More information..." },
    ]
  },
  {
    section: "SITE",
    items: [
      { question: "Submitting Content", answer: "You can submit content by ..." },
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
