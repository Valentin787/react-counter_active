import React from "react";
import PropTypes from "prop-types";
import s from "./Paper.module.css";

const Paper = ({ title, children }) => {
  return (
    <div className={s.wrap}>
      <h1 className={s.header}> {title}</h1>
      {children}
    </div>
  );
};

Paper.propTypes = {};

export default Paper;
