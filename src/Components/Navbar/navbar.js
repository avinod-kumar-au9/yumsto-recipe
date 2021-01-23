import "./styles/nav.scss";
import { Link } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      navClass: "topnav",
      isclick: false,
    };
  }

  menuClickHandler = () => {
    if (this.state.navClass === "topnav") {
      this.setState({
        navClass: "topnav responsive",
      });
    } else {
      this.setState({
        navClass: "topnav",
      });
    }
  };

  dropdownbuttonClickHandler = () => {
    if (!this.state.isclick) {
      this.setState({
        ...this.state,
        isclick: true,
      });
    } else {
      this.setState({
        ...this.state,
        isclick: false,
      });
    }
  };

  logoutHandler = () => {
    console.log("iam her");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    this.props.history.push("/");
  };

  loginLogoutConditionalRender = () => {
    if (
      sessionStorage.getItem("email") === null ||
      sessionStorage.getItem("email") === undefined
    ) {
      return (
        <Link to="/login" className="child1 loginbutt">
          Login
        </Link>
      );
    } else {
      return (
        <div className="logingrp">
          <Link className="child profile child2">
            <span class="material-icons">account_circle</span>{" "}
            <span className="name">
              {JSON.parse(sessionStorage.getItem("name"))}
            </span>
          </Link>
          <Link to="/addmeal" className="child child2">
            Meal Planner
          </Link>
          <Link to="/recipevideo" className="child child2">
            Recipe Video
          </Link>
          <Link onClick={this.logoutHandler} className="child child2">
            Logout
          </Link>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <div className={this.state.navClass} id="myTopnav">
          <Link to="/" className="child child1 logo1">
            <img
              className="logo"
              src="https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/Recipe-Egypt-35712-1536057112-og.png"
              alt="logo"
            />
          </Link>
          <Link to="/" className="child child1">
            Home
          </Link>

          {this.loginLogoutConditionalRender()}

          <div onClick={this.menuClickHandler} className="child icon">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
