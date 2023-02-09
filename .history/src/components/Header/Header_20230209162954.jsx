import * as React from 'react';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Navigation />

      {isLoggedIn ? (
        <>
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </>
  );
}
