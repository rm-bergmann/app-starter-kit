import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import About from './About';
import Blog from './Blog';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'active',
    };
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="block-group">
              <li className={this.state.active}><Link to="/">Dashboard</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          {this.props.children}
        </div>
      </Router>
    );
  }
}

Routes.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Routes;
