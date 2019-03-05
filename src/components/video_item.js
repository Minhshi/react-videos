import React from "react";
import "../styles/video_item.css";

class VideoItem extends React.Component {
  render() {
    const { snippet } = this.props.video;
    return (
      <div
        className="video-item item"
        onClick={() => this.props.onVideoSelect(this.props.video)}
      >
        <img
          className="ui image"
          src={snippet.thumbnails.medium.url}
          alt={snippet.title}
        />
        <div className="content">
          <div className="header">{snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
