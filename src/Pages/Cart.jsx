import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleQuantityChange, handleRemove }) => {

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <main className="pt-5">
      <section className="h-100 h-custom">
        <div className="container row h-100 py-5">
          <h1 className="text-center mb-4"><span className="text-danger">Shopping</span> Cart</h1>
          <div className="row d-flex justify-content-center align-items-center h-100 pt-5">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="h5 text-danger">Shopping Bag</th>
                      <th scope="col" className="h5 text-danger">Quantity</th>
                      <th scope="col" className="h5 text-danger">Price</th>
                      <th scope="col" className="h5 text-danger">Action</th> {/* Added Action Column */}
                    </tr>
                  </thead>
                  <tbody>
                    {cart.filter(item => item.quantity > 0).map(item => (
                      <tr key={item.id}>
                        <th scope="row">
                          <div className="d-flex align-items-center">
                            <img src={item.image} className="img-fluid rounded-3" style={{ width: 120 }} alt={item.name} />
                            <div className="flex-column ms-4">
                              <p className="mb-2">{item.name}</p>
                            </div>
                          </div>
                        </th>
                        <td className="align-middle">
                          <div className="d-flex flex-row">
                            <button
                              className="btn btn-danger px-2"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <input
                              min={0}
                              name="quantity"
                              value={item.quantity}
                              type="number"
                              className="form-control form-control-sm"
                              style={{ width: 50 }}
                              readOnly
                            />
                            <button
                              className="btn btn-danger px-2"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{ fontWeight: 500 }}>Rs. {item.price * item.quantity}</p>
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-danger"
                            onClick={() => handleRemove(item.id)} // Remove item from cart
                          >
                            <i className="fas fa-trash" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Buttons Row */}
          <div className="row">
            <div className="col-10">
              <Link to="/Menu" className="btn btn-link text-muted text-decoration-none">
                <i className="fas fa-arrow-left me-1" /> Continue Shopping
              </Link>
            </div>
            <div className="col-2 text-end">
              <Link to="/Checkout" className="btn btn-danger btn-lg w-100">Proceed to Pay</Link>
            </div>
          </div> {/* end row */}
        </div>
      </section>
    </main>
  );
};

export default Cart;
