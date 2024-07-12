import React from 'react';
import { Link } from 'react-router-dom';
import homeBg from '../images/home-bg.jpg';
import homeImg from '../images/home-img.png';

const Home = () => {
  return (
    <main className="pt-5">
      <section className="home d-flex align-items-center min-vh-100" id="home" style={{ background: `url(${homeBg}) no-repeat center center/cover`, paddingTop: '80px' }}>
        <div className="container-fluid d-flex align-items-center">
          <div className="row w-100">
            <div className="col-md-6 pl-md-5">
              <h3 className="display-4">Food Crafted with Love</h3>
              <p className="lead text-muted">Indulge in the art of flavors at Velvet Brew Lounge, where each dish is meticulously prepared with passion and care. Our menu is a journey of taste, offering a delightful blend of ingredients to satisfy your culinary cravings.</p>
              <Link to="/menu" className="btn btn-outline-danger">Order Now</Link>
            </div>
            <div className="col-md-6">
              <img src={homeImg} alt="burger" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
