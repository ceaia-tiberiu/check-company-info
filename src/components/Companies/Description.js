import React from 'react';

export default ({ companyName, CEO, description, website, industry }) => {
  return (
    <div className="description-container">
      <h1>
        <a href={website} target="_blank">
          {companyName}
        </a>
      </h1>
      <h3>CEO: {CEO} </h3>
      <h4>Industry: {industry}</h4>
      <p className="description">{description}</p>
    </div>
  );
};
