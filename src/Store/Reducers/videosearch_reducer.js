import { VideoSearchAction } from "../Actions/videosearchAction";

const videosearchStore = {
  videosearchS: "",
  jokeS: "",
};

const VideosearchReducer = (state, action) => {
  state = state || videosearchStore;

  switch (action.type) {
    case VideoSearchAction.videosearchApi:
      return {
        ...state,
        videosearchS: action.payload,
      };
    case VideoSearchAction.jokeApi:
      return {
        ...state,
        jokeS: action.payload,
      };

    default:
      return state;
  }
};

export default VideosearchReducer;
