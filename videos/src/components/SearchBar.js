import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onInputChange = (e)=>{
    this.setState({ term: e.target.value })
  }
  onFormSubmit = e => {
      e.preventDefault();
      //todo make sure we call
      // callback from parent components
      this.props.onFormSubmit(this.state.term)
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="feild">
            <label>
              Video Search
              <input
                value={this.state.term}
                type="text"
                onChange={this.onInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
