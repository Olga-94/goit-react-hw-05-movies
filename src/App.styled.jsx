import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f5f6f7;
  padding: 15px;
`;

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 15px;
  &:hover {
    color: #2196f3;
    text-decoration: underline;
  }
`;
