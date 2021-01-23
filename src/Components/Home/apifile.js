import { SearchAction } from "../../Store/Actions/searchAction";
let url = "https://api.spoonacular.com/recipes/complexSearch?query=";

const key = "1fa77b43b6ec43b8919a7f779dbff671";

export const SearchApi = (val) => {
  const output = fetch(`${url}${val}&number=5&apiKey=${key}`).then((resp) =>
    resp.json()
  );

  return {
    type: SearchAction.homesearchApi,
    payload: output,
  };
};
