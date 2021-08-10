import React from "react";
import search from "../assets/images/search.svg";

class SearchBar extends React.Component {
  state = {
    term: "",
    error: false
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.term) {
      this.props.onFormSubmit(this.state.term);
    }else {
      this.setState({error: true})
    }
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h2>Video Search</h2>
            <div className="input-container">
            <input
              type="text"
              className="input"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search"
            />
              <img className="input_img" onClick={this.onFormSubmit} src={search} alt="search" />
            </div>
            
          </div>
          {this.state.error && <div className="error-message">Enter valid input</div>}
        </form>
      </div>
    );
  }
}

export default SearchBar;
