import styled from 'styled-components';

export const MyInput = styled.input`
  width: 100px;
  padding: 8px 16px;
  margin-bottom: 16px;
  color: teal;
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid teal;
  margin-right: 8px;

  &::-webkit-input-placeholder {
    color: teal;
  }
  &:hover {
    color: blueviolet;
    border-bottom: 1px solid blueviolet;
  }
`;
