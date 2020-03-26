import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-family: ${({ theme }) => theme.font.sans};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`;