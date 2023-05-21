import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  `;

export const Contact = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  `;

export const Button = styled.button`
  display: inline-block;
  margin-bottom: 8px;


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
  