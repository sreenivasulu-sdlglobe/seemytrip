import '../assets/css/bootstrap.min.css';
import '../assets/css/animation.css';
import '../assets/css/dropzone.min.css';
import '../assets/css/flatpickr.min.css';
import '../assets/css/flickity.min.css';
import '../assets/css/lightbox.min.css';
import '../assets/css/magnifypopup.css';
import '../assets/css/select2.min.css';
import '../assets/css/rangeSlider.min.css';
import '../assets/css/prism.css';
import '../assets/css/bootstrap-icons.css';
import '../assets/css/fontawesome.css';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import Header02 from './header02';
import Footer from './footer';

const Home06 = () => {
      return (
        <div>
          {/* ============================================================== */}
          {/* Preloader - style you can find in spinners.css */}
          {/* ============================================================== */}
          <div id="preloader">
            <div className="preloader"><span /><span /></div>
          </div>
          {/* ============================================================== */}
          {/* Main wrapper - style you can find in pages.scss */}
          {/* ============================================================== */}
          <div id="main-wrapper">
            {/* ============================================================== */}
            {/* Top header  */}
            {/* ============================================================== */}
            {/* Start Navigation */}
            <Header02/>
            {/* End Navigation */}
            <div className="clearfix" />
            {/* ============================================================== */}
            {/* Top header  */}
            {/* ============================================================== */}
            {/* ============================ Hero Banner  Start================================== */}
            <div className="image-cover hero-header bg-white" style={{background: 'url(https://placehold.co/2200x1200)no-repeat'}} data-overlay={5}>
              <div className="container">
                {/* Search Form */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                    <div className="position-relative text-center mb-5">
                      <h1>Explore The World <span className="position-relative z-4">Around<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                            <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                              <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                              </path>
                            </svg>
                          </span></span> You</h1>
                      <p className="fs-5 fw-light">Take a little break from the everyday work stress. Plan a trip and explore beautiful destinations!</p>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="navTabbs d-flex align-items-center justify-content-center w-100 mb-2">
                      <ul className="nav nav-pills lights medium justify-content-center mb-3" id="tour-pills-tab" role="tablist">
                        <li className="nav-item">
                          <Link className="nav-link active" data-bs-toggle="tab" to="#hotels"><i className="fa-solid fa-hotel me-2" />Hotels</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-bs-toggle="tab" to="#flights"><i className="fa-solid fa-jet-fighter me-2" />Flights</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-bs-toggle="tab" to="#tours"><i className="fa-solid fa-globe me-2" />Tour</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-bs-toggle="tab" to="#cabs"><i className="fa-solid fa-car me-2" />Cab</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="search-wrap bg-white rounded-3 p-3">
                      <div className="tab-content">
                        <div className="tab-pane show active" id="hotels">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                              <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold hdd-arrow">
                                      <option value>Select</option>
                                      <option value="ny">New York</option>
                                      <option value="sd">San Diego</option>
                                      <option value="sj">San Jose</option>
                                      <option value="ph">Philadelphia</option>
                                      <option value="nl">Nashville</option>
                                      <option value="sf">San Francisco</option>
                                      <option value="hu">Houston</option>
                                      <option value="sa">San Antonio</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                  <div className="form-group mb-0">
                                    <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" readOnly="readonly" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                              <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                  <div className="form-group mb-0">
                                    <div className="booking-form__input guests-input mixer-auto">
                                      <button name="guests-btn" id="guests-input-btn">1 Guest</button>
                                      <div className="guests-input__options" id="guests-input-options">
                                        <div>
                                          <span className="guests-input__ctrl minus" id="adults-subs-btn"><i className="fa-solid fa-minus" /></span>
                                          <span className="guests-input__value"><span id="guests-count-adults">1</span>Adults</span>
                                          <span className="guests-input__ctrl plus" id="adults-add-btn"><i className="fa-solid fa-plus" /></span>
                                        </div>
                                        <div>
                                          <span className="guests-input__ctrl minus" id="children-subs-btn"><i className="fa-solid fa-minus" /></span>
                                          <span className="guests-input__value"><span id="guests-count-children">0</span>Children</span>
                                          <span className="guests-input__ctrl plus" id="children-add-btn"><i className="fa-solid fa-plus" /></span>
                                        </div>
                                        <div>
                                          <span className="guests-input__ctrl minus" id="room-subs-btn"><i className="fa-solid fa-minus" /></span>
                                          <span className="guests-input__value"><span id="guests-count-room">0</span>Rooms</span>
                                          <span className="guests-input__ctrl plus" id="room-add-btn"><i className="fa-solid fa-plus" /></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                  <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>	
                        </div>
                        <div className="tab-pane" id="flights">
                          <div className="row gx-lg-2 g-3">
                            <div className="col-xl-5 col-lg-5 col-md-12">
                              <div className="row gy-3 gx-lg-2 gx-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="leaving form-control fw-bold">
                                      <option value>Select</option>
                                      <option value="ny">New York</option>
                                      <option value="sd">San Diego</option>
                                      <option value="sj">San Jose</option>
                                      <option value="ph">Philadelphia</option>
                                      <option value="nl">Nashville</option>
                                      <option value="sf">San Francisco</option>
                                      <option value="hu">Houston</option>
                                      <option value="sa">San Antonio</option>
                                    </select>
                                  </div>
                                  <div className="btn-flip-icon mt-md-0">
                                    <button className="p-0 m-0 text-primary"><i className="fa-solid fa-right-left" /></button>
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                  <div className="form-groupp hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold">
                                      <option value>Select</option>
                                      <option value="lv">Las Vegas</option>
                                      <option value="la">Los Angeles</option>
                                      <option value="kc">Kansas City</option>
                                      <option value="no">New Orleans</option>
                                      <option value="kc">Jacksonville</option>
                                      <option value="lb">Long Beach</option>
                                      <option value="cl">Columbus</option>
                                      <option value="cn">Canada</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12">
                              <div className="row gy-3 gx-lg-2 gx-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                  <div className="form-group mb-0">
                                    <input className="form-control fw-bold choosedate" type="text" placeholder="Departure.." readOnly="readonly" />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                  <div className="form-group mb-0">
                                    <input className="form-control fw-bold choosedate" type="text" placeholder="Return.." readOnly="readonly" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-12">
                              <div className="form-groupp hdd-arrow mb-0">
                                <select className="occupant form-control fw-bold">
                                  <option value>Select</option>
                                  <option value="lv">01 Adult</option>
                                  <option value="la">02 Adult</option>
                                  <option value="kc">03 Adult</option>
                                  <option value="no">04 Adult</option>
                                  <option value="kc">05 Adult</option>
                                  <option value="lb">06 Adult</option>
                                  <option value="cl">07 Adult</option>
                                  <option value="cn">08 Adult</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-12">
                              <div className="form-group mb-0">
                                <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass fs-5" /></button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="tours">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                              <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold">
                                      <option value>Select</option>
                                      <option value="ny">New York</option>
                                      <option value="sd">San Diego</option>
                                      <option value="sj">San Jose</option>
                                      <option value="ph">Philadelphia</option>
                                      <option value="nl">Nashville</option>
                                      <option value="sf">San Francisco</option>
                                      <option value="hu">Houston</option>
                                      <option value="sa">San Antonio</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                  <div className="form-group mb-0">
                                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Date" readOnly="readonly" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                              <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="tour form-control fw-bold">
                                      <option value>Select</option>
                                      <option value="ny">Family Package</option>
                                      <option value="sd">Honymoon Package</option>
                                      <option value="sj">Group Package</option>
                                      <option value="ph">Desert</option>
                                      <option value="nl">History</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                  <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="cabs">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                              <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="pickup form-control fw-bold">
                                      <option value>Select</option>
                                      <option value="ny">New York</option>
                                      <option value="sd">San Diego</option>
                                      <option value="sj">San Jose</option>
                                      <option value="ph">Philadelphia</option>
                                      <option value="nl">Nashville</option>
                                      <option value="sf">San Francisco</option>
                                      <option value="hu">Houston</option>
                                      <option value="sa">San Antonio</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="drop form-control fw-bold">
                                      <option value>Select</option>
                                      <option value="ny">New York</option>
                                      <option value="sd">San Diego</option>
                                      <option value="sj">San Jose</option>
                                      <option value="ph">Philadelphia</option>
                                      <option value="nl">Nashville</option>
                                      <option value="sf">San Francisco</option>
                                      <option value="hu">Houston</option>
                                      <option value="sa">San Antonio</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                              <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                  <div className="form-group mb-0">
                                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Pickup Date" readOnly="readonly" />
                                  </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                  <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </row> */}
              </div>
            </div>
            {/* ============================ Hero Banner End ================================== */}
            {/* =========================== Tours Offers Start ====================================== */}
            <section className="pt-5 pb-0">
              <div className="container">
                <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritems">
                      <Link to="#" className="card rounded-3 border br-dashed border-2 m-0">
                        <div className="offers-container d-flex align-items-center justify-content-start p-2">
                          <div className="offers-flex position-relative">
                            <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span className="label text-light bg-danger fw-medium">20% Off</span></div>
                            <div className="offers-pic"><img src="https://placehold.co/800x800" className="img-fluid rounded" width={110} alt="" />
                            </div>
                          </div>
                          <div className="offers-captions ps-3">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>Los Angeles</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3D/4N</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 Person</span>
                            </p>
                            <div className="booking-wrapes d-flex align-items-center justify-content-between">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$849 -
                                  $999</span></h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritems">
                      <Link to="#" className="card rounded-3 border br-dashed border-2 m-0">
                        <div className="offers-container d-flex align-items-center justify-content-start p-2">
                          <div className="offers-flex position-relative">
                            <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span className="label text-light bg-danger fw-medium">15% Off</span></div>
                            <div className="offers-pic"><img src="https://placehold.co/800x800" className="img-fluid rounded" width={110} alt="" />
                            </div>
                          </div>
                          <div className="offers-captions ps-3">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>United Kingdom</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3D/4N</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">2 Person</span>
                            </p>
                            <div className="booking-wrapes d-flex align-items-center justify-content-between">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$399 -
                                  $599</span></h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritems">
                      <Link to="#" className="card rounded-3 border br-dashed border-2 m-0">
                        <div className="offers-container d-flex align-items-center justify-content-start p-2">
                          <div className="offers-flex position-relative">
                            <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span className="label text-light bg-danger fw-medium">30% Off</span></div>
                            <div className="offers-pic"><img src="https://placehold.co/800x800" className="img-fluid rounded" width={110} alt="" />
                            </div>
                          </div>
                          <div className="offers-captions ps-3">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>France</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3D/4N</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 Person</span>
                            </p>
                            <div className="booking-wrapes d-flex align-items-center justify-content-between">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$569 -
                                  $799</span></h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* =========================== Tours Offers End ====================================== */}
            {/* ============================ Popular Hotels Start ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Popular Resorts In Chicago</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-title m-0 fw-bold">
                              <span>Mercure Singapore Tyrwhitt</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Delhi</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3.5 Km From Delhi</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-seegreen text-light">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                                <div className="d-flex align-items-start flex-column">
                                  <div className="text-muted-2 text-sm">Per Night</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-title m-0 fw-bold">
                              <span>Hotel Calmo Chinatown</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Delhi</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3.5 Km From Delhi</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-seegreen text-light">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                                <div className="d-flex align-items-start flex-column">
                                  <div className="text-muted-2 text-sm">Per Night</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-title m-0 fw-bold">
                              <span>Siloso Beach Resort - Sentosa</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Delhi</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3.5 Km From Delhi</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-seegreen text-light">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                                <div className="d-flex align-items-start flex-column">
                                  <div className="text-muted-2 text-sm">Per Night</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-title m-0 fw-bold">
                              <span>Royal Plaza on Scotts</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Delhi</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3.5 Km From Delhi</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-seegreen text-light">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                                <div className="d-flex align-items-start flex-column">
                                  <div className="text-muted-2 text-sm">Per Night</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-title m-0 fw-bold">
                              <span>Dorsett Balestier Singapore</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Delhi</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3.5 Km From Delhi</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-seegreen text-light">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                                <div className="d-flex align-items-start flex-column">
                                  <div className="text-muted-2 text-sm">Per Night</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-title m-0 fw-bold">
                              <span>Hotel Chancellor@Orchard</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Delhi</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3.5 Km From Delhi</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                                  <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-seegreen text-light">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                                <div className="d-flex align-items-start flex-column">
                                  <div className="text-muted-2 text-sm">Per Night</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Popular Hotels Start ================================== */}
            {/* ============================ Locations Design Start ================================== */}
            <section className="gray-simple">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Popular Location To Stay</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-3">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">New York</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">10 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">5 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">Los Angeles</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">12 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">4 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">San Diego</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">08 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">6 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">San Francisco</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">32 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">12 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">Houston</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">22 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">16 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">San Jose</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">25 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">15 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">Denver</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">29 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">14 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">California</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">22 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">12 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Locations Design Start ================================== */}
            {/* ============================ Popular Routes Design Start ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Hot International Routes</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center gy-4 gx-3">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="flight-search.html" className="card rounded-3 h-100 m-0 shadow-sm">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>New York</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Los Angeles</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="flight-search.html" className="card rounded-3 h-100 m-0 shadow-sm">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>San Diego</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>San Jose</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="flight-search.html" className="card rounded-3 h-100 m-0 shadow-sm">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>Dallas</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Philadelphia</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="flight-search.html" className="card rounded-3 h-100 m-0 shadow-sm">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>Nashville</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Chicago</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="flight-search.html" className="card rounded-3 h-100 m-0 shadow-sm">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>San Francisco</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Houston</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="flight-search.html" className="card rounded-3 h-100 m-0 shadow-sm">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>San Antonio</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Columbus</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="flight-search.html" className="card rounded-3 h-100 m-0 shadow-sm">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>Los Angeles</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Kansas City</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="flight-search.html" className="card rounded-3 h-100 m-0 shadow-sm">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>New Orleans</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Los Angeles</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center mt-5">
                  <div className="col-xl-12 col-md-12 col-lg-12 text-center">
                    <button type="button" className="btn btn-primary fw-medium px-5">Discover More Routes</button>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Popular Routes Design Start ================================== */}
            {/* ============================ Video Helps End ================================== */}
            <section className="bg-cover" style={{background: 'url(https://placehold.co/2200x800)no-repeat'}} data-overlay={5}>
              <div className="ht-150" />
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="video-play-wrap text-center">
                      <div className="video-play-btn d-flex align-items-center justify-content-center">
                        <Link to="https://www.youtube.com/watch?v=A8EI6JaFbv4" data-bs-toggle="modal" data-bs-target="#popup-video" className="square--90 circle bg-white fs-2 text-primary"><i className="fa-solid fa-play" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ht-150" />
            </section>
            {/* ============================ Video Helps End ================================== */}
            {/* ============================ Our Reviews Start ================================== */}
            <section className="gray-simple bg-cover" style={{background: 'url(assets/img/reviewbg.png)no-repeat'}}>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Loving Reviews By Our Customers</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-4 g-3">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" />
                          </div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Aman Diwakar</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" />
                          </div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Kunal M. Thakur</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" />
                          </div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Divya Talwar</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" />
                          </div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Karan Maheshwari</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" />
                          </div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Ritika Mathur</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Our Reviews End ================================== */}
            {/* ============================ Our Experience End ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="position-relative">
                      <img src="https://placehold.co/1000x1100" className="img-fluid rounded-3 position-relative z-1" alt="" />
                      <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-2">
                        <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3 z-2 shadow-wrap">
                          {/* Avatar group */}
                          <div className="me-4">
                            <h6 className="fw-normal">Client</h6>
                            {/* Avatar group */}
                            <ul className="avatar-group mb-0">
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <div className="avatar-img circle bg-primary">
                                  <span className="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* Rating */}
                          <div>
                            <h6 className="fw-normal mb-3">Rating</h6>
                            <h6 className="m-0">4.5<i className="fa-solid fa-star text-warning ms-1" /></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="bestExperience-block">
                      <p className="fw-medium text-primary text-md text-uppercase mb-0">Memories</p>
                      <h2 className="fw-bold lh-base">Our Attractive Experience And Services For you!</h2>
                      <p className="fw-light fs-6">Using dummy content or fake information in the Web design process can Fake data
                        can ensure a nice looking layout but it doesn’t reflect what a living, breathing application must
                        endure. Real data does. result in products with unrealistic assumptions and potentially serious design
                        flaws. A seemingly elegant design can quickly begin to bloat with unexpected content or break under the
                        weight of actual activity. </p>
                      <div className="d-inline-flex mt-4">
                        <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple me-3">
                          <h6 className="fw-bold fs-3 m-0">33</h6>
                          <p className="m-0 text-sm text-muted-2">Year Esperience</p>
                        </div>
                        <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple me-3">
                          <h6 className="fw-bold fs-3 m-0">78</h6>
                          <p className="m-0 text-sm text-muted-2">Destination Collaboration</p>
                        </div>
                        <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple">
                          <h6 className="fw-bold fs-3 m-0">25K</h6>
                          <p className="m-0 text-sm text-muted-2">Happy Customers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Our Experience End ================================== */}
            {/* ================================ Article Section Start ======================================= */}
            <section className="pt-0">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Trending &amp; Popular Articles</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center g-4">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog image" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Destination</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog image" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Journey</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog image" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Business</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ================================ Article Section Start ======================================= */}
            {/* ============================ Call To Action Start ================================== */}
            <div className="position-relative bg-cover py-5 bg-primary" style={{background: 'url(https://placehold.co/2200x1200)no-repeat'}} data-overlay={5}>
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="calltoAction-wraps position-relative py-5 px-4">
                      <div className="ht-40" />
                      <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 text-center">
                          <div className="calltoAction-title mb-5">
                            <h4 className="text-light fs-2 fw-bold lh-base m-0">Subscribe &amp; Get<br />Special Discount with GeoTrip.com
                            </h4>
                          </div>
                          <div className="newsletter-forms mt-md-0 mt-4">
                            <form>
                              <div className="row align-items-center justify-content-between bg-white rounded-3 p-2 gx-0">
                                <div className="col-xl-9 col-lg-8 col-md-8">
                                  <div className="form-group m-0">
                                    <input type="text" className="form-control bold ps-1 border-0" placeholder="Enter Your Mail!" />
                                  </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4">
                                  <div className="form-group m-0">
                                    <button type="button" className="btn btn-dark fw-medium full-width">Submit<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="ht-40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================ Call To Action Start ================================== */}
            {/* ============================ Footer Start ================================== */}
            <Footer/>
            {/* ============================ Footer End ================================== */}
            {/* Log In Modal */}
            <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div className="modal-content" id="loginmodal">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6">Sign In / Register</h4>
                    <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
                  </div>
                  <div className="modal-body">
                    <div className="modal-login-form py-4 px-md-3 px-0">
                      <form>
                        <div className="form-floating mb-4">
                          <input type="email" className="form-control" placeholder="name@example.com" />
                          <label>User Name</label>
                        </div>
                        <div className="form-floating mb-4">
                          <input type="password" className="form-control" placeholder="Password" />
                          <label>Password</label>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Log In</button>
                        </div>
                        <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                          <div className="modal-flex-first">
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="checkbox" id="savepassword" defaultValue="option1" />
                              <label className="form-check-label" htmlFor="savepassword">Save Password</label>
                            </div>
                          </div>
                          <div className="modal-flex-last">
                            <Link to="#" onClick={(e)=>{e.preventDefault()}} className="text-primary fw-medium">Forget Password?</Link>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="prixer px-3">
                      <div className="devider-wraps position-relative">
                        <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
                      </div>
                    </div>
                    <div className="social-login py-4 px-2">
                      <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 full-width"><i className="fa-brands fa-facebook color--facebook fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-whatsapp color--whatsapp fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-linkedin color--linkedin fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-dribbble color--dribbble fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-twitter color--twitter fs-2" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer align-items-center justify-content-center">
                    <p>Don't have an account yet?<Link to="signup.html" className="text-primary fw-medium ms-1">Sign Up</Link></p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Modal */}
            {/* Choose Currency Modal */}
            <div className="modal modal-lg fade" id="currencyModal" tabIndex={-1} aria-labelledby="currenyModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="currenyModalLabel">Select Your Currency</h4>
                    <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
                  </div>
                  <div className="modal-body">
                    <div className="allCurrencylist">
                      <div className="suggestedCurrencylist-wrap mb-4">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">Suggested Currency For you</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">United State Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Pound Sterling</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency active" to="#">
                                <div className="text-dark text-md fw-medium">Indian Rupees</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Euro</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Australian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Thai Baht</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="suggestedCurrencylist-wrap">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">All Currencies</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">United State Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Property currency</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Argentine Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Azerbaijani Manat</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Australian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Bahraini Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Brazilian Real</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Bulgarian Lev</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Canadian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Chilean Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Colombian Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Danish Krone</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Egyptian Pound</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Hungarian Forint</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Japanese Yen</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Jordanian Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Kuwaiti Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Malaysian Ringgit</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Singapore Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Choose Countries Modal */}
            <div className="modal modal-lg fade" id="countryModal" tabIndex={-1} aria-labelledby="countryModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="countryModalLabel">Select Your Country</h4>
                    <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
                  </div>
                  <div className="modal-body">
                    <div className="allCountrieslist">
                      <div className="suggestedCurrencylist-wrap mb-4">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">Suggested Countries For you</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Pound Sterling</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry active" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Indian Rupees</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Euro</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Thai Baht</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="suggestedCurrencylist-wrap">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">All Countries</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Property currency</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Argentine Peso</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Azerbaijani Manat</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Bahraini Dinar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Brazilian Real</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Bulgarian Lev</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Canadian Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Chilean Peso</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Colombian Peso</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Danish Krone</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Egyptian Pound</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Hungarian Forint</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Japanese Yen</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Jordanian Dinar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Kuwaiti Dinar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Malaysian Ringgit</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Singapore Dollar</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Video Modal */}
            <div className="modal fade" id="popup-video" tabIndex={-1} role="dialog" aria-labelledby="popupvideo" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" id="popupvideo">
                  <iframe className="embed-responsive-item full-width" height={480} src="https://www.youtube.com/embed/qN3OueBm9F4?rel=0" frameBorder={0} allowFullScreen />
                </div>
              </div>
            </div>
            {/* End Video Modal */}
            {/**/}
          </div>
          {/* ============================================================== */}
          {/* End Wrapper */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* All Jquery */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* This page plugins */}
          {/* ============================================================== */}
        </div>
      );
    }


    export default Home06;