import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class BlogList extends React.Component {
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

    axios.get('http://blog.dev/blog').then(data => {
      var component = this;
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
      <div className={'content'}>     
        {this.state.list.map(e => (
          <div className={'blog-list block-group'}> 
            <h3 key={e.title}>{e.title}</h3>

            <div dangerouslySetInnerHTML={{__html: e.body}} key={e.body}></div>
            <img src={e.image} alt={e.title} key={e.image}></img>
          </div>
        ))}
      </div>
    );
  }
}

export default BlogList;