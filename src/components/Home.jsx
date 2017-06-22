import React from 'react';
import {render} from 'react-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="block-group">
          <h1>Home Page</h1>
          <p>Some random Home page content</p>
        </div>
      </div>
    )
  }
}

export default Home;

if(typeof window !== 'undefined') {
  render(<Home />, document.getElementById('container'));
}