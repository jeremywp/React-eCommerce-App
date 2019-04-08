import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    value: '',
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <form className='ui input'>
        <input
          onChange={this.onChange}
          value={this.state.value}
          type='text'
        />
        <input
          onClick={this.handleSubmit}
          className='ui primary input button'
          type='submit'
          value='Search'
        />
      </form>
    )
  }
}

export default SearchBar;