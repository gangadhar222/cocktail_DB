import React, { Component } from 'react';
import Routes from './components/routes/Routes'
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       productsArray:[]
    }
  }

  // handleSubmit = (data)=>{
  //   var config = {
  //     method: 'get',
  //     url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${data}`,
  //     headers: { 
  //       'Content-Type': 'application/json'
  //     }
  //   };
  //   axios(config)
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }  
  render() {
    const {productsArray} = this.state

    return (
      // <SearchForm submit={this.handleSubmit} />
      <div>
        <Routes />
      </div>
    )
  }
}

export default App
