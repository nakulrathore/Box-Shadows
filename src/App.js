
import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

//Module Imports
import "./App.css";

//Data Imports
import backgroundColors from "./backgrounds";
import shadows from "./shadows";


class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <GoogleBar />
        <div className="app">
          {shadows.map((anObjectMapped, index) => {
            return <Bloc shadow={anObjectMapped.shadow} border={anObjectMapped.border} name={anObjectMapped.name} key={index} />;
          })}
        </div>
        <ColorButts />
      </div>
    );
  }
}

const Title = props => {
  return (
    <div className="title">
      <h1>Box Shadows</h1>
      <p className="subtitle">Handpicked Box Shadows</p>
      <a className="addnew" target="_blank" rel="noopener noreferrer" href="https://github.com/nakulrathore/Box-Shadows#contribute">
        <span className="addnewplus">+</span>
        Add New
      </a>
    </div>
  );
};
class GoogleBar extends Component {
  state = {
    value: "Copy"
  };

  copyThis = val => {
    this.setState({
      value: "Copied"
    });
    setTimeout(() => {
      this.setState({
        value: "Copy"
      });
    }, 1200);
  };

  render() {
    return (
      <div className="googlebar">
        <h3>Google Search</h3>
        <span className="googlebarcode">box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);</span>
        <CopyToClipboard text={"box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);"} onCopy={this.copyThis.bind(this)}>
          <span className={this.state.value}>{this.state.value}</span>
        </CopyToClipboard>
        <div className="searchicon">
          <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </div>
        <div className="searchicon">
          <span className="voiceicon"></span>
        </div>
      </div>
    );
  }
}

class Bloc extends Component {
  state = {
    value: "Copy"
  };

  copyThis = val => {
    this.setState({
      value: "Copied"
    });
    setTimeout(() => {
      this.setState({
        value: "Copy"
      });
    }, 1200);
  };

  render() {
    return (
      <div
        className="bloc"
        key={this.props.index}
        style={{
          boxShadow: this.props.shadow,
          border: this.props.border
        }}
      >
        <h2>{this.props.name}</h2>
        <br />
        <CopyToClipboard text={"box-shadow:" + this.props.shadow + ";border:" + this.props.border} onCopy={this.copyThis.bind(this)}>
          <span className={this.state.value}>{this.state.value}</span>
        </CopyToClipboard>
        <div className="css-style">
          <p>box-shadow:{this.props.shadow};</p>
          <p>border:{this.props.border};</p>
        </div>
      </div>
    );
  }
}

class ColorButts extends Component {
  state = { background: "#FFFFFF" };

  changeBackground = value => {
    this.setState({
      background: value
    });
  };

  render() {
    document.body.style.backgroundColor = this.state.background;
    return (
      <ul className="ColorButts">
        change background :
        {backgroundColors.map((bg, index) => {
          return (
            <li
              key={index}
              onClick={this.changeBackground.bind(this, bg.color)}
              bgvalue={bg.color}
              className={this.state.background === bg.color ? "selected" : ""}
            >
              {bg.color}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
