import React from "react";
import PropTypes from "prop-types";
import s from "../Counter.module.css";

const Value = ({ value }) => {
  return (
    <div className={s.item}>
      <span className={s.number}>{value}</span>
    </div>
  );
};

Value.propTypes = {
  value: PropTypes.number,
};

export default Value;
