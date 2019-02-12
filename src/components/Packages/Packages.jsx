import React, { Component } from 'react';
import axios from 'axios';

class Packages extends Component {
  constructor() {
    super();
    this.state = {
      dependancies: [],
      devDependencies: [],
    };
  }

  componentDidMount() {
    axios.get('/package.json').then((content) => {
      const component = this;

      component.setState({
        dependancies: Object.keys(content.data.dependencies),
        devDependencies: Object.keys(content.data.devDependencies),
        loading: false,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { dependancies, devDependencies } = this.state;
    return (
      <div className="content content-about">
        <h1>Packages Included:</h1>
        <h2>Dependancies:</h2>
        { dependancies.map(dependancy => <h3>{dependancy}</h3>)}
        <h2>Dev Dependancies:</h2>
        { devDependencies.map(devDependancy => <h3>{devDependancy}</h3>)}
      </div>
    );
  }
}

export default Packages;
