/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer ">
        <div className="container-fluid pt-5">
          <div className="row">
            <div
              className="col-lg-3 col-md-4 col-12 offset-lg-1 "
              style={{ minHeight: "100px" }}
            >
              <div
                className=""
                style={{
                  display: "inline-block",
                }}
              >
                <img src="logo2.png" style={{ height: "70px" }} />
                <label
                  className="cHeader fontFam3"
                  style={{
                    fontWeight: "600",
                    marginBottom: "30px",
                  }}
                >
                  We empower entrepreneurs and professionals by crafting
                  distinctive branding solutions that forge strong connections
                  with their audience, driving recognition and growth
                </label>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-4 col-6  offset-lg-1 "
              style={{ minHeight: "100px" }}
            >
              <label className="footerHead ">MENU</label>
              <a className="footerLink " href="/home">
                CONTCT US
              </a>

              <a className="footerLink " href="/about">
                ABOUT US
              </a>
              <a className="footerLink " href="/service">
                CHECK OUT OUR GALLERY
              </a>
            </div>
            <div
              className="col-lg-2 col-md-4 col-6 "
              style={{ minHeight: "100px" }}
            >
              <label className="footerHead">SOCIALS </label>
              <a
                className="footerLink"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="ml-3">INSTAGRAM</span>
              </a>
              <a
                className="footerLink"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="ml-3">TELEGRAM</span>
              </a>
              <a
                className="footerLink"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                MEDIUM
              </a>
              <p style={{ paddingTop: "10px" }}></p>
            </div>
            <div
              className="col-lg-2 col-md-4 col-12  "
              style={{ minHeight: "100px" }}
            >
              <div
                className=""
                style={{
                  display: "inline-block",
                }}
              >
                <img
                  src="scan.png"
                  style={{
                    width: "80%",
                    borderRadius: "8px",
                    border: "5px solid #fff",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottomFooter">
          © 2024 Brand4SquadD -- &quot;Define Your Identity, Elevate Your
          Presence.&quot;
        </div>
      </div>
    );
  }
}

export default Footer;
