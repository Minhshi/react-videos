import React from "react";
import VideoItem from "./video_item";

class VideoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.videos.map(video => {
          return <VideoItem video={video} key={video.etag} />;
        })}
      </div>
    );
  }
}

export default VideoList;
