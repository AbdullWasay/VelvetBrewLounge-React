import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ({ cartItems }) => {
  const filteredItems = cartItems.filter(item => item.quantity > 0);

  const subTotal = filteredItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 100; 
  const tax = Math.round(subTotal * 0.10); 
  const total = subTotal + shipping + tax;

  return (
    <div className="col-xl-4">
      <div className="card checkout-order-summary">
        <div className="card-body">
          <div className="p-3 bg-light mb-3">
            <h5 className="font-size-16 mb-0">Order Summary <span className="float-end ms-2">#MN0124</span></h5>
          </div>
          <div className="table-responsive">
            <table className="table table-centered mb-0 table-nowrap">
              <thead>
                <tr>
                  <th className="border-top-0" style={{width: 110}} scope="col">Product</th>
                  <th className="border-top-0" scope="col">Product Desc</th>
                  <th className="border-top-0" scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map(item => (
                  <tr key={item.id}>
                    <th scope="row"><img src={item.image} alt="product-img" title="product-img" className="avatar-lg rounded" /></th>
                    <td>
                      <h5 className="font-size-16 text-truncate">{item.name}</h5>
                      <p className="text-muted mb-0 mt-1">{item.price} x {item.quantity}</p>
                    </td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2}>
                    <h5 className="font-size-14 m-0">Sub Total :</h5>
                  </td>
                  <td>
                    {subTotal}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <h5 className="font-size-14 m-0">Shipping Charge :</h5>
                  </td>
                  <td>
                    {shipping}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <h5 className="font-size-14 m-0">Estimated Tax :</h5>
                  </td>
                  <td>
                    {tax}
                  </td>
                </tr>                              
                <tr className="bg-light">
                  <td colSpan={2}>
                    <h5 className="font-size-14 m-0 text-danger">Total:</h5>
                  </td>
                  <td className="text-danger">
                    {total}
                  </td>
                </tr>
              </tbody>
            </table>  
            <Link to="/Cart" className="btn btn-danger w-100">Place Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
