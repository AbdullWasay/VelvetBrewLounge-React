import React from 'react';
import CartSummary from '../Components/CartSummary';
import carouselImg1 from '../images/c-1.jpg';
import carouselImg2 from '../images/c-2.jpg';
import carouselImg3 from '../images/c-3.jpg';
import itemImg1 from '../images/p-1.jpg';
import itemImg2 from '../images/p-2.jpg';
import itemImg3 from '../images/p-3.jpg';
import itemImg4 from '../images/p-4.jpg';
import itemImg5 from '../images/p-5.jpg';
import itemImg6 from '../images/p-6.jpg';

const Menu = ({ cart, addToCart }) => {

  const items = [
    { id: 1, name: 'Burger', price: 1099, image: itemImg1 },
    { id: 2, name: 'Cake', price: 1799, image: itemImg2 },
    { id: 3, name: 'Sweets', price: 1199, image: itemImg3 },
    { id: 4, name: 'Cupcake', price: 799, image: itemImg4 },
    { id: 5, name: 'Cold Drink', price: 299, image: itemImg5 },
    { id: 6, name: 'Ice Cream', price: 499, image: itemImg6 },
  ];

  const offers = [
    { id: 7, name: 'Delicious Pizza Offer!', price: 2499, image: carouselImg1, description: '2x Large Pizzas And 2x Drinks in RS.2499/-' },
    { id: 8, name: 'Delicious Burger Offer!', price: 1499, image: carouselImg2, description: '2x Charcoal Grilled Burgers And 2x Drinks in RS.1499/-' },
  ];

  return (
    <main className="container-fluid mt-4 pt-5">
      <h1 className="text-center mb-4 pt-5">
        <span className="text-danger">Our </span>Menu
      </h1>
      <div className="row">
        <div className="col-md-8">
          {/* Carousel */}
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carouselImg1} className="d-block w-100" alt="Carousel Slide 1" />
              </div>
              <div className="carousel-item">
                <img src={carouselImg2} className="d-block w-100" alt="Carousel Slide 2" />
              </div>
              <div className="carousel-item">
                <img src={carouselImg3} className="d-block w-100" alt="Carousel Slide 3" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Categories */}
          <section className="popular py-5">
            <div className="container">
              <h1 className="text-center mb-4">
                <span className="text-danger">Most</span> Popular
              </h1>
              <div className="row g-4">
                {items.map((item) => (
                  <div key={item.id} className="col-md-4">
                    <div className="card">
                      <img src={item.image} className="card-img-top" alt={item.name} />
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">PKR {item.price}/-</p>
                        <div className="stars mb-3">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                        </div>
                        <button onClick={() => addToCart(item)} className="btn btn-success">Add to cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Offers */}
          <section className="offers py-5">
            <div className="container">
              <h1 className="text-center mb-4"><span className="text-danger">Special</span> Offers</h1>
              <div className="row">
                {offers.map((offer) => (
                  <div key={offer.id} className="col-md-6">
                    <div className="card">
                      <img src={offer.image} className="card-img-top" alt={offer.name} />
                      <div className="card-body text-center">
                        <h5 className="card-title">{offer.name}</h5>
                        <p className="card-text">{offer.description}</p>
                        <button onClick={() => addToCart(offer)} className="btn btn-danger">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
          <CartSummary cartItems={cart} />
      
      </div>
    </main>
  );
};

export default Menu;
