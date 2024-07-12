import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import orderImg from '../images/order-img.jpg';
import step1Img from '../images/step-1.jpg';
import step2Img from '../images/step-2.jpg';
import step3Img from '../images/step-3.jpg';
import step4Img from '../images/step-4.jpg';

const Feedback = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setShowAlert(true); 

    setTimeout(() => {
        setShowAlert(false);
        navigate('/');
    }, 500);
  };

  return (
    <>
      <main className="pt-5">
        <section className="container-fluid my-5 pt-5">
          <div className="row text-center">
            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-light">
                <img src={step1Img} className="img-fluid rounded" alt="Step 1" />
                <h3 className="mt-3">Choose Your Favourite Food</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-light">
                <img src={step2Img} className="img-fluid rounded" alt="Step 2" />
                <h3 className="mt-3">Free and Fast Delivery</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-light">
                <img src={step3Img} className="img-fluid rounded" alt="Step 3" />
                <h3 className="mt-3">Easy Payments Method</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-light">
                <img src={step4Img} className="img-fluid rounded" alt="Step 4" />
                <h3 className="mt-3">And Finally, Enjoy Your Food</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="container my-5">
          <h1 className="text-center mb-4"><span className="text-danger">Hit Us Up!</span></h1>
          <h2 className="text-center mb-4">If you’ve got any feedback or questions, just hit us up!</h2>
          <div className="row shadow p-3 mb-5 bg-white rounded">
            <div className="col-md-6">
              <img src={orderImg} className="img-fluid rounded" alt="Order" />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="number" className="form-control" placeholder="Contact Number" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-danger">Submit</button>
              </form>

              {showAlert && (
                <div className="alert alert-success position-fixed top-50 start-50 translate-middle w-50" role="alert">
                  Form submitted successfully!
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Feedback;
