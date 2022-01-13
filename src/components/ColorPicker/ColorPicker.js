import React, { Component } from 'react';
import classNames from 'classnames/bind';
import s from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIndex = index => {
    this.setState({
      activeOptionIdx: index,
    });
  };

  makeOptionClassName = index => {
    const cx = classNames.bind(s);
    return cx(s.option, {
      [s.active]: index === this.state.activeOptionIdx,
    });
    // const optionClasses = [s.option];
    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push(s.active);
    // }
    // return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className={s.container}>
        <h2 className={s.title}> Color Picker</h2>
        <p>You choose color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
