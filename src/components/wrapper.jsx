import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
