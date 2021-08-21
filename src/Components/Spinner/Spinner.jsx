import React from 'react';
import Loader from 'react-loader-spinner';
import { SpinnerContainer } from './Spinner.styled';

export default function Spinner() {
  return (
    <SpinnerContainer>
      <Loader type="ThreeDots" color="#bdc0c7" height={280} width={280} />
    </SpinnerContainer>
  );
}
