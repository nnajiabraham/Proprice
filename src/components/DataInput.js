import React, { Component } from 'react';
import fetchPriceData from '../util/fetchPriceData';

class DataInput extends Component {
   constructor(props) {
      super(props);
      this.state = { value: '' };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ value: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      fetchPriceData(this.state.value);
      console.log('A name was submitted: ' + this.state.value);
   }

   render() {
      return (
         <>
            <form onSubmit={this.handleSubmit}>
               <label>
                  Enter your budget:
                  <input
                     type="text"
                     value={this.state.value}
                     onChange={this.handleChange}
                  />
               </label>
               <input type="submit" value="Submit" />
            </form>
         </>
      );
   }
}

export default DataInput;

//{then(res => console.log(res));}
