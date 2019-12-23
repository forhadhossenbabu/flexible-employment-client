import React from "react";

export default () => (
  <div className="newsletter-bg padding-top-90 padding-bottom-90">
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-6">
          <div className="newsletter-wrap">
            <h3>Newsletter</h3>
            <p>
              Get e-mail updates about our latest news and Special offers. We
              don’t send spam so don’t worry.
            </p>
            <form action="#" className="newsletter-form form-inline">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address..."
                />
              </div>
              <button className="btn button">
                Submit<i className="fas fa-caret-right"></i>
              </button>
              <p className="newsletter-error">0 - Please enter a value</p>
              <p className="newsletter-success">Thank you for subscribing!</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
