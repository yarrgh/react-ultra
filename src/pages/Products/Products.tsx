import React from 'react';
import { homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';

const Products: React.FC = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Products;
