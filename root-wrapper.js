import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
import Code from './src/components/Code';
import Layout from './src/components/Layout';
import { GlobalStyle, theme } from './src/theme/global-style'

const components = {
  h2: ({ children }) => (
    <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>
  ),
  'p.inlineCode': props => (
    <code style={{ backgroundColor: 'lightgray' }} {...props} />
  ),
  
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            props.className && props.className.replace('language-', '')
          }
          {...props}
        />
      );
    }
  }  
};

export const wrapPageElement = ({ element }) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MDXProvider components={components}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ThemeProvider>
);