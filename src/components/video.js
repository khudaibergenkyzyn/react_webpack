import play from "../images/play-icon.png";
// import {Section} from '../styles/sameStyle'
import {VideoInner, Video, VideoItem, VideoImgDiv, VideoImg} from "../styles/videoStyle";
function VideoComponent() {
  return (
    <Video>
      <VideoInner>
        <VideoItem>
          <h1>Knowledge of center</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </VideoItem>
        <VideoItem>
          <VideoImgDiv></VideoImgDiv>
          <VideoImg src={play}/>
        </VideoItem>
      </VideoInner>
    </Video>
  );
}

export default VideoComponent;
