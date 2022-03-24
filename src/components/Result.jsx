import PropTypes from "prop-types";
import React from "react";

const Result = ({ value }) => {
  return <div className="result">{value}</div>;
};

Result.propTypes = {
  value: PropTypes.string.isRequired,
};

Result.defaultProps = {
  value: "0",
};
export default Result;
