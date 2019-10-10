import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Color from 'color'

//Module Imports
import './App.css'

//Data Imports
import backgroundColors from './backgrounds'
import shadows from './shadows'
import PageFooter from './components/PageFooter/PageFooter'
import ColorList from './components/ColorList/ColorList'
import SEO from './components/SEO/SEO'

class App extends Component {
  state = { background: '#FFFFFF' }

  handleOnChangeBackground = value => {
    this.setState({
      background: value,
    })
  }

  render() {
    const { background } = this.state
    document.body.style.backgroundColor = background

    const isDarkBackground = Color(background).isDark()

    return (
      <SEO>
        <div>
          <Title isDarkBackground={Color(background).isDark()} />
          <GoogleBar />
          <div className="app">
            {shadows.map((anObjectMapped, index) => {
              return (
                <Bloc
                  shadow={anObjectMapped.shadow}
                  border={anObjectMapped.border}
                  name={anObjectMapped.name}
                  key={index}
                />
              )
            })}
          </div>

          <PageFooter
            isDarkColorSelected={isDarkBackground}
            title={'change background :'}
          >
            <ColorList
              colors={backgroundColors}
              selectedColor={background}
              isDarkColorSelected={isDarkBackground}
              onColorChange={this.handleOnChangeBackground}
            />
          </PageFooter>
        </div>
      </SEO>
    )
  }
}

const Title = ({ isDarkBackground }) => {
  return (
    <div
      className="title"
      style={isDarkBackground ? { color: Color('#444').negate() } : {}}
    >
      <h1>Box Shadows</h1>
      <p
        className="subtitle"
        style={isDarkBackground ? { color: Color('#777').negate() } : {}}
      >
        Handpicked Box Shadows
      </p>
      <a
        className="addnew"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/nakulrathore/Box-Shadows#contribute"
      >
        <span className="addnewplus">+</span>
        Add New
      </a>
    </div>
  )
}

class GoogleBar extends Component {
  state = {
    value: 'Copy',
  }

  copyThis = val => {
    this.setState({
      value: 'Copied',
    })
    setTimeout(() => {
      this.setState({
        value: 'Copy',
      })
    }, 1200)
  }

  render() {
    return (
      <div className="googlebar">
        <h3>Google Search</h3>
        <span className="googlebarcode">
          box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
        </span>
        <CopyToClipboard
          text={
            'box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);'
          }
          onCopy={this.copyThis.bind(this)}
        >
          <span className={this.state.value}>{this.state.value}</span>
        </CopyToClipboard>
        <div className="searchicon">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </div>
        <div className="searchicon">
          <span className="voiceicon"></span>
        </div>
      </div>
    )
  }
}

class Bloc extends Component {
  state = {
    value: 'Copy',
  }

  copyThis = val => {
    this.setState({
      value: 'Copied',
    })
    setTimeout(() => {
      this.setState({
        value: 'Copy',
      })
    }, 1200)
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
    )
  }
}

export default App
