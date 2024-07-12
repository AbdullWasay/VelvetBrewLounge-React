import React from 'react';
import '../ExtraCSS/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 ">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="text-uppercase">Address</h5>
            <p>Beverly Center, Islamabad</p>
            <p>Email: <a href="mailto:info@velvetbrew.com" className="text-white text-decoration-none">info@velvetbrew.com</a></p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="col-md-6">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com" className="btn btn-outline-light btn-lg mx-1" role="button"><i className="fab fa-facebook"></i></a>
              <a href="https://www.twitter.com" className="btn btn-outline-light btn-lg mx-1" role="button"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com" className="btn btn-outline-light btn-lg mx-1" role="button"><i className="fab fa-instagram"></i></a>
              <a href="https://www.pinterest.com" className="btn btn-outline-light btn-lg mx-1" role="button"><i className="fab fa-pinterest"></i></a>
              <a href="https://www.linkedin.com" className="btn btn-outline-light btn-lg mx-1" role="button"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
