import React from 'react';

class Coordonate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trajectories: [
        {
          "id": "4421",
          "points": [
            {
              "time": 240,
              "x": 0.2,
              "y": 0.2
            },
            {
              "time": 280,
              "x": 1.5,
              "y": 0.5
            },
            {
              "time": 300,
              "x": 1.55,
              "y": 0.7
            },
            {
              "time": 340,
              "x": 2,
              "y": 0.8
            },
            {
              "time": 540,
              "x": 4,
              "y": 0.78
            },
            {
              "time": 640,
              "x": 4.11,
              "y": 0.8
            },
            {
              "time": 705,
              "x": 4.07,
              "y": 1.2
            },
            {
              "time": 800,
              "x": 3.85,
              "y": 1.5
            },
            {
              "time": 900,
              "x": 3.8,
              "y": 1.4
            },
            {
              "time": 1000,
              "x": 2.8,
              "y": 1.4
            },
            {
              "time": 1100,
              "x": 2.82,
              "y": 1.4
            },
            {
              "time": 1200,
              "x": 2.6,
              "y": 0.6
            },
            {
              "time": 1250,
              "x": 2.6,
              "y": 1.8
            },
            {
              "time": 1290,
              "x": 2.65,
              "y": 2.4
            },
            {
              "time": 1400,
              "x": 6.4,
              "y": 2.45
            },
            {
              "time": 1430,
              "x": 6.35,
              "y": 3.7
            },
            {
              "time": 1470,
              "x": 3.5,
              "y": 3.4
            },
            {
              "time": 1500,
              "x": 4.15,
              "y": 3.25
            },
            {
              "time": 1530,
              "x": 2.5,
              "y": 3.35
            },
            {
              "time": 1600,
              "x": 0.15,
              "y": 0.3
            }
          ]
        },
        {
          "id": "3244",
          "points": [
            {
              "time": 15,
              "x": 0.05,
              "y": 0.05
            },
            {
              "time": 34,
              "x": 1,
              "y": 0
            },
            {
              "time": 80,
              "x": 0.05,
              "y": 0.07
            },
            {
              "time": 44,
              "x": 1,
              "y": 0
            },
            {
              "time": 60,
              "x": 0.5,
              "y": 2
            },
            {
              "time": 77,
              "x": 1.5,
              "y": 3
            },
            {
              "time": 72,
              "x": 2,
              "y": 4.5
            }
          ]
        },
        {
          "id": "7255",
          "points": [
            {
              "time": 200,
              "x": 8.5,
              "y": 3.3
            },
            {
              "time": 130,
              "x": 10,
              "y": 5.56
            },
            {
              "time": 343,
              "x": 4.3,
              "y": 6.3
            },
            {
              "time": 175,
              "x": 8.2,
              "y": 5.3
            },
            {
              "time": 215,
              "x": 7,
              "y": 3.15
            },
            {
              "time": 315,
              "x": 7.12,
              "y": 5.44
            },
            {
              "time": 425,
              "x": 9.48,
              "y": 4.82
            },
            {
              "time": 330,
              "x": 4.25,
              "y": 5.3
            },
            {
              "time": 225,
              "x": 7,
              "y": 3.15
            },
            {
              "time": 415,
              "x": 9.15,
              "y": 4.08
            },
            {
              "time": 370,
              "x": 3.3,
              "y": 6.18
            },
            {
              "time": 395,
              "x": 4.55,
              "y": 2.15
            },
            {
              "time": 408,
              "x": 9.2,
              "y": 1.95
            },
            {
              "time": 433,
              "x": 9.71,
              "y": 4.85
            },
            {
              "time": 338,
              "x": 4.3,
              "y": 6.3
            },
            {
              "time": 360,
              "x": 2.3,
              "y": 6.22
            }
          ]
        },
        {
          "id": "3232",
          "points": [
            {
              "time": 200,
              "x": 3.4,
              "y": 2.2
            },
            {
              "time": 100,
              "x": 10,
              "y": 1.3
            },
            {
              "time": 110,
              "x": 8.46,
              "y": 1.56
            },
            {
              "time": 120,
              "x": 6.32,
              "y": 1.34
            },
            {
              "time": 140,
              "x": 3.2,
              "y": 2.3
            },
            {
              "time": 290,
              "x": 3.25,
              "y": 4.3
            },
            {
              "time": 210,
              "x": 2.12,
              "y": 4.44
            },
            {
              "time": 260,
              "x": 1.48,
              "y": 4.82
            },
            {
              "time": 333,
              "x": 7.15,
              "y": 2.08
            },
            {
              "time": 315,
              "x": 5,
              "y": 3.15
            },
            {
              "time": 360,
              "x": 9.8,
              "y": 1.4
            }
          ]
        },
        {
          "id": "2332",
          "points": [
            {
              "time": 200,
              "x": 3.4,
              "y": 2.1
            },
            {
              "time": 114,
              "x": 1.45,
              "y": 0.05
            },
            {
              "time": 120,
              "x": 1.45,
              "y": 0.96
            },
            {
              "time": 210,
              "x": 3.77,
              "y": 1.97
            },
            {
              "time": 140,
              "x": 3.2,
              "y": 2.15
            },
            {
              "time": 230,
              "x": 4.92,
              "y": 1.56
            },
            {
              "time": 250,
              "x": 5.2,
              "y": 0.84
            },
            {
              "time": 133,
              "x": 2.32,
              "y": 1.34
            },
            {
              "time": 270,
              "x": 4.2,
              "y": 0.14
            }
          ]
        }
      ],
    }
  }

  reOrderByTime() {
    const { trajectories } = this.state;
    return new Promise((res, rej) => {
      let orderedTrajectories =  trajectories.map(user => {
        user.points.sort((stop1, stop2) => stop1.time - stop2.time);
  
        return user;
      });

      res(orderedTrajectories);
    });
    
  }
}

export default Coordonate;