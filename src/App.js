import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';
import './App.css';

// var jsonData = require('./shadows.json');
// var jsonDataBG = require('./backgrounds.json');


const Title = (props) =>{
  return(
  <div className="title">
  <h1>Box Shadows</h1>
  <p className="subtitle" >Handpicked Box Shadows</p>
  <a className="addnew" href="https://github.com/nakulrathore/Box-Shadows#contribute">
  <span className="addnewplus">+</span> 
  Add New</a>
  </div>
  );
}
class GoogleBar extends Component {

  state = {
    value: 'Copy',
    valueClass: 'copyButt'

  };

  copyThis = (val) => {
    this.setState({
      value: 'Copied',
      valueClass: 'copyButtdone'
    });
  setTimeout(() => {
    this.setState({
     value: 'Copy',
     valueClass: 'copyButt'
   })
  }, 1200);
}

render() {
  return(
  <div className="googlebar">
  <h3>Google Search</h3>
  <span className="googlebarcode">box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);</span>
  <CopyToClipboard text={'box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);'}
  onCopy={this.copyThis.bind(this)}>
  <span className={this.state.valueClass}>{this.state.value}</span>
  </CopyToClipboard>
  <div className="searchicon">
  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
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
    value: 'Copy',
    valueClass: 'copyButt'

  };

  copyThis = (val) => {
    this.setState({
      value: 'Copied',
      valueClass: 'copyButtdone'
    });
  setTimeout(() => {
    this.setState({
     value: 'Copy',
     valueClass: 'copyButt'
   })
  }, 1200);
}

render() {
  return (
  <div
  className="bloc"
  key={this.props.index}
  style={{
    boxShadow: this.props.shadow,
    border: this.props.border,
  }}
  >
  <h2>{this.props.name}</h2><br/>
  <CopyToClipboard text={'box-shadow:'+this.props.shadow+';border:'+this.props.border}
  onCopy={this.copyThis.bind(this)}>
  <span className={this.state.valueClass}>{this.state.value}</span>
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
  state = { background: '#FAFAFA', bgit: [] };

  changrBG = (bg) => {
    this.setState({
      background: bg
    });
}
componentDidMount(){
  axios
  .get('https://raw.githubusercontent.com/nakulrathore/Box-Shadows/master/src/backgrounds.json')
.then(({ data })=> {
 this.setState({ 
  bgit: data
});
})
.catch((err)=> {})
}


render() {
  document.body.style.backgroundColor = this.state.background;
  return (
  <ul className="ColorButts">
  change background :
  {this.state.bgit.map((anObjectMapped, index) => {
    return (
      <li key={index}
      onClick={this.changrBG.bind(this, anObjectMapped.color)}
      bgvalue={anObjectMapped.color}
      className={ this.state.background === anObjectMapped.color ? 'selected' : '' }
      >
      {anObjectMapped.color}
      </li>
      );
  })}
  </ul>
  );
}
}

class App extends Component {

  state = { shadowit: []};
  
  componentDidMount(){
    axios
    .get('https://raw.githubusercontent.com/nakulrathore/Box-Shadows/master/shadows.json')
    .then(({ data })=> {
     this.setState({ 
      shadowit: data
    });
   })
    .catch((err)=> {})
  }
  
  render() {
    return (
      <div >
      <Title/>
      <GoogleBar/>
      <div className="app">
      {this.state.shadowit.map((anObjectMapped, index) => {
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
      <ColorButts />
      </div>
      );
  }
}

export default App;
