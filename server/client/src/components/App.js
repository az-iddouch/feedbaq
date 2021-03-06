import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';

const dashboard = () => <div>dashboard</div>;
const surveyNew = () => <div>survey new </div>;
const landing = () => <div>landing </div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={landing} />
            <Route exact path="/surveys" component={dashboard} />
            <Route path="/surveys/new" component={surveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
