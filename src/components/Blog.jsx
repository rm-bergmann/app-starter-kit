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
      <div className="content">
        {this.state.list.map(e => (
          <div>
            <h1 key={e.title}>{e.title}</h1>
            <div key={e.body}>{e.body}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;