import styled from 'styled-components';

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSize['1xl']};
  font-family: ${({ theme }) => theme.font.monospace};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  color: ${({ theme }) => theme.colors.accent};
`;