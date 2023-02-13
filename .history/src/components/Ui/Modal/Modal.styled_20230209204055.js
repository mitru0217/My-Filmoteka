import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const MyModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  text-align: center;
  border-radius: 16px;
  background: white;
  transform: translate(-50%, -50%);
  padding: 16px;
  width: 600px;
`;
