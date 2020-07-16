import React from 'react';
import './css/app.css';
import TableRows from './TableRows';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Person: {
        firstName: 'Something',
        lastName: 'LName',
        phoneNumber: '12345678998'
      },
      PhoneBookData: []
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();

    const newObj = JSON.parse(JSON.stringify(this.state));
    newObj.PhoneBookData.push(newObj.Person);

    this.setState(newObj);
  }

  onChangeHandler(e) {
    const elName = e.target.name;
    const newObj = JSON.parse(JSON.stringify(this.state));

    newObj.Person[elName] = e.target.value;

    this.setState(newObj);
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <label>First name</label>
          <input
            name='firstName'
            type='text'
            defaultValue={this.state.Person.firstName}
            placeholder={this.state.Person.firstName}
            onChange={this.onChangeHandler}
          />
          <label>Last name</label>
          <input
            name='lastName'
            type='text'
            defaultValue={this.state.Person.lastName}
            placeholder={this.state.Person.lastName}
            onChange={this.onChangeHandler}
          />
          <label>Phone number</label>
          <input
            name='phoneNumber'
            type='text'
            defaultValue={this.state.Person.phoneNumber}
            placeholder={this.state.Person.phoneNumber}
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <button type='submit'>Add user</button>
        </form>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <TableRows data={this.state.PhoneBookData} />
          </tbody>
        </table>
      </>
    );
  }
}
