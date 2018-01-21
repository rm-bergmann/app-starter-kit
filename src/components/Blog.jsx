import React from 'react';
import axios from 'axios';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      const component = this;
      component.setState({
        list: data.data,
        loading: false,
      });
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="block-group">
        <div className="block block-content">
          {this.state.list.map(e => (
            <div key={e.id}>
              <h2>{e.title}</h2>
              <div>{e.body}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
