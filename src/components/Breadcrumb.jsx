import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation
import './Breadcrumb.css'; // Your CSS file for styling

const Breadcrumb = ({ links }) => {
  return (
    <nav className="breadcrumb">
      {links.map((link, index) => (
        <span key={index}>
          <Link to={link.path} className="breadcrumb-link">
            {link.name}
          </Link>
          {index < links.length - 1 && (
            <span className="breadcrumb-separator"> / </span> // The separator between breadcrumb items
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
