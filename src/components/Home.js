import React, { Component } from "react";
import { connect } from "react-redux";
import WebFont from "webfontloader";
import Messages from "./Messages";
import Footer from "./Footer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      fontSize: 21,
      id: ""
    };
  }

  // Hijacked the user input and update it on React state.
  handleInput = e => {
    this.setState({ inputVal: e.target.value });
  };

  // Font Increment & Decrement methods
  handleInc = i => {
    if (this.state.fontSize < 50) {
      this.setState({ fontSize: this.state.fontSize + 1, id: i });
    }
  };
  handleDec = i => {
    if (this.state.fontSize > 13) {
      this.setState({ fontSize: this.state.fontSize - 1, id: i });
    }
  };

  // Web Font Loader Method
  loadFont = font => {
    WebFont.load({
      google: {
        families: [font]
      }
    });
  };

  render() {
    const { fonts } = this.props;
    var fontsArr = fonts.slice(1, 21);
    return (
      <div className="wrapper">
        <h2 className="heading">Google Fonts Browser App</h2>
        <div className="input">
          <input
            className="input-effect"
            type="text"
            placeholder="Customize the font sample message"
            onChange={e => this.handleInput(e)}
          />
          <span className="focus-border">
            <i></i>
          </span>
        </div>

        <section className="font-preview-section">
          {fontsArr.map((items, i) => (
            <div className="font-preview-div">
              <div className="font-header">
                <p className="font-title">{items.family}</p>
                <span>
                  <img
                    className="btn add"
                    src="/assets/img/plus.png"
                    alt="add"
                    id={i}
                    onClick={() => this.handleInc(i)}
                  />

                  <img
                    className="btn minus"
                    src="/assets/img/remove.png"
                    alt="add"
                    id={i}
                    onClick={() => this.handleDec(i)}
                  />
                </span>
              </div>

              <p
                className="custom-text-area"
                style={{
                  fontFamily: items.family,
                  fontSize: this.state.id === i ? this.state.fontSize : "18px"
                }}
              >
                {/* Conditional Rendering if user input box is empty */}
                {this.state.inputVal ? this.state.inputVal : Messages[i]}
              </p>
              {this.loadFont(items.family)}
            </div>
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    fonts: state.fonts
  };
}
export default connect(mapStateToProps)(Home);
