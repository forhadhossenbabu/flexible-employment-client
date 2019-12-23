import React from "react";
import {} from "react-router-dom";

export default () => (
  <div className="searchAndFilter-wrapper">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="searchAndFilter-block-3">
            <div className="searchAndFilter-3">
              <form action="#" className="search-form">
                <div className="keyword">
                  <label>What?</label>
                  <input type="text" placeholder="Enter Your Keywords" />
                </div>
                <div className="location-input">
                  <label>Where?</label>
                  <select className="selectpicker" id="search-location">
                    <option value="" selected>
                      All Locations
                    </option>
                    <option value="california">California</option>
                    <option value="las-vegas">Las Vegas</option>
                    <option value="new-work">New Work</option>
                    <option value="carolina">Carolina</option>
                    <option value="chicago">Chicago</option>
                    <option value="silicon-vally">Silicon Vally</option>
                    <option value="washington">Washington DC</option>
                    <option value="neveda">Neveda</option>
                  </select>
                </div>
                <div className="category-input">
                  <label>Category</label>
                  <select className="selectpicker" id="search-category">
                    <option value="" selected>
                      All Categories
                    </option>
                    <option value="real-state">Real State</option>
                    <option value="vehicales">Vehicales</option>
                    <option value="electronics">Electronics</option>
                    <option value="beauty">Beauty</option>
                    <option value="furnitures">Furnitures</option>
                  </select>
                </div>
                <button className="button primary-bg">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <div className="filter-categories">
                <h4>
                  <i data-feather="align-left"></i>Job Category
                </h4>
                <ul>
                  <li>
                    <a href="job-listing.html">
                      Accounting / Finance <span>(233)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Education <span>(46)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Design & Creative <span>(156)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Health Care <span>(98)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Engineer & Architects <span>(188)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Marketing & Sales <span>(124)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Garments / Textile <span>(584)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Customer Support <span>(233)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Digital Media <span>(15)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Telecommunication <span>(03)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="filter-location">
                <h4>
                  <i data-feather="map-pin"></i>Location Filter
                </h4>
                <ul>
                  <li>
                    <a href="job-listing.html">
                      New York City <span>(233)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Washington, D.C <span>(46)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Chicago <span>(156)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      San Francisco <span>(98)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Los Angeles <span>(188)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Boston <span>(124)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      Seattle <span>(584)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      New Orleans <span>(233)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
