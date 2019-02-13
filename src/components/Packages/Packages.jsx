import React, { Component } from 'react';
import base64 from 'base-64';
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
    const url =
      'https://api.github.com/repos/rm-bergmann/app-starter-kit/contents/package.json';

    axios
      .get(url)
      .then(content => {
        const component = this;
        const packageFile = base64.decode(content.data.content);
        const parsedPackageFile = JSON.parse(packageFile);

        component.setState({
          dependancies: Object.keys(parsedPackageFile.dependencies),
          devDependencies: Object.keys(parsedPackageFile.devDependencies),
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { dependancies, devDependencies } = this.state;
    return (
      <div className="content content-about">
        <h1>Packages Included:</h1>
        <h2>Dependancies:</h2>
        {dependancies.map(dependancy => (
          <h3 key={dependancy}>{dependancy}</h3>
        ))}
        <h2>Dev Dependancies:</h2>
        {devDependencies.map(devDependancy => (
          <h3 key={devDependancy}>{devDependancy}</h3>
        ))}
      </div>
    );
  }
}

export default Packages;
