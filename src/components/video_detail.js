import React from "react";

class VideoDetail extends React.Component {
  render() {
    if (!this.props.video) {
      return "Loading...";
    }
    return (
      <div className="ui segment">
        <h4 className="ui header">{this.props.video.snippet.title}</h4>
        <p>{this.props.video.snippet.description}</p>
      </div>
    );
  }
}

export default VideoDetail;
