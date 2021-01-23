import { VideoSearchAction } from "../../Store/Actions/videosearchAction";

const key = "1755b7eddb8b4bc1980870df2ce80322";

const url = "https://api.spoonacular.com/food/";

export const JokefetchApi = () => {
  const output = fetch(`${url}jokes/random?apiKey=${key}`).then((resp) =>
    resp.json()
  );

  return {
    type: VideoSearchAction.jokeApi,
    payload: output,
  };
};
export const VideofetchApi = (searchinput) => {
  const output = fetch(
    `${url}videos/search?query=${searchinput}&number=2&apiKey=${key}`
  ).then((resp) => resp.json());

  return {
    type: VideoSearchAction.videosearchApi,
    payload: output,
  };
};
