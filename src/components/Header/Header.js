// link allows to link different pages or sections in our page
import Link from 'next/link'; 
import React from 'react';

// icons coming from react icons package
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

// styled components
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a  style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /><span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com'>
        <AiFillGithub style="3rem" />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin style="3rem" />
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram style="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
