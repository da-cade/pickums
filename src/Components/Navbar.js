import React from "react";

export class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar p-3">
        <div className="logoContainer">
          <img alt="" src=""></img>
        </div>
        <div className="userArea">
          <div className="searchBar"></div>
          <div className="profileImg">
            <img alt="" src=""></img>
          </div>
        </div>
      </div>
    )
  }
}