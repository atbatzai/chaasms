
import React from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import DesktopFramework from './clean-framework/DesktopFramework';
import MobileFramework from './clean-framework/MobileFramework';

const ChaasmsFrameworkClean = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return isMobile ? <MobileFramework /> : <DesktopFramework />;
};

export default ChaasmsFrameworkClean;
