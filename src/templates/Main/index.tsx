import React from 'react';

const MainTemplate: React.FC = ({ children }: { children?: React.ReactNode }) => (
  <div className="app-wrapper">
    {children}
  </div>
);

export default MainTemplate;
