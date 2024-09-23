// faq.styles.ts
import styled from 'styled-components';

export const FAQContainer = styled.div`
    @media (max-width: 480px) {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 9rem 1rem 1rem 1.5rem;
    };
`;

export const SectionTitle = styled.h2<{ expanded: boolean }>`
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f1f1f1;
  margin-bottom: 5px;
  border-radius: 5px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const DropdownIcon = styled.span<{ expanded: boolean }>`
  transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const Question = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0;
`;

export const Answer = styled.p`
  font-size: 1rem;
  margin: 5px 0 20px 0;
  color: #555;
`;

export const ShowMoreButton = styled.button`
  font-size: 1rem;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
