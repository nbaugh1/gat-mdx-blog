import styled from 'styled-components';

export const H5 = styled.h5`
  font-size: ${({ theme }) => theme.fontSize['lg']};
  font-family: ${({ theme }) => theme.font.sans};
  margin-top: ${({ theme }) => theme.spacing[4]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  color: ${({ theme }) => theme.colors.accent};
`;