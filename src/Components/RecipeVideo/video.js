import React from "react";
import { connect } from "react-redux";
import { VideofetchApi } from "./apifile";
import "./styles/video.scss";

class Video extends React.Component {
  constructor() {
    super();
    this.state = {
      searchinp: "",
    };
  }

  searchInputHandler = (e) => {
    this.setState({
      ...this.state,
      searchinp: e.target.value,
    });
  };

  renderVideo = () => {
    if (this.props.videoApiData) {
      if (this.props.videoApiData.videos)
        if (this.props.videoApiData.videos.length > 0) {
          return this.props.videoApiData.videos.map((video, idx) => {
            return (
              <div key={idx} className="videoCol">
                <iframe
                  className="videoframe"
                  src={`https://www.youtube.com/embed/${video.youTubeId}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <p>{video.shortTitle}</p>
              </div>
            );
          });
        } else {
          return <div>No Results Found</div>;
        }
    }
  };

  searchClickHandler = () => {
    this.props.dispatch(VideofetchApi(this.state.searchinp));
    this.setState({
      ...this.state,
      searchinp: "",
    });
  };

  render() {
    return (
      <div className="mainvideodiv">
        <h3 className="videoTitle">
          Search your favorite food to checkout the recipe making video
        </h3>
        <div className="videosearchdiv">
          <input
            placeholder="Search Your Favorite food"
            className="searchbar"
            onChange={this.searchInputHandler}
            value={this.state.searchinp}
          />

          <span
            onClick={this.searchClickHandler}
            className="material-icons SearchIcon"
          >
            search
          </span>
        </div>
        <div className="videoRow">{this.renderVideo()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    videoApiData: state.videosearch_reducer.videosearchS,
  };
};

export default connect(mapStateToProps)(Video);
