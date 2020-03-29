import styled from 'styled-components';

export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-top: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text};
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`;