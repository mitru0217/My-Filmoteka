import * as React from 'react';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/Ui/CommonStyled/Common.styled';
export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Navigation />

      {isLoggedIn ? (
        <>
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </Container>
  );
}
