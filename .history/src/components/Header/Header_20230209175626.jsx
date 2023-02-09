import * as React from 'react';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/Ui/CommonStyled/Common.styled';
import {
  HeaderStyled,
  Wrapper,
  Logo,
  Info,
} from 'components/Header/Header.styled';
import { TbMovie } from 'react-icons/tb';
export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <Logo>
            <TbMovie width="100" height="100" />
          </Logo>
          <Info>
            <Navigation />

            {isLoggedIn ? (
              <>
                <UserMenu />
              </>
            ) : (
              <AuthNav />
            )}
          </Info>
        </Wrapper>
      </Container>
    </HeaderStyled>
  );
}
