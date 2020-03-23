import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import styled from 'styled-components';

export default () => {
  const StyledH1 = styled.h1 `
    color: #34403A
  `
  const { title, description } = useSiteMetadata();
  return (
    <>
      <StyledH1>{title}</StyledH1>
      <p>{description}</p>
    </>
  );
};