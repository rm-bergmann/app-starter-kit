import React, { Component } from 'react';

class Color extends Component {
  state = {
    colors: [
      'blue-light',
      'blue',
      'blue-dark',
      'green-light',
      'green',
      'green-dark',
      'red-light',
      'red',
      'red-dark',
      'purple-light',
      'purple',
      'purple-dark',
      'teal-light',
      'teal',
      'teal-dark',
      'orange-light',
      'orange',
      'orange-dark',
      'yellow-light',
      'yellow',
      'yellow-dark',
      'gray-light',
      'gray',
      'gray-dark',
      'pink-light',
      'pink',
      'pink-dark',
      'cyan-light',
      'cyan',
      'cyan-dark',
    ],
  };

  render() {
    const { colors } = this.state;
    const baseClassName = 'content-colors';

    const renderColor = colors.map(color => {
      const blockClassName = `${baseClassName}--block`;
      const colorClassName = `${blockClassName}---${color}`;

      return (
        <div
          key={color}
          className={`${baseClassName}--wrapper ${baseClassName}--wrapper---${color}`}
        >
          <p className={`${baseClassName}--title`}>{`@${color}`}</p>
          <div className={`${blockClassName} ${colorClassName}`} />
        </div>
      );
    });

    return renderColor;
  }
}

export default Color;
