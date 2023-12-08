import React, { useState } from "react";

const NavBar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  return <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand">Recipe Search</a>
      <form className="d-flex" role="search" onSubmit={e => {
        e.preventDefault();
        onSubmit(search);
      }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  </nav>
}

export { NavBar }
