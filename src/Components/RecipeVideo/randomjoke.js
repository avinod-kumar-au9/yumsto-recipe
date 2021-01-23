import React from "react";
import { connect } from "react-redux";
import { JokefetchApi } from "./apifile";
import "./styles/joke.scss";

class RandomJoke extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "some",
    };
  }
  componentDidMount() {
    this.props.dispatch(JokefetchApi());
  }

  render() {
    console.log(this.state.text);
    return (
      <div>
        <h4 className="joketitle">Enjoy the joke, Specially for you</h4>
        <div className="jokediv">
          <p className="joke">
            {this.props.jokeApiData.text && this.props.jokeApiData.text}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jokeApiData: state.videosearch_reducer.jokeS,
  };
};

export default connect(mapStateToProps)(RandomJoke);
