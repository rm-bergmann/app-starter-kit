import React from 'react';
import {render} from 'react-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default Home;

if(typeof window !== 'undefined') {
  render(<Home />, document.getElementById('container'));
}