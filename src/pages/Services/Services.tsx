import React from 'react';
import { homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';

const Services: React.FC = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Services;
