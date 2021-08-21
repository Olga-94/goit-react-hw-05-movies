import styled from '@emotion/styled/macro';

export const MovieInfoContainer = styled.div`
  display: flex;
  max-width: 1170px;
  padding: 12px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  box-shadow: 4px 4px 4px 0px #b9bfc4;
  background-color: #bdc0c7;
`;

export const Image = styled.img`
  display: block;
  max-width: 320px;
  height: auto;
  object-fit: cover;
  margin-right: 45px;
`;

export const MovieInfoWrapper = styled.div``;

export const MovieTitle = styled.h1`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  line-height: 1.16;
  text-transform: uppercase;
  // text-decoration: underline;
`;

export const MovieSubTitle = styled.h2`
  font-weight: 600;
  color: #2a363b;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const MovieParams = styled.p`
  margin-bottom: 15px;
  color: #464d5e;
`;
