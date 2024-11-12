import React, { Component } from "react";
import Table from "react-bootstrap/Table";
class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        console.warn(result);
        this.setState({ list: result });
      });
    });
  }
  render() {
    return (
      <div>
        <h1>RestaurantList</h1>

        {this.state.list ? (
          <div>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Rating</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.rating}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please wait....</p>
        )}
      </div>
    );
  }
}
export default RestaurantList;
