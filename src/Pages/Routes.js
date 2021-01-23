import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Login from "./Login";
import AddMeal from "./Add_Meal";
import Footer from "./footer";
import Nav from "../Components/Navbar/navbar";
import RecipeVideo from "./videosearch";

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Route path={"/"} exact component={Home} />
      <Route path={"/details/:id"} component={Details} />
      <Route path={"/login"} component={Login} />
      <Route path={"/addmeal"} component={AddMeal} />
      <Route path={"/recipevideo"} component={RecipeVideo} />
      <Footer />
    </BrowserRouter>
  );
};
export default Routes;
