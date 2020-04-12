import React from 'react';
import { Link } from 'gatsby';
import { H1 } from './page-elements/h1';
import { P } from './page-elements/p';



export const Header = ({ siteTitle, siteDescription }) => (
    <div className="header">
    <Link to="/" style={{textDecoration: 'none'}}>
        <H1>{siteTitle}</H1>
        <P className="subtitle">{siteDescription}</P>
    </Link>
    </div>
)