import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-family: ${({ theme }) => theme.font.monospace};
  margin-top: ${({ theme }) => theme.spacing[3]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  color: ${({ theme }) => theme.colors.text};
`;