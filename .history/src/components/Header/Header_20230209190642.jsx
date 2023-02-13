import  React, { useState }  from 'react';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { TbMovie } from 'react-icons/tb';
import { Container } from 'components/Ui/CommonStyled/Common.styled';
import {
  HeaderStyled,
  Wrapper,
  WrapperInfo,
  Logo,
  Info,
} from 'components/Header/Header.styled';
import Select from 'components/Ui/Select/Select';

export default function Header() {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <WrapperInfo>
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
          </WrapperInfo>
          <Select
            // value={limit}
            // onChange={value => setLimit(value)}
            placeholder="search movie"
            defaultValue="search movie by"
            options={[
              { value: 5, name: '5' },
              { value: 10, name: '10' },
              { value: 25, name: '25' },
              { value: 50, name: '50' },
              { value: -1, name: 'Show all' },
            ]}
          />
        </Wrapper>
      </Container>
      const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
    </HeaderStyled>
  );
}
