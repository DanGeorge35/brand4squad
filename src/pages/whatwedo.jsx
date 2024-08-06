/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SiteSlide from "../components/siteSlide";

class Whatwedo extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="about-page ">
          <div className="d-flex   align-items-center justify-content-center">
            <h1>WHAT WE DO</h1>
          </div>
        </div>

        <div className=" bg-img ">
          <div className="section ">
            <div className="aboutInfo pe-3 px-3 pb-5 mb-5">
              <p
                className="w3-medium"
                style={{
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                OUR BRANDING SERVICES
              </p>
              <label
                className="aboutContent txtsmall"
                style={{ color: "#fff" }}
              >
                In a complex, dynamic and connected world, we believe business
                performance will be increasingly defined by organisations’
                ability to strategically manage their brand through change.
              </label>
            </div>
            <div className="w3-container ">
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
                      <b className=" w3-medium">LOGO DESIGN</b>

                      <div className="p-3 service_contents">
                        <span className="w3-small">
                          Let's build a facinating logo that encapsulates your
                          brand's essence establishing a strong brand identity
                          making you instantly recognizable and conveying the
                          core values and personality of your business.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
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
                        <b className=" w3-medium">VISUAL IDENTITY</b>

                        <div className="p-3">
                          <span className="w3-small">
                            We will create a unified and professional brand
                            experience that resonates with your audience and
                            strengthens your brand recognition. We will help
                            define your brand's personality, selecting
                            appropriate colors, typography, and imagery, we'll
                            make your brand easily identifiable and memorable to
                            your potential clients.
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
                      <b className=" w3-medium">BRAND MESSAGING</b>

                      <div className="p-3">
                        <span className="w3-small">
                          We help you create a clear and impactful brand
                          messages that conveys your brand's core values &
                          benefits, and compells value proposition to your
                          target audience to drives engagement and build your
                          clients base.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" section container">
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <p
                  className=" text-warning w3-medium"
                  style={{
                    fontWeight: "700",
                  }}
                >
                  We provide Comprehensive branding services that:
                </p>
                <div className="">
                  <p style={{ paddingTop: "20x" }}></p>
                  <label className=" w3-small" style={{ textAlign: "justify" }}>
                    <ul>
                      <li>Instantly elevates YOUR brand visibility!</li>
                      <li>
                        {" "}
                        Ensures YOUR brand stands out in a crowded market!
                      </li>
                      <li>Builds trust and credibility with YOUR audience</li>
                      <li> Delivers a consistent and professional image!</li>
                      <li>Increase YOUR market's reach and influence!</li>
                      <li> Boosts YOUR competitive edge!</li>
                      <li> Attracts and retains YOUR ideal customers!</li>
                      <li>Moximizes YOUR brands impact</li>
                      <li> Empowers YOU with a cohesive brand strategy!</li>
                    </ul>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="brand.png"
                style={{ width: "100%" }}
                className="animate__animated  animate__slow animate__pulse animate__infinite"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Whatwedo;
