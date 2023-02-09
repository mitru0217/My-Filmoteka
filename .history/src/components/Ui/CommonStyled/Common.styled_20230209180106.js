import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
    padding-top: 43px;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 32px;
    width: 1400px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
