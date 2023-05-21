import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
  `;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.14;
  `;

export const Input = styled.input`
  padding: 8px 12px;

  font-size: 18px;
  line-height: 1.12;
  
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

export const Button = styled.button`
  display: inline-block;
  min-width: 150px;
  margin-top: 24px;
  padding: 8px 10px;

  border: 2px solid #a75f06;
  border-radius: 8px;
  background-color: #e6f4f1;

  font-size: 18px;
  font-weight: 500;

  cursor: pointer;

  transition: border-color 300ms ease-in, background-color 300ms ease-in;
  
  :hover,
  :focus {
    border-color: #f5b05c;
    background-color: #C0C0C0;
  }
  `;