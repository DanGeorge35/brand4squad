import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class Banner extends Component {
  render() {
    const images = [
      {
        url: "./lady-bg2.jpg",
        caption1: "Explore",
        caption2: "Branded <br> Xsquad",
        caption3:
          "A cutting-edge branding solution designed for entrepreneurs and professionals across various industries seeking to establish a unique brand identity. This innovative platform offers a comprehensive suite of professional branding services tailored to meet the unique needs of each client.",
        action: {
          title: "Contact Us",
          url: "https://calendly.com/squadtalent/client-engagement-call?month=2024-07",
        },
      },
    ];
    return (
      <Slide autoplay={false} arrows={false} indicators={false} infinite={true}>
        {images.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <p>
              <br />
              <br />
              <br />
            </p>
            <div
              className=""
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundPosition: "center",
              }}
            >
              <div className="each-slide-child container">
                <div className="row">
                  <div className="col-lg-10">
                    <p></p>
                    <br />
                    <br />
                    <br />
                    <div className="Slidetop">{slideImage.caption1}</div>
                    <div
                      className="Slidetitle "
                      style={{ textShadow: "0px 0px 5px white" }}
                      dangerouslySetInnerHTML={{ __html: slideImage.caption2 }}
                    ></div>
                    <br />
                    <br />
                    <div
                      className="Slidedetails w3-medium"
                      style={{ textShadow: "0px 0px 5px white" }}
                    >
                      {slideImage.caption3}
                    </div>
                    <br />
                    <a
                      href={slideImage.action.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-warning py-2 d-flex">
                        {slideImage.action.title}
                      </button>
                    </a>
                    <p>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    );
  }
}

export default Banner;
