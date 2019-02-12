import React from 'react';
import axios from 'axios';
import base64 from 'base-64';
import ReactMarkdown from 'react-markdown';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  componentDidMount() {
    const url =
      'https://api.github.com/repos/rm-bergmann/less-style-library/contents/README.md';
    axios
      .get(url)
      .then(content => {
        const component = this;
        component.setState({
          content: base64.decode(content.data.content),
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { content } = this.state;
    return (
      <div className="content content-blog">
        <ReactMarkdown source={content} />
      </div>
    );
  }
}

export default Blog;
