import React from 'react';

const SpecialityItem = ({ imgSrc, iconSrc, title, description, altText }) => (
  <div className="col-md-4">
    <div className="box">
      <img className="image img-fluid" src={imgSrc} alt={altText} />
      <div className="content">
        <img src={iconSrc} alt={title} />
        <h3 className="fs-4">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);



export default SpecialityItem;
