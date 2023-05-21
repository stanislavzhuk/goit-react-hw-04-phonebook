import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.14;
  `;

export const FilterInput = styled.input`
  margin-top: 4px;
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