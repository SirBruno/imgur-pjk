import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  getData() {
    axios.get('http://localhost:5000').then(response => this.setState({ data: [...response.data.data] }));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <div className="data-container" > {
          this.state.data.map(data =>
            <div key={data.id}
              className="data-box" >
              <p> {data.title} </p>
              <img src={data.link}alt="" />
            </div>
          )
        } </div>
      </div>
    )
  }
}

export default App;