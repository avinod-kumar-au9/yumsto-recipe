const base_url = "https://api.spoonacular.com";


const apiKey1 = "09db6d34af214b80a0ec31ff23ebdf70";

export const Home_details_action = (c, d, m, r, mp, mc, maxc, maxp) => {
  const output2 = fetch(
    `${base_url}/recipes/complexSearch?cuisine=${c}&diet=${d}&type=${m}&number=20&maxReadyTime=${r}&minProtein=${mp}&minCalories=${mc}&maxCalories=${maxc}&maxProtein=${maxp}&apiKey=${apiKey1}`
  ).then((res) => res.json());
  return {
    type: "HOMEPAGEFILTERS",
    payload: output2,
  };
};
