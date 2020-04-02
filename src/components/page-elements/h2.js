import styled from 'styled-components';

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-family: ${({ theme }) => theme.font.monospace};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  color: ${({ theme }) => theme.colors.accent};
`;