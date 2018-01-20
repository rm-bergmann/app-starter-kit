import React from 'react';
import { render } from 'react-dom';

const Home = () => (
  <div className="content">
    <div className="block-group">
      <h1>Home Page</h1>
      <p>Some random Home page content</p>
    </div>
  </div>
);

export default Home;

if (typeof window !== 'undefined') {
  render(<Home />, document.getElementById('app'));
}
