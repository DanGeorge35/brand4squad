import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class Banner extends Component {
  render() {
    const images = [
      {
        url: "./lady-bg2.jpg",
        caption1: "Explore",
        caption2: "Branded <br> xsquad",
        caption3:
          "A cutting-edge branding solution designed for entrepreneurs and professionals across various industries seeking to establish a unique brand identity. This innovative platform offers a comprehensive suite of professional branding services tailored to meet the unique needs of each client.",
        action: {
          title: "About",
          url: "https://calendly.com/squadtalent/client-engagement-call?month=2024-07",
        },
      },
      {
        url: "./lady-bg2.jpg",
        caption1: "Vibrant",
        caption2: "Branding",
        caption3:
          "A cutting-edge branding solution designed for entrepreneurs and professionals across various industries seeking to establish a unique brand identity. This innovative platform offers a comprehensive suite of professional branding services tailored to meet the unique needs of each client.",
        action: {
          title: "Contact Now",
          url: "https://calendly.com/squadtalent/client-engagement-call?month=2024-07",
        },
      },
      {
        url: "./lady-bg2.jpg",
        caption1: "Join the",
        caption2: "Best Brand",
        caption3:
          "A cutting-edge branding solution designed for entrepreneurs and professionals across various industries seeking to establish a unique brand identity. This innovative platform offers a comprehensive suite of professional branding services tailored to meet the unique needs of each client.",
        action: {
          title: "Get Started",
          url: "https://calendly.com/squadtalent/client-engagement-call?month=2024-07",
        },
      },
    ];
    return (
      <Slide autoplay={true} arrows={false} indicators={true} infinite={true}>
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
                      className="Slidedetails"
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