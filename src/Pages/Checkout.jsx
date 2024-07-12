import React from 'react';
import CartSummary from '../Components/CartSummary';
import '../ExtraCSS/Checkout.css';

const Checkout = ({ cart }) => {
  return (
    <main className="pt-5 mt-5">
      <div className="container-fluid">
        <h1 className="text-center mb-4"><span className="text-danger">Check</span> Out</h1>
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body">
                <ol className="activity-checkout mb-0 px-4 mt-3">
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-danger">
                        <i className="bx bxs-receipt text-white font-size-20" />
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Billing Info</h5>
                        <p className="text-muted text-truncate mb-4">Please write the billing information below</p>
                        <div className="mb-3">
                          <form>
                            <div>
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="billing-name">Name</label>
                                    <input type="text" className="form-control" id="billing-name" placeholder="Enter name" />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="billing-email-address">Email Address</label>
                                    <input type="email" className="form-control" id="billing-email-address" placeholder="Enter email" />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="billing-phone">Phone</label>
                                    <input type="text" className="form-control" id="billing-phone" placeholder="Enter Phone no." />
                                  </div>
                                </div>
                              </div>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="billing-address">Address</label>
                                <textarea className="form-control" id="billing-address" rows={3} placeholder="Enter full address" />
                              </div>
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="mb-4 mb-lg-0">
                                    <label className="form-label">Country</label>
                                    <select className="form-control form-select" title="Country">
                                      <option value={0}>Select Country</option>
                                      <option value="AF">Afghanistan</option>
                                      <option value="AL">Albania</option>
                                      <option value="DZ">Algeria</option>
                                      <option value="AS">American Samoa</option>
                                      <option value="AD">Andorra</option>
                                      <option value="AO">Angola</option>
                                      <option value="AI">Anguilla</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-4 mb-lg-0">
                                    <label className="form-label" htmlFor="billing-city">City</label>
                                    <input type="text" className="form-control" id="billing-city" placeholder="Enter City" />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-0">
                                    <label className="form-label" htmlFor="zip-code">Zip / Postal code</label>
                                    <input type="text" className="form-control" id="zip-code" placeholder="Enter Postal code" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-danger">
                        <i className="bx bxs-truck text-white font-size-20" />
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Shipping Info</h5>
                        <p className="text-muted text-truncate mb-4">Please write the shipping information below</p>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-lg-4 col-sm-6">
                              <div data-bs-toggle="collapse">
                                <label className="card-radio-label mb-0">
                                  <input type="radio" name="address" id="info-address1" className="card-radio-input" defaultChecked />
                                  <div className="card-radio text-truncate p-3">
                                    <span className="fs-14 mb-4 d-block">Address 1</span>
                                    <span className="text-muted fw-normal text-wrap mb-1 d-block">House no 92-A, 6th road, A-block, Satellite Town, Rawalpindi</span>
                                    <span className="text-muted fw-normal d-block">Phone No. 03339167909</span>
                                  </div>
                                </label>
                                <div className="edit-btn bg-light rounded">
                                  <a href="#" data-bs-toggle="tooltip" data-placement="top" title data-bs-original-title="Edit">
                                    <i className="bx bx-pencil font-size-16" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                              <div>
                                <label className="card-radio-label mb-0">
                                  <input type="radio" name="address" id="info-address2" className="card-radio-input" />
                                  <div className="card-radio text-truncate p-3">
                                    <span className="fs-14 mb-4 d-block">Address 2</span>
                                    <span className="text-muted fw-normal text-wrap mb-1 d-block">House no 406, Bloch H, Near Emporium, Johar Town, Lahore</span>
                                    <span className="text-muted fw-normal d-block">Phone no, 03339167909</span>
                                  </div>
                                </label>
                                <div className="edit-btn bg-light rounded">
                                  <a href="#" data-bs-toggle="tooltip" data-placement="top" title data-bs-original-title="Edit">
                                    <i className="bx bx-pencil font-size-16" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-danger">
                        <i className="bx bxs-wallet-alt text-white font-size-20" />
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Payment Info</h5>
                        <p className="text-muted text-truncate mb-4">Please write the payment information below</p>
                      </div>
                      <div>
                        <h5 className="font-size-14 mb-3">Payment method :</h5>
                        <div className="row">
                          <div className="col-lg-3 col-sm-6">
                            <div data-bs-toggle="collapse">
                              <label className="card-radio-label">
                                <input type="radio" name="pay-method" id="pay-methodoption1" className="card-radio-input" />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bx-credit-card d-block h2 mb-3" />
                                  Credit / Debit Card
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div>
                              <label className="card-radio-label">
                                <input type="radio" name="pay-method" id="pay-methodoption2" className="card-radio-input" />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bxl-paypal d-block h2 mb-3" />
                                  Paypal
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div>
                              <label className="card-radio-label">
                                <input type="radio" name="pay-method" id="pay-methodoption3" className="card-radio-input" />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bxl-stripe d-block h2 mb-3" />
                                  Stripe
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div>
                              <label className="card-radio-label">
                                <input type="radio" name="pay-method" id="pay-methodoption4" className="card-radio-input" />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bxl-bitcoin d-block h2 mb-3" />
                                  Bitcoin
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
            <CartSummary cartItems={cart} />
       
        </div>
      </div>
    </main>
  );
};

export default Checkout;
