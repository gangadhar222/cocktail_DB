import React, { Component } from "react";
import { connect } from 'react-redux';
import "./style.css";
import {getData} from '../../redux/action';

export class SearchForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
        }
    }

    handleChange = (e)=>{
        this.setState({
            name:e.target.value
        })
    }

  render() {
    return (
      <div className="container">
        <div className="search">
          <h1>Search for a Cocktail</h1>
          <div className="input">
            <input placeholder="enter a char to search" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <button className="btn" onClick={()=>this.props.getData(this.state.name)}>Search</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getData: (payload) => dispatch(getData(payload))
})

export default connect(null, mapDispatchToProps)(SearchForm)
