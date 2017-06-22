import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loading: true
    };
  }
  
  componentDidMount() {
    
    {
      /* 
       * Enter the required URL to retrieve a json object
       * Current: http://blog.dev/blog
       */
    }

    axios.get('http://blog.dev/blog/:id').then(data => {
      var component = this;
      console.log(data);
      component.setState({
        list: data.data,
        loading: false
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    
    {
      /*
       * To render HTML React forces dangerouslySetInnerHTML={{__html}} syntax
       * so that you don't accidentally render text as HTML.
       * This prevents XSS bugs
       */
    }

    return (
      {this.props.params.id}
    );
  }
}

export default BlogPost;