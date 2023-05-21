import styled from '@emotion/styled';

export const List = styled.ul`
  max-height: 60vh;
  min-height: 200px;
  padding: 8px 12px;

  list-style: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.14;


  border: 2px solid #a75f06;
  border-radius: 8px;
  outline: 2px solid transparent;
  outline-offset: -1px;
  background-color: #e6f4f1;

  transition: outline 300ms ease-in;

  &:hover,
  &:focus {
    outline-color: #f5b05c;
  }
  `;