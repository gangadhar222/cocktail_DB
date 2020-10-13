import React, { Component } from "react";
import "./style.css";

export class searchForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
    }

    handleChange = (e)=>{
        this.setState({
            name:e.target.value
        },()=>{console.log(this.state.name)})
    }
    
  render() {
    return (
      <div className="container">
        <div className="search">
          <h1>Search for a Cocktail</h1>
          <div className="input">
            <input placeholder="enter a char to search" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <button className="btn" onClick={()=>this.props.submit(this.state.name)}>Search</button>
        </div>
      </div>
    );
  }
}

export default searchForm;
