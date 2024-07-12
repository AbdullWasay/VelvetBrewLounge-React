
import React from 'react';
import SpecialityItem from '../Components/SpecialityItem';
import '../ExtraCSS/Speciality.css';

import icon1 from '../images/s-1.png';
import icon2 from '../images/s-2.png';
import icon3 from '../images/s-3.png';
import icon4 from '../images/s-4.png';
import icon5 from '../images/s-5.png';
import icon6 from '../images/s-6.png';
import img1 from '../images/s-img-1.jpg';
import img2 from '../images/s-img-2.jpg';
import img3 from '../images/s-img-3.jpg';
import img4 from '../images/s-img-4.jpg';
import img5 from '../images/s-img-5.jpg';
import img6 from '../images/s-img-6.jpg';

const Speciality = () => {
  const items = [
    {
      imgSrc: img1,
      iconSrc: icon1,
      title: "Charcoal Grilled Burger",
      description: "Savor the rich, smoky perfection of our charcoal-grilled burgers, a culinary delight that defines indulgence at Velvet Brew Lounge.",
      altText: "Charcoal Grilled Burger"
    },
    {
      imgSrc: img2,
      iconSrc: icon2,
      title: "Sizzlin' Pizza Fiesta",
      description: "Indulge in our 'Sizzlin' Pizza Fiesta,' where each slice is a spicy symphony of flavors, inviting you to spice up your palate.",
      altText: "Sizzlin' Pizza Fiesta"
    },
    {
      imgSrc: img3,
      iconSrc: icon3,
      title: "Frozen Fantasia",
      description: "Embark on a journey of indulgence with 'Frozen Fantasia,' where tempting treats from our ice cream paradise await to delight your senses.",
      altText: "Frozen Fantasia"
    },
    {
      imgSrc: img4,
      iconSrc: icon4,
      title: "Chill Quenchers",
      description: "Immerse yourself in the ultimate refreshment with our enticing cold drinks, crafted to satisfy every thirst and bring a cool respite to your day.",
      altText: "Chill Quenchers"
    },
    {
      imgSrc: img5,
      iconSrc: icon5,
      title: "Decadent Delights",
      description: "Indulge in the epitome of sweetness with 'Decadent Delights,' where our dessert cakes are the perfect accompaniment for every occasion.",
      altText: "Decadent Delights"
    },
    {
      imgSrc: img6,
      iconSrc: icon6,
      title: "Tea Leaf Tranquility",
      description: "Savor the essence of tranquility in every sip with our Tea Leaf Tranquility, a harmonious blend that unfolds a serene melody on your palate.",
      altText: "Tea Leaf Tranquility"
    }
  ];

  return (
    <main className="pt-5">
      <section className=" py-5" id="speciality" style={{ paddingTop: '100px' }}>
        <div className="container-fluid">
          <h1 className="text-center mb-4">
            <span className="text-danger">Our</span> Speciality
          </h1>
          <div className="row g-4">
            {items.map((item, index) => (
              <SpecialityItem
                key={index}
                imgSrc={item.imgSrc}
                iconSrc={item.iconSrc}
                title={item.title}
                description={item.description}
                altText={item.altText}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Speciality;
