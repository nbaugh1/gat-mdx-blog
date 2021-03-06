import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-family: ${({ theme }) => theme.font.monospace};
  margin-top: ${({ theme }) => theme.spacing[1]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  color: ${({ theme }) => theme.colors.text};
`;