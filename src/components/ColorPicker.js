import React, { Component } from 'react';
const AColorPicker = require('a-color-picker');

const cPickerOptions = {
    showHSL: false,
    showRGB: false,
    showAlpha: false
}

class ColorPicker extends Component {

    componentDidMount() {
        AColorPicker
        .from('div.color-picker',
        cPickerOptions)
        .on('change', (picker, color) => {
            this.props.onColorChange(color);
          });
    }
    render() {
        
        let {enabled, position} = this.props.status;
        return (
            <div style={{left: position.x + 'px', top: position.y + 'px'}} className={`color-picker ${enabled ? '--is-active' : ''}`}></div>
        );
    }
}

export default ColorPicker;