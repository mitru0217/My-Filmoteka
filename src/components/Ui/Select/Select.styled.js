import styled from 'styled-components';

export const SelectWrapper = styled.div`
  width: 285px;
  text-align: center;
`;

export const MySelect = styled.select`
  width: 284px;
  padding: 8px 16px;
  color: teal;
  background: transparent;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 1px solid teal;

  :hover {
    color: blueviolet;
    border-bottom: 1px solid blueviolet;
  }
`;
