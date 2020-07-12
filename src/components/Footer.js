import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        className="footer"
        style={{
          // backgroundColor: "#0B1C45",
          color: "#3D4659",
          width: "100%",
          padding: "20px 0px",
          fontSize: "20px"
        }}
      >
        <p>
          <a
            id="footer-a"
            href="https://altcampus.io"
            target="_blank"
            style={{ color: "#3D4659" }}
          >
            Made with{" "}
            <small style={{ fontSize: "24px", color: "#FB6060" }}>
              &#9829;
            </small>{" "}
            at AltCampus
          </a>
        </p>
      </div>
    );
  }
}
