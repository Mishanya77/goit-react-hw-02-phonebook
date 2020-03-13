import React from "react";
import PropTypes from "prop-types";

const Filter = ({ getName }) => {
  return (
    <div>
      <h2>Find contact by name</h2>
      <input type="text" onChange={getName} />
    </div>
  );
};
Filter.propTypes = {
  getName: PropTypes.func.isRequired
};

export default Filter;
