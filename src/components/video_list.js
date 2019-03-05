import React from "react";
import VideoItem from "./video_item";

class VideoList extends React.Component {
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.videos.map(video => {
          return (
            <VideoItem
              video={video}
              key={video.etag}
              onVideoSelect={this.props.onVideoSelect}
            />
          );
        })}
      </div>
    );
  }
}

export default VideoList;
