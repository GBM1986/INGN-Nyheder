import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const Test = () => {
  const breadcrumbLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Product A', path: '/products/product-a' }
  ];

  return (
    <div>
      <Breadcrumb links={breadcrumbLinks} />
      <h1>Welcome to Product A Page</h1>
    </div>
  );
};

export default Test;