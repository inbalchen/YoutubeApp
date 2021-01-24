import React from "react";
import search from "../assets/images/search.svg";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <div className="input-container">
            <input
              type="text"
              className="input"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search.."
            />
            <img className="input_img" src={search} alt="search" />
            </div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
