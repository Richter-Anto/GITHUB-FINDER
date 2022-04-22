import React, { useState } from "react";
import { FaSearch, FaSuitcase, FaBuilding } from "react-icons/fa";

const Search = props => {
  let [state, setState] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    props.onTermSubmit(state);
  };
  return (
    <div className="searchBlock">
      <form onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            placeholder="search profile"
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </span>
        <span>
          <FaSearch />
        </span>
      </form>
      <main>
        <header>
          <figure>
            <img src={props.user.avatar_url} alt={props.user.login} />
          </figure>
          <h2>{props.user.login}</h2>
          <p>
            <span>
              <FaSuitcase />
            </span>
            <span>{props.user.bio}</span>
          </p>
          <p>
            <span>
              <FaBuilding />
            </span>
            <span>{ props.user.company}</span>
          </p>
        </header>
      </main>
    </div>
  );
};

export default Search;
