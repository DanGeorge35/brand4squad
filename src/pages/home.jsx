import React, { Component } from "react";

import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <Banner />

        <div className="section  " style={{ backgroundColor: "#e7e7e7" }}>
          <div className="aboutInfo pe-3 px-3 pb-5 mb-5">
            <p
              className=""
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#d98631",
              }}
            >
              OUR BRANDING SERVICES
            </p>
            <label className="aboutContent" style={{ color: "#d98631" }}>
              Our cutting-edge branding solution platform is dedicated to
              helping entrepreneurs and professionals establish a unique and
              compelling brand identity.
            </label>
          </div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-4 ">
                <div className=" rounded-4 text-center p-0  my-4 service">
                  <div className=" p-4">
                    <img
                      src="./logodesign.gif"
                      className="service_icon"
                      alt="logo"
                    />
                  </div>
                  <div className="p-3 bg-warning">
                    <b>LOGO DESIGN</b>

                    <div className="p-3 service_contents">
                      <span>
                        Let's build a facinating logo that encapsulates your
                        brand's essence establishing a strong brand identity
                        making you instantly recognizable and conveying the core
                        values and personality of your business.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className=" rounded-4 text-center p-0 service  ">
                  <div className=" p-4">
                    <img
                      src="./identity.gif"
                      className="service_icon"
                      alt="logo"
                    />
                  </div>
                  <div className=" bg-warning">
                    <div className="p-3">
                      <b>VISUAL IDENTITY</b>

                      <div className="p-3">
                        <span>
                          We will create a unified and professional brand
                          experience that resonates with your audience and
                          strengthens your brand recognition. We will help
                          define your brand's personality, selecting appropriate
                          colors, typography, and imagery, we'll make your brand
                          easily identifiable and memorable to your potential
                          clients.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className=" rounded-4 text-center p-0 service my-4">
                  <div className=" p-4">
                    <img
                      src="./messaging.gif"
                      className="service_icon"
                      alt="logo"
                    />
                  </div>
                  <div className="p-3 bg-warning">
                    <b>BRAND MESSAGING</b>

                    <div className="p-3">
                      <span>
                        We help you create a clear and impactful brand messages
                        that conveys your brand's core values & benefits, and
                        compells value proposition to your target audience to
                        drives engagement and build your clients base.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" section bg-gradient">
          <div className="text-center pe-3 px-3">
            <p
              className=""
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              GALLERY
            </p>
            <label
              className="pb-5"
              style={{ color: "#d98631", fontSize: "20px" }}
            >
              Check out some of our previous works
            </label>
          </div>
          <div className="container pt-5 ">
            <div className="row">
              <div className="col-lg-3 ">
                <div
                  className=" rounded-4 text-center p-0  my-4 gallery"
                  style={{ backgroundImage: "url(b1.jpg)", height: "300px" }}
                ></div>
              </div>
              <div className="col-lg-3 ">
                <div
                  className=" rounded-4 text-center p-0  my-4 gallery"
                  style={{ backgroundImage: "url(b2.jpg)", height: "300px" }}
                ></div>
              </div>
              <div className="col-lg-3 ">
                <div
                  className=" rounded-4 text-center p-0  my-4 gallery"
                  style={{ backgroundImage: "url(b3.jpg)", height: "300px" }}
                ></div>
              </div>
              <div className="col-lg-3 ">
                <div
                  className=" rounded-4 text-center p-0  my-4 gallery"
                  style={{ backgroundImage: "url(b4.jpg)", height: "300px" }}
                ></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 ">
                <div
                  className=" rounded-4 text-center p-0  my-4 gallery"
                  style={{ backgroundImage: "url(b1.jpg)", height: "300px" }}
                ></div>
              </div>
              <div className="col-lg-3 ">
                <div
                  className=" rounded-4 text-center p-0  my-4 gallery"
                  style={{ backgroundImage: "url(b2.jpg)", height: "300px" }}
                ></div>
              </div>
              <div className="col-lg-3 ">
                <div
                  className=" rounded-4 text-center p-0  my-4 gallery"
                  style={{ backgroundImage: "url(b3.jpg)", height: "300px" }}
                ></div>
              </div>
              <div className="col-lg-3 ">
                <div
                  className=" rounded-4 text-center p-0  my-4 gallery"
                  style={{ backgroundImage: "url(b4.jpg)", height: "300px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="customer_section">
          <div className=" pe-3 px-3">
            <p
              className="text-center"
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#d98631",
              }}
            >
              HAPPY CLIENTS
            </p>
          </div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-2 ">
                <div className=" rounded-4 text-center p-0  my-4 customer_logo">
                  <div className=" p-4">
                    <img
                      src="./photo.gif"
                      className="service_icon"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 ">
                <div className=" rounded-4 text-center p-0  my-4 customer_logo">
                  <div className=" p-4">
                    <img
                      src="./photo.gif"
                      className="service_icon"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 ">
                <div className=" rounded-4 text-center p-0  my-4 customer_logo">
                  <div className=" p-4">
                    <img
                      src="./photo.gif"
                      className="service_icon"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 ">
                <div className=" rounded-4 text-center p-0  my-4 customer_logo">
                  <div className=" p-4">
                    <img
                      src="./photo.gif"
                      className="service_icon"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 ">
                <div className=" rounded-4 text-center p-0  my-4 customer_logo">
                  <div className=" p-4">
                    <img
                      src="./photo.gif"
                      className="service_icon"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 ">
                <div className=" rounded-4 text-center p-0  my-4 customer_logo">
                  <div className=" p-4">
                    <img
                      src="./photo.gif"
                      className="service_icon"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
