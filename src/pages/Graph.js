import React from 'react';
import Coordonate from '../components/Trajectories';

class Graph extends React.Component {

  render() {
    const { trajectories } = Coordonate.state;

    return (
      <div>{trajectories[0]}</div>
    );
  }
}

export default Graph;