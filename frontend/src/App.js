import React, { Component } from "react";

/* Initialize all the states inside the constructor: STATES TO STORE DATA are
1) list: if the state list is true, the list of users component will be displayed.
2) card: if the state card is true, the single-user card will be displayed.
3) users: this state stores the list array of users from the backend.
4) user: this stores a single-user detail from the backend.
*/

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      list: true,
      card: false,
      users: [],
      user: {},
    };
  }

  // to store the data of users in the state, the list of users must be fetched
  // this has to be done before mounting the component: inside componentDidMount()
  componentDidMount() {
    fetch("http://localhost:3001/users/list")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ users: responseJson.data });
      });
  }

  // handles the view of single-user detail card; it needs to fetch each user
  // detail with the id and store it in a state named user
  showCard = (id) => {
    fetch(`http://localhost:3001/users/${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ user: responseJson.data });
      });
    this.setState({
      list: false,
      card: true,
    });
  };

  // a 'back' button in card view will call a function named showList(). This makes
  // card value 'false' and list value 'true' (will show users list view and hide
  // the single-user card view)
  showList = () => {
    this.setState({
      card: false,
      list: true,
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.list ? (
          <div className="list-group">
            {this.state.users.map((user) => {
              <li
                onClick={() => this.showCard(user._id)}
                className="list-group-item list-group-item-action"
              >
                {user.name}
              </li>;
            })}
          </div>
        ) : null}
      </div>
    );
  }
}
