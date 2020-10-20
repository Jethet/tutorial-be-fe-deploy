import React, {Component, component} from 'react';

/* Initialize all the states inside the constructor: STATES TO STORE DATA are
1) list: if the state list is true, the list of users component will be displayed.
2) card: if the state card is true, the single-user card will be displayed.
3) users: this state stores the list array of players from the backend.
4) user: this stores a single-user detail from the backend.
*/

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      list: true,
      card: false,
      users: [],
      user: {}
    }
  }
}