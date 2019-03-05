import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./search_bar";

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
