import { Link } from "react-router-dom";
import "./styles/searchbar.scss";
const Detail = (props) => {
  const { searchItemChangeHandler, searchApiData } = props;

  const renderSearchresults = () => {
    if (searchApiData) {
      if (searchApiData.results) {
        if (searchApiData.results.length > 0) {
          return searchApiData.results.map((items, idx) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/details/${items.id}`}
                key={idx}
              >
                <div className="grp">
                  <p className="title">{items.title}</p>
                  <img
                    className="searchImg"
                    src={items.image}
                    alt="recipeImg"
                  />
                </div>
              </Link>
            );
          });
        }
      }
    }
  };

  return (
    <div className="searchRow">
      <div className="searchCol">
        <input
          placeholder="Search your favorite food"
          onChange={searchItemChangeHandler}
        />
        <div className="resultsDiv">{renderSearchresults()}</div>
      </div>
      <div className="searchCol">
        <h3 style={{ color: "white", margin: "20px 0" }}>
          <center>check trending recipes, you may interested</center>
        </h3>
        <div className="popularRow">
          <div className="popularCol">
            <Link to="/details/664718">
              <img
                src="https://spoonacular.com/recipeImages/664718-312x231.jpg"
                alt="Tostadas"
                className="popularImg"
              />
            </Link>
          </div>
          <div className="popularCol">
            <Link to="/details/638420">
              <img
                src="https://spoonacular.com/recipeImages/638420-312x231.jpg"
                alt="Chicken Wings"
                className="popularImg"
              />
            </Link>
          </div>
          <div className="popularCol">
            <Link to="/details/662558">
              <img
                src="https://spoonacular.com/recipeImages/662558-312x231.jpg"
                alt="Tostadas"
                className="popularImg"
              />
            </Link>
          </div>
          <div className="popularCol">
            <Link to="/details/661029">
              <img
                src="https://spoonacular.com/recipeImages/661029-312x231.jpg"
                alt="Tostadas"
                className="popularImg"
              />
            </Link>
          </div>
          <div className="popularCol">
            <Link to="/details/642246">
              <img
                src="https://spoonacular.com/recipeImages/642246-312x231.jpg"
                alt="Tostadas"
                className="popularImg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
