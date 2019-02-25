import React from 'react';

const Buttons = () => (
  <div className="content content-buttons">
    <h1>Buttons</h1>
    <pre>
      <code>#button.flat();</code>
      <code>#button.flat(@green);</code>
    </pre>
    <button type="button" className="content-buttons--button-01">
      Button 01
    </button>
    <button
      type="button"
      className="content-buttons--button-01 content-buttons--button-01---green"
    >
      Button 01
    </button>
    <pre>
      <code>#button.flat(rounded);</code>
      <code>#button.flat(rounded, @red);</code>
    </pre>
    <button type="button" className="content-buttons--button-02">
      Button 02
    </button>
    <button
      type="button"
      className="content-buttons--button-02 content-buttons--button-02---red"
    >
      Button 02
    </button>
    <pre>
      <code>#button.flat(round);</code>
      <code>#button.flat(round, @purple);</code>
    </pre>
    <button type="button" className="content-buttons--button-03">
      Button 03
    </button>
    <button
      type="button"
      className="content-buttons--button-03 content-buttons--button-03---purple"
    >
      Button 03
    </button>
    <pre>
      <code>#button.custom(@teal, white, .8rem, 1.1rem, .4rem);</code>
      <code>#button.custom(#c9c9c9, black, 20px, 16px, 10px);</code>
    </pre>
    <button type="button" className="content-buttons--button-04">
      Button 04
    </button>
    <button
      type="button"
      className="content-buttons--button-04 content-buttons--button-04---gray"
    >
      Button 04
    </button>
    <pre>
      <code>#button.link();</code>
      <code>#button.link(@orange, white, 10px, 14px, 4px);</code>
    </pre>
    <a className="content-buttons--button-link" href="/">
      I am a link
    </a>
    <a
      className="content-buttons--button-link content-buttons--button-link---orange"
      href="/"
    >
      I am also a link
    </a>
  </div>
);

export default Buttons;
