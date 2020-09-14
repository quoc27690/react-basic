import React from "react";

function ResultTop(props) {
  return (
    <div className="result-top">
      <div className="result-top__left">4,306 results found in 3ms</div>
      <div className="result-top__right">
        <label>Sort by</label>
        <select>
          <option>Featured</option>
          <option>Price asc.</option>
          <option>Price desc.</option>
        </select>
      </div>
    </div>
  );
}

export default ResultTop;
