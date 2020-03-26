import React from 'react';
import { Link } from 'gatsby';

export const Header = ({ siteTitle, siteDescription }) => (
    <Link to="/" style={{textDecoration: 'none'}}>
        <h1>{siteTitle}</h1>
        <p>{siteDescription}</p>
    </Link>
)