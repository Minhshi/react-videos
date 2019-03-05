import React from "react";

class VideoItem extends React.Component {
  render() {
    const { snippet } = this.props.video;
    return (
      <div>
        <img src={snippet.thumbnails.medium.url} alt="" />
        {snippet.title}
      </div>
    );
  }
}

export default VideoItem;
