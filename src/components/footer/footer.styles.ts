import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  padding-bottom: 4rem;
  background-color: ${colors.backgroundBase};
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};
  overflow: hidden;

  /* Optional: Add a subtle top border or shadow */
  border-top: 1px solid ${colors.borderLight};
  /* or instead of border:
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.3);
  */
`;
