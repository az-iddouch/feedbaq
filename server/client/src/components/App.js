import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <div>Header</div>;
const dashboard = () => <div>dashboard</div>;
const surveyNew = () => <div>survey new </div>;
const landing = () => <div>landing </div>;

const App = () => {
  return (
    <div>
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
};

export default App;
