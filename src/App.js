import React, { Component } from 'react';
import SearchForm from './components/searchForm/searchForm';
import Products from './components/products/Products';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products:true,
       char:'',
       productsArray:[]
    }
  }

  handleSubmit = (data)=>{
    
  }
  
  render() {
    const {products,productsArray} = this.state
    let component = products ? <SearchForm submit={this.handleSubmit} /> : <Products array={productsArray}/>
    return (
      {component}
    )
  }
}

export default App
