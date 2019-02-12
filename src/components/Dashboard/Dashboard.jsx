import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import dashboardContent from './dashboard.md';

class Dashboard extends Component {
  state = {
    markdown: dashboardContent,
  };

  render() {
    const { markdown } = this.state;
    return (
      <div className="content content-dashboard">
        {ReactHtmlParser(markdown)}
      </div>
    );
  }
}

export default Dashboard;
