import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import { Nav } from './Nav'

const AppStyles = styled.main `
`;

export const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
      <AppStyles>
      <Nav />
        <Header style={{background: 'red'}} siteTitle={title} siteDescription={description} />
        {children}
      </AppStyles>
    );
  };
