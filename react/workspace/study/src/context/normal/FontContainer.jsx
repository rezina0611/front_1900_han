import React from 'react';
import { FontProvider } from './FontContext';
import FontParent from './FontParent';

const FontContainer = () => {
  return (
    <FontProvider>
      <FontParent />
    </FontProvider>
  );
};

export default FontContainer;