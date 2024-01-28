import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

class HomeComponent extends React.Component {
  render() {
    return (
      <div className='startPage-container'>
        <div className='quiz-app'>
          <h3>Quiz App</h3>
        </div>
        <div className='play-sec'>
          <NavLink to="/Quiz">
            <button className='play-btn'>Play</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default HomeComponent;