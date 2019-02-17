import React, { Fragment, Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Color from './color';
import colorsContent from './colors.md';

class Colors extends Component {
  state = {
    markdown: colorsContent,
  };

  render() {
    const { markdown } = this.state;
    return (
      <Fragment>
        <div className="content-colors--header">
          {ReactHtmlParser(markdown)}
        </div>
        <div className="content content-colors">
          <Color />
        </div>
      </Fragment>
    );
  }
}

export default Colors;
