import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  searchArr = [1, 2, 3, 4];

  state = {
    searchStr: ""
  };

  onSearchChange = (e) => {
    const searchStr = e.target.value;
    this.setState({ searchStr });
    this.props.onSearchChange(searchStr);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        id="search"
        placeholder={this.searchArr}
        valu={this.state.searchStr}
        onChange={this.onSearchChange}
      ></input>
    );
  }
}
