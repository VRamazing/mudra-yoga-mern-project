import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mudras from "./mudras/pages/Mudras";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/mudras"  component={Mudras} />
        <Route path="/mudras/new/"  component={Mudras} />
        <Route path="/">
            Hi this is default page
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
