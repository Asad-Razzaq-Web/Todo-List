import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import "./style.css"; // Ensure this matches your style file location

export default function Header(props) {
  return (
    /* Added navbar-dark for readable light text and bg-custom-dark for our theme */
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom-dark border-bottom-cyan">
      <div className="container-fluid">
        <Link className="navbar-brand text-neon" to="/">{props.title}</Link>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          { props.searchBar ? (
            <form className="d-flex">
              <input className="form-control custom-search-input me-2" type="search" placeholder="Search tasks..." aria-label="Search"/>
              <button className="btn-neon-outline" type="submit">Search</button>
            </form>
          ) : ""}
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool
};

Header.defaultProps = {
  title: "your title Here",
  searchBar: true
}
