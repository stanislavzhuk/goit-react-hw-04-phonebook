import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: minmax(100px, auto);
  column-gap: 20px;

  padding: 40px;

`;

export const Title = styled.h1`
  margin-bottom: 20px;

  font-weight: 900;
  font-size: 40px;
  text-align: center;
`;

export const Contacts = styled.h2`
  font-weight: 700;
  font-size: 35px;
  text-align: center;
`;

export const Info = styled.p`
  font-weight: 700;
  font-size: 35px;
  text-align: center;
`;