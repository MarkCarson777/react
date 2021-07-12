import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <b>Image Search</b>
          <div className="field">
          {/* onInputChange is a function with no parentheses as we don't want it to be run every time we render */}
          {/* onChange is a JS property and cannot be called by any other name */}
            <input 
              type ="text" 
              value={this.state.term} 
              onChange={(e) => this.setState({ term: e.target.value })} />
              {/* alternate version - we use an arrow function when there is a single line of code we want to return */}
              {/* <input type="text" onChange={(event) => console.log(event.target.value)} />; */}
          </div>
        </form>
      </div>
    );  
  }
}

export default SearchBar;