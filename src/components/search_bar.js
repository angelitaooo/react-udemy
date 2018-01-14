import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }
  render() {
    return (
      <div>
        <input onChange={event => setState({ term: event.state.value })} />
      </div>
    );
  }
  onInputChange(event) {}
}

export default SearchBar;
