// ReviewItem.js
import React from 'react';

const ReviewItem = ({ imgSrc, name, rating, text, altText }) => {
  return (
    <div className="col">
      <div className="card text-center border-light">
        <img
          src={imgSrc}
          className="card-img-top rounded-circle mx-auto mt-n5"
          style={{ width: '150px', height: '150px', objectFit: 'cover', border: '5px solid #f7f7f7' }}
          alt={altText}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="stars mb-3">
            {Array.from({ length: 5 }, (_, index) => (
              <i
                key={index}
                className={`fas fa-star ${index < rating ? 'text-warning' : 'far text-warning'}`}
              ></i>
            ))}
          </div>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
