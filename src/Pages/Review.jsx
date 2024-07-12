// Review.js
import React from 'react';
import ReviewItem from '../Components/ReviewItem';

import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import pic6 from '../images/pic6.jpg';

const reviewItems = [
  {
    imgSrc: pic1,
    name: "Emily Jhonson",
    rating: 5,
    text: '"Velvet Brew Lounge is a cozy haven, where every sip and bite feels like a warm hug!"',
    altText: "Emily Jhonson"
  },
  {
    imgSrc: pic2,
    name: "Benjamin Harris",
    rating: 4,
    text: '"Exceptional service and a delightful atmosphere make Velvet Brew Lounge my go-to spot for coffee and conversation!"',
    altText: "Benjamin Harris"
  },
  {
    imgSrc: pic3,
    name: "Olivia Smith",
    rating: 5,
    text: '"The artisanal sandwiches at Velvet Brew Lounge are a flavor explosion; I can\'t get enough!"',
    altText: "Olivia Smith"
  },
  {
    imgSrc: pic6,
    name: "Olivia Smith",
    rating: 5,
    text: '"The Smoky Pizza And Chill Quenchers Make Velvet Brew Lounge A Standout Culinary Experience!"',
    altText: "Olivia Smith"
  }
];

const Review = () => {
  return (
    <main className="pt-5"> 
      <section className="container-fluid my-5">
        <h1 className="text-center mb-4">
          <span className="text-danger">Our Customer</span> Reviews
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
          {reviewItems.map((item, index) => (
            <ReviewItem
              key={index}
              imgSrc={item.imgSrc}
              name={item.name}
              rating={item.rating}
              text={item.text}
              altText={item.altText}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Review;
