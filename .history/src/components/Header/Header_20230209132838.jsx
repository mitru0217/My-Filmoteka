import React from 'react';
import { MyHeader, Link } from '../Header/Header.styled';
import { AuthNav } from '../AuthNav/AuthNav';
const Header = () => {
  return (
    <MyHeader>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/posts">My Library</Link>
      </nav>
      <AuthNav />
    </MyHeader>
  );
};

export default Header;
