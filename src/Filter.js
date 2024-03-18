import React from "react";

const Filter = ({ content, filterBtn }) => {
  return (
    <select className="filter">
      <optgroup label="Refine by">
        <option selected hidden>
          {filterBtn}
        </option>
        {content.map((item) => (
          <option value={item.type}>{item.name}</option>
        ))}
      </optgroup>
    </select>
  );
};

export default Filter;
