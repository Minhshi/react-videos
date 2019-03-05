import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./search_bar";

class App extends React.Component {
  state = {
    videos: []
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
