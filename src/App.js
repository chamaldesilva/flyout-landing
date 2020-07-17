import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <section id="section1">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid ">
            {/* Brand */}
            <a className="navbar-brand mb-0" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="116"
                height="64"
                fill="none"
                viewBox="0 0 116 64"
              >
                <path
                  fill="#7442D3"
                  d="M87.616 28.125c-1.066 2.118-4.936 2.727-8.052 2.717-2.896 0-4.162-.382-6.316-1.157.492-3.555 2.322-18.929 24.208-27.794.826-.33 1.726-.703 2.646-1.013.523 1.323.795 2.728.816 4.144-.011 6.612-6.683 10.952-13.375 13.07 3.587-.103 9.234-1.23 13.343-2.139v.114c-.01 5.92-6.724 9.795-12.57 9.784-1.913-.04-3.816-.32-5.657-.816 1.13 1.602 3.012 2.48 4.957 3.09z"
                />
                <path
                  fill="#000"
                  d="M9.659 55.042H4.462V30.926h17.275v4.516H9.659v5.093h11.816v4.516H9.66v9.99zM28.879 55.04h-4.654V30.925h4.643V55.04h.01zM32.79 61.88l.69-4.123c.44.197.93.29 1.464.29 1.244 0 2.06-.424 2.457-1.271l.66-1.478-7.174-17.72h4.977l4.612 12.151 4.611-12.15h5.01l-8.304 20.323c-.606 1.54-1.464 2.624-2.562 3.234-1.098.61-2.478.95-4.13.992-.858 0-1.632-.083-2.311-.248zM66.828 52.819c-1.705 1.766-3.974 2.655-6.808 2.655-2.834 0-5.093-.889-6.787-2.655-1.694-1.767-2.54-3.947-2.54-6.53s.846-4.753 2.54-6.51c1.694-1.756 3.964-2.634 6.787-2.634 2.834 0 5.103.878 6.807 2.634 1.705 1.757 2.563 3.927 2.563 6.51 0 2.583-.858 4.752-2.563 6.53zm-10.102-2.893c.805.97 1.903 1.467 3.294 1.467 1.39 0 2.5-.486 3.315-1.467.815-.972 1.223-2.19 1.223-3.637 0-1.426-.408-2.625-1.223-3.596-.816-.971-1.924-1.467-3.315-1.467-1.39 0-2.489.486-3.294 1.467-.805.971-1.203 2.18-1.203 3.596 0 1.446.398 2.655 1.203 3.637zM88.683 55.04H84.04v-2.2c-1.59 1.756-3.66 2.634-6.222 2.634-1.903 0-3.325-.486-4.277-1.447-.952-.96-1.433-2.314-1.433-4.05V37.58h4.643v10.59c0 2.15 1.088 3.224 3.252 3.224 1.632 0 2.98-.662 4.026-1.994v-11.82h4.643V55.04h.01zM98.858 55.474c-1.632 0-2.876-.413-3.734-1.23-.857-.816-1.275-2.004-1.275-3.544v-9.113H90.92V37.58h2.928v-4.774h4.684v4.774h3.587v4.008h-3.587v7.884c0 .558.147 1.013.44 1.374.292.362.68.537 1.171.537.732 0 1.265-.165 1.61-.506l.994 3.472c-.868.754-2.165 1.126-3.89 1.126zM106.951 31.483h-1.359v4.205h-.617v-4.205h-1.36v-.569h3.336v.569zm5.48 4.215h-.617v-3.947l-1.642 3.947h-.178l-1.641-3.947v3.947h-.617v-4.773h.941l1.401 3.471 1.401-3.471h.941v4.773h.011z"
                />
              </svg>
            </a>
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              {/* Toggler */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fe fe-x" />
              </button>
              {/* Navigation */}
              <ul className="navbar-nav ml-md-9 mt-3">
                <li className="nav-item ">
                  <a
                    className="nav-link "
                    id="navbarLandings"
                    href="index.html#"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Why Flyout
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link "
                    id="navbarPages"
                    href="index.html#"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Monthly Stats
                  </a>
                </li>

                <li className="nav-item ">
                  <a
                    className="nav-link "
                    id="navbarAccount"
                    href="index.html#"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Success Stories
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link "
                    id="navbarDocumentation"
                    data-toggle="dropdown"
                    href="index.html#"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Contact Us
                  </a>
                </li>

                <li className="nav-item ml-md-10">
                  <a
                    className="nav-link "
                    id="navbarDocumentation"
                    data-toggle="dropdown"
                    href="index.html#"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
              {/* Button */}

              <a
                id="get-started"
                className="navbar-btn btn btn-primary lift ml-auto  mt-5 pt-3"
                href="https://themes.getbootstrap.com/product/landkit/"
                target="_blank"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>

        <div style={{ paddingTop: '90px' }}>
          <div className="container-fluid ">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-2">
                {/* Image */}
                <img
                  id=" hero_illustration"
                  src="assets/img/illustrations/hero.png"
                  className="img-fluid mw-100 mb-6 mb-md-0"
                  alt="..."
                />
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1">
                {/* Heading */}
                <h1 id="Get-paid" className=" text-md-left">
                  Get paid for something <br /> you're already doing.
                </h1>
                {/* Text */}
                <p
                  id="flyouts"
                  style={{ color: '#4d4d4d' }}
                  className=" text-center text-lg-left  mb-8 mb-lg-8"
                >
                  Flyout is a free, simple way to earn money by placing
                  sponsored content on your blog.
                </p>

                {/* Buttons */}
                <div class="input-group mb-3">
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    placeholder="Your email address "
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                    id="buttonssecondary"
                  />
                  <div class="input-group-append ml-4">
                    <button
                      class="btn bg-primary shadow lift mr-1"
                      id="buttonsprimary"
                      onclick="form_step_1()"
                      type="submit"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>{' '}
            {/* / .row */}
          </div>{' '}
          {/* / .container */}
        </div>
      </section>

      <section style={{ marginTop: '120px' }}>
        <div className="container-fluid ">
          <div className="row align-items-center ">
            <h1 className="Join-over-1868-bloggers">
              Join over <b> 1868 bloggers </b>, who have chosen Flyout to
              monetize their blogs.
            </h1>
            <div className="col-12 slick-slider scrolling-wrapper px-0 justify-content-between">
              <div className="items ">
                <img className="imgScroll " src="assets/img/im/e6.png" alt="" />
              </div>

              <div className="items">
                <img className="imgScroll " src="assets/img/im/e7.png" alt="" />
              </div>

              <div className="items">
                <img className="imgScroll " src="assets/img/im/e8.png" alt="" />
              </div>

              <div className="items">
                <img className="imgScroll " src="assets/img/im/e9.png" alt="" />
              </div>

              <div className="items">
                <img
                  className="imgScroll "
                  src="assets/img/im/e10.png"
                  alt=""
                />
              </div>

              <div className="items">
                <img
                  className="imgScroll "
                  src="assets/img/im/e11.png"
                  alt=""
                />
              </div>

              <div className="items">
                <img
                  className="imgScroll "
                  src="assets/img/im/e12.png"
                  alt=""
                />
              </div>

              <div className="items">
                <img
                  className="imgScroll "
                  src="assets/img/im/e13.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div id="why-cont" className="col-xl-5 col-12 text-center">
              <h1 className="Why-choose-Fly6">Why choose Flyout?</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10 col-12 text-center ">
              <h1 className="Getting-started-with-Flyout">
                Getting started with Flyout takes literally 30 seconds. A 3 step
                process is what you need to follow to start monetizing your
                blog.
              </h1>
            </div>
          </div>

          <div
            style={{ marginTop: '48px' }}
            class="row justify-content-between"
          >
            <div class="col-sm-4 col33 ">
              <div class="card Rectangle-5 ">
                <div class="card-body text-center">
                  <img
                    className="iconsbrandiconsetup"
                    alt=""
                    src="/assets/img/pics/i0.svg"
                  ></img>
                  <div className="row justify-content-center">
                    <div className="col-xl-7 col-12">
                      <p class="Quick-Setup">Quick Setup</p>
                    </div>
                  </div>

                  <div className="row justify-content-center  ">
                    <div className="col-12 col33">
                      <div className="d-flex flex-column"></div>
                      <p class="Easy-to-use">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          className="mr-1"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#17B31B"
                            d="M14.232 3.732c.476-.476 1.248-.476 1.724 0 .439.44.473 1.13.1 1.609l-.1.115-8.38 8.378c-.439.44-1.13.474-1.608.102l-.115-.102-3.809-3.808c-.475-.476-.475-1.248 0-1.724.44-.44 1.131-.473 1.61-.101l.114.101 2.947 2.946 7.517-7.516z"
                          />
                        </svg>{' '}
                        Easy to use
                      </p>

                      <p class="Easy-to-use">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          className="mr-1"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#17B31B"
                            d="M14.232 3.732c.476-.476 1.248-.476 1.724 0 .439.44.473 1.13.1 1.609l-.1.115-8.38 8.378c-.439.44-1.13.474-1.608.102l-.115-.102-3.809-3.808c-.475-.476-.475-1.248 0-1.724.44-.44 1.131-.473 1.61-.101l.114.101 2.947 2.946 7.517-7.516z"
                          />
                        </svg>{' '}
                        Kick-ass product
                      </p>

                      <p class="Easy-to-use">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          className="mr-1"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#17B31B"
                            d="M14.232 3.732c.476-.476 1.248-.476 1.724 0 .439.44.473 1.13.1 1.609l-.1.115-8.38 8.378c-.439.44-1.13.474-1.608.102l-.115-.102-3.809-3.808c-.475-.476-.475-1.248 0-1.724.44-.44 1.131-.473 1.61-.101l.114.101 2.947 2.946 7.517-7.516z"
                          />
                        </svg>{' '}
                        100% free for blog registration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4 col33 ">
              <div class="card Rectangle-5 ">
                <div class="card-body text-center">
                  <img
                    className="iconsbrandiconsetup"
                    alt=""
                    src="/assets/img/pics/i1.svg"
                  ></img>
                  <div className="row justify-content-center">
                    <div className="col-xl-7 col-12">
                      <p class="Quick-Setup">Full Control</p>
                    </div>
                  </div>

                  <div className="row justify-content-center  ">
                    <div className="col-12 ">
                      <div className="d-flex flex-column"></div>
                      <p class="Easy-to-use">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          className="mr-1"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#17B31B"
                            d="M14.232 3.732c.476-.476 1.248-.476 1.724 0 .439.44.473 1.13.1 1.609l-.1.115-8.38 8.378c-.439.44-1.13.474-1.608.102l-.115-.102-3.809-3.808c-.475-.476-.475-1.248 0-1.724.44-.44 1.131-.473 1.61-.101l.114.101 2.947 2.946 7.517-7.516z"
                          />
                        </svg>{' '}
                        Set traffic range
                      </p>

                      <p class="Easy-to-use">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          className="mr-1"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#17B31B"
                            d="M14.232 3.732c.476-.476 1.248-.476 1.724 0 .439.44.473 1.13.1 1.609l-.1.115-8.38 8.378c-.439.44-1.13.474-1.608.102l-.115-.102-3.809-3.808c-.475-.476-.475-1.248 0-1.724.44-.44 1.131-.473 1.61-.101l.114.101 2.947 2.946 7.517-7.516z"
                          />
                        </svg>{' '}
                        Select your own price
                      </p>

                      <p class="Easy-to-use">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          className="mr-1"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#17B31B"
                            d="M14.232 3.732c.476-.476 1.248-.476 1.724 0 .439.44.473 1.13.1 1.609l-.1.115-8.38 8.378c-.439.44-1.13.474-1.608.102l-.115-.102-3.809-3.808c-.475-.476-.475-1.248 0-1.724.44-.44 1.131-.473 1.61-.101l.114.101 2.947 2.946 7.517-7.516z"
                          />
                        </svg>
                        Customize sponsored content
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4 col33">
              <div class="card Rectangle-5 ">
                <div class="card-body text-center">
                  <img
                    className="iconsbrandiconsetup"
                    alt=""
                    src="/assets/img/pics/i2.svg"
                  ></img>
                  <div className="row justify-content-center">
                    <div className=" col-12">
                      <p class="Quick-Setup3">Monthly Payments</p>
                    </div>
                  </div>

                  <div className="row justify-content-center  ">
                    <div className="col-12 ">
                      <div className="d-flex flex-column"></div>
                      <p class="Easy-to-use">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          className="mr-1"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#17B31B"
                            d="M14.232 3.732c.476-.476 1.248-.476 1.724 0 .439.44.473 1.13.1 1.609l-.1.115-8.38 8.378c-.439.44-1.13.474-1.608.102l-.115-.102-3.809-3.808c-.475-.476-.475-1.248 0-1.724.44-.44 1.131-.473 1.61-.101l.114.101 2.947 2.946 7.517-7.516z"
                          />
                        </svg>{' '}
                        Easy payouts
                      </p>

                      <p class="Easy-to-use">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          className="mr-1"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#17B31B"
                            d="M14.232 3.732c.476-.476 1.248-.476 1.724 0 .439.44.473 1.13.1 1.609l-.1.115-8.38 8.378c-.439.44-1.13.474-1.608.102l-.115-.102-3.809-3.808c-.475-.476-.475-1.248 0-1.724.44-.44 1.131-.473 1.61-.101l.114.101 2.947 2.946 7.517-7.516z"
                          />
                        </svg>{' '}
                        No commission cuts
                      </p>

                      <p class="Easy-to-use">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          className="mr-1"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#17B31B"
                            d="M14.232 3.732c.476-.476 1.248-.476 1.724 0 .439.44.473 1.13.1 1.609l-.1.115-8.38 8.378c-.439.44-1.13.474-1.608.102l-.115-.102-3.809-3.808c-.475-.476-.475-1.248 0-1.724.44-.44 1.131-.473 1.61-.101l.114.101 2.947 2.946 7.517-7.516z"
                          />
                        </svg>
                        No minimum payout amount
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div id="why-cont" className="col-xl-5 col-12 text-center">
              <h1 className="Why-choose-Fly6">Monthly Stats</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10 col-12 text-center ">
              <h1 className="Getting-started-with-Flyout">
                Flyout has helped millions of people complete over 1.5 million
                sponsered posts for more than 507 advertisers.
              </h1>
            </div>
          </div>

          <div className="row mt-10 justify-content-between  ">
            <div className="col-12 d-flex flex-column  flex-xl-row  flex-lg-row">
              <div className="col-lg-2 mr-lg-auto col33  text-center text-md-left">
                <p className="statHead">1203</p>
                <p className="Active-publishers">Active publisher</p>
              </div>

              <div className="col-lg-2   col33  text-center text-md-left">
                <p className="statHead">2316</p>
                <p className="New-publishers-this-month">
                  New publishers this month
                </p>
              </div>

              <div className="col-lg-2  ml-lg-auto  col33 mr-10 text-center text-md-left">
                <p className="statHead">$3,31,001</p>
                <p className="Total-transactions-this-month">
                  Total transactions this month
                </p>
              </div>

              <div className="col-lg-2 ml-lg-auto  col33  text-center text-md-left">
                <p className="statHead">9313</p>
                <p className="Offer-publishers-got-this-month">
                  Offer publishers got this month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section4">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div id="why-cont" className="col-xl-5 col-12 text-center">
              <h1 className="Why-choose-Fly6">Success Stories</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10 col-12 text-center ">
              <h1 className="Getting-started-with-Flyout">
                Meet people doing more of what they love and get inspired by
                people using Flyout to help fund their passions.
              </h1>
            </div>
          </div>

          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide "
            data-ride="carousel"
            data-interval="4000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div style={{ marginTop: '48px' }} className="row">
                  <div
                    style={{ marginTop: '97px' }}
                    className="col-xl-7 col-12 text-left col33"
                  >
                    <div id="section4Column" className="d-flex flex-column ">
                      <img
                        className="iconstestimonialscomma"
                        src="assets/img/icons/i1.svg"
                        alt=""
                      ></img>
                      <p style={{ marginTop: '24px' }} id="FaceDesc">
                        “I discovered about Flyout through one of the Facebook
                        group and I thought of trying it. Within a time-frame of
                        3 weeks - I got my first sponsored post.”
                      </p>

                      <div
                        style={{ marginTop: '24px' }}
                        className="d-flex flex-row"
                      >
                        <p className="Ravi-Tamada ">Ravi Tamada </p>
                        <p
                          style={{ marginLeft: '8px' }}
                          className="Founder-Androidhive"
                        >
                          Founder @ Androidhive
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-5 col-12 align-content-start px-0 ">
                    <img src="assets/img/testimonial/t1.png" alt=""></img>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div style={{ marginTop: '48px' }} className="row">
                  <div
                    style={{ marginTop: '97px' }}
                    className="col-xl-7 col-12 text-left col33"
                  >
                    <div id="section4Column" className="d-flex flex-column ">
                      <img
                        className="iconstestimonialscomma"
                        src="assets/img/icons/i1.svg"
                        alt=""
                      ></img>
                      <p style={{ marginTop: '24px' }} id="FaceDesc">
                        “I discovered about Flyout through one of the Facebook
                        group and I thought of trying it. Within a time-frame of
                        3 weeks - I got my first sponsored post.”
                      </p>

                      <div
                        style={{ marginTop: '24px' }}
                        className="d-flex flex-row"
                      >
                        <p className="Ravi-Tamada ">Ravi Tamada </p>
                        <p
                          style={{ marginLeft: '8px' }}
                          className="Founder-Androidhive"
                        >
                          Founder @ Androidhive
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-5 col-12 align-content-start px-0">
                    <img src="assets/img/testimonial/t1.png" alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row mt-6 text-center  px-lg-14">
        <div
          style={{
            paddingTop: '65px',
            paddingBottom: '63px',
            marginBottom: '81px',
          }}
          className="col Rectangle-13 mt-10 mt-md-0"
        >
          <h2 className="Get-started-with-Flyout-today ">
            Get started with Flyout today
          </h2>

          <p
            style={{ paddingTop: '16px' }}
            className="Flyout-is-a-free mb-8 mb-md-0 px-2 px-md-0"
          >
            Flyout is a free, simple way to earn money by placing sponsored
            content on your blog.
          </p>

          <div style={{ paddingTop: '40px' }} className=" flex-lg-row">
            <a className="btn buttonsprimary mb-4 mb-md-0" href="/">
              {' '}
              Get Started
            </a>

            <a
              style={{ marginLeft: '27px' }}
              className="btn btn-outline buttonssecondary"
              href="/"
            >
              {' '}
              Join Flyout Community
            </a>
          </div>
        </div>
      </section>

      <footer className="">
        <div className="container-fluid text-left">
          <div className="row ">
            <div className="col-12 col-lg-3"></div>
            <div className="col-12 col-lg-9 pull-left"> </div>

            <div className="col-12 col-md-4 col-lg-2 pl-4">
              {/* Brand */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="116"
                height="64"
                fill="none"
                viewBox="0 0 116 64"
              >
                <path
                  fill="#7442D3"
                  d="M87.616 28.125c-1.066 2.118-4.936 2.727-8.052 2.717-2.896 0-4.162-.382-6.316-1.157.492-3.555 2.322-18.929 24.208-27.794.826-.33 1.726-.703 2.646-1.013.523 1.323.795 2.728.816 4.144-.011 6.612-6.683 10.952-13.375 13.07 3.587-.103 9.234-1.23 13.343-2.139v.114c-.01 5.92-6.724 9.795-12.57 9.784-1.913-.04-3.816-.32-5.657-.816 1.13 1.602 3.012 2.48 4.957 3.09z"
                />
                <path
                  fill="#000"
                  d="M9.659 55.042H4.462V30.926h17.275v4.516H9.659v5.093h11.816v4.516H9.66v9.99zM28.879 55.04h-4.654V30.925h4.643V55.04h.01zM32.79 61.88l.69-4.123c.44.197.93.29 1.464.29 1.244 0 2.06-.424 2.457-1.271l.66-1.478-7.174-17.72h4.977l4.612 12.151 4.611-12.15h5.01l-8.304 20.323c-.606 1.54-1.464 2.624-2.562 3.234-1.098.61-2.478.95-4.13.992-.858 0-1.632-.083-2.311-.248zM66.828 52.819c-1.705 1.766-3.974 2.655-6.808 2.655-2.834 0-5.093-.889-6.787-2.655-1.694-1.767-2.54-3.947-2.54-6.53s.846-4.753 2.54-6.51c1.694-1.756 3.964-2.634 6.787-2.634 2.834 0 5.103.878 6.807 2.634 1.705 1.757 2.563 3.927 2.563 6.51 0 2.583-.858 4.752-2.563 6.53zm-10.102-2.893c.805.97 1.903 1.467 3.294 1.467 1.39 0 2.5-.486 3.315-1.467.815-.972 1.223-2.19 1.223-3.637 0-1.426-.408-2.625-1.223-3.596-.816-.971-1.924-1.467-3.315-1.467-1.39 0-2.489.486-3.294 1.467-.805.971-1.203 2.18-1.203 3.596 0 1.446.398 2.655 1.203 3.637zM88.683 55.04H84.04v-2.2c-1.59 1.756-3.66 2.634-6.222 2.634-1.903 0-3.325-.486-4.277-1.447-.952-.96-1.433-2.314-1.433-4.05V37.58h4.643v10.59c0 2.15 1.088 3.224 3.252 3.224 1.632 0 2.98-.662 4.026-1.994v-11.82h4.643V55.04h.01zM98.858 55.474c-1.632 0-2.876-.413-3.734-1.23-.857-.816-1.275-2.004-1.275-3.544v-9.113H90.92V37.58h2.928v-4.774h4.684v4.774h3.587v4.008h-3.587v7.884c0 .558.147 1.013.44 1.374.292.362.68.537 1.171.537.732 0 1.265-.165 1.61-.506l.994 3.472c-.868.754-2.165 1.126-3.89 1.126zM106.951 31.483h-1.359v4.205h-.617v-4.205h-1.36v-.569h3.336v.569zm5.48 4.215h-.617v-3.947l-1.642 3.947h-.178l-1.641-3.947v3.947h-.617v-4.773h.941l1.401 3.471 1.401-3.471h.941v4.773h.011z"
                />
              </svg>
            </div>

            <div className="col-6 col-md-4 col-lg-2 ">
              <ul className="list-unstyled text-gray-800 mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a href="index.html#!" className="text-reset">
                    Contact
                  </a>
                </li>
                <li className="mb-3">
                  <a href="index.html#!" className="text-reset">
                    FAQ's{' '}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <ul className="list-unstyled text-gray-800 mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a href="index.html#!" className="text-reset">
                    Help Center
                  </a>
                </li>
                <li className="mb-3">
                  <a href="index.html#!" className="text-reset">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
              <ul className="list-unstyled text-gray-800 mb-0">
                <li className="mb-3">
                  <a href="index.html#!" className="text-reset">
                    Privacy
                  </a>
                </li>
                <li className="mb-3">
                  <a href="index.html#!" className="text-reset">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <ul className="list-unstyled text-gray-800  mb-0">
                <li className="mb-3">
                  <a href="index.html#!" className="text-reset">
                    Affiliate Policy
                  </a>
                </li>
                <li className="mb-3">
                  <a href="index.html#!" className="text-reset">
                    Data Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <ul className="list-unstyled text-gray-800  mb-0">
                <li className="mb-3">
                  <a href="index.html#!" className="text-reset">
                    Facebook
                  </a>
                </li>
                <li className="mb-3">
                  <a href="index.html#!" className="text-reset">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* / .row */}

          <div className="footerBorder"></div>

          <div className="row justify-content-center">
            <div className="col-12 FLYOUT-2020 text-center">
              Flyout 2020, All rights reserved.
            </div>
          </div>
        </div>

        {/* / .container */}
      </footer>
    </div>
  );
}

export default App;
