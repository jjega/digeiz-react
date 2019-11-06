import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Box from '@material-ui/core/Box';

// ROUTER
import Graph from '../pages/Graph';


class Navigation extends React.Component {

  render() {

    return (
      <Router>
        <Box my={10}>
          <Switch>
            <Route exact path="/" component={Graph} />
          </Switch>
        </Box>
      </Router>
    );
  }
}

export default Navigation;

