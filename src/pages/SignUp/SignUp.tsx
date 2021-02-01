import React from 'react';
import { homeObjThree } from './Data';
import { InfoSection } from '../../components';

const SignUp: React.FC = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default SignUp;
