import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Color from "color";
import githubIcon from "./assets/github_icon.png";

//Module Imports
import "./App.css";

//Data Imports
import backgroundColors from "./backgrounds";
import shadows from "./shadows";
import PageFooter from "./components/PageFooter/PageFooter";
import ColorList from "./components/ColorList/ColorList";
import ColorPicker from "./components/ColorPicker";

class App extends Component {
  state = {
    background: "#FFFFFF",
    picker: {
      enabled: false,
      position: { x: 0, y: 0 }
    }
  };

  handleOnChangeBackground = (value, togglePicker = false) => {
    this.setState({
      background: value,
      picker: { ...this.state.picker, enabled: !togglePicker }
    });
  };

  handleTogglePicker = mouse => {
    let picker = this.state.picker;
    this.setState({
      picker: { enabled: !picker.enabled, position: mouse }
    });
  };

  /**
   * Search and tag duplicates for each Box-Shadows
   */
  tagDuplicate = list => {
    list.forEach(shadow => {
      const dup = list.find(s => s.shadow === shadow.shadow && s.name !== shadow.name);
      if (dup && !dup.hasOwnProperty("duplicateOf")) {
        dup["duplicateOf"] = shadow.name;
      }
    });
    return list;
  };

  /**
   * Sort Box-Shadows by name ascending / descending
   */
  sortByName = (list, order = "asc") => {
    if (order == "desc") {
      return list.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
    // default to ascending order
    return list.sort((a, b) => (a.name > b.name ? 1 : -1));
  };

  render() {
    const { background } = this.state;
    document.body.style.backgroundColor = background;

    const isDarkBackground = Color(background).isDark();

    return (
      <div>
        <Title isDarkBackground={Color(background).isDark()} />
        <GoogleBar />
        <div className="app">
          {this.sortByName(this.tagDuplicate(shadows), "asc").map((anObjectMapped, index) => {
            return (
              <Bloc
                shadow={anObjectMapped.shadow}
                border={anObjectMapped.border}
                name={anObjectMapped.name}
                key={index}
              />
            );
          })}
        </div>

        <ColorPicker status={this.state.picker} onColorChange={this.handleOnChangeBackground} />

        <PageFooter isDarkColorSelected={isDarkBackground} title={"change background "}>
          <ColorList
            colors={backgroundColors}
            selectedColor={background}
            isDarkColorSelected={isDarkBackground}
            onColorChange={this.handleOnChangeBackground}
            onTogglePicker={this.handleTogglePicker}
            pickerStatus={this.state.picker.enabled}
          />
        </PageFooter>
      </div>
    );
  }
}

const Title = ({isDarkBackground}) => {
  return (
    <div className="title" style={isDarkBackground ? {color: Color('#444').negate()}: {}}>
      <div className="logo" title="Handpicked Box Shadows">Box Shadows</div>
      {/* <p className="subtitle" style={isDarkBackground ? {color: Color('#777').negate()}: {}}>Handpicked Box Shadows</p> */}
      <a className="addnew" target="_blank" rel="noopener noreferrer" href="https://github.com/nakulrathore/Box-Shadows#contribute">
        <img className="github-icon" src={githubIcon} alt=""/> Submit new shadow
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
        <span className="googlebarcode">
          box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
        </span>
        <CopyToClipboard
          text={"box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);"}
          onCopy={this.copyThis.bind(this)}
        >
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
        <CopyToClipboard
          text={`box-shadow:${this.props.shadow};border:${this.props.border};`}
          onCopy={this.copyThis.bind(this)}
        >
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

export default App;
