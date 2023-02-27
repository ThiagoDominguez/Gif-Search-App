import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategory }) => {
  const [inpValue, setInpValue] = useState("");

  const handleInpChange = (e) => {
    setInpValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inpValue.trim().length > 2) {
      setCategory((category) => [inpValue, ...category]);
      setInpValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Insert gif category"
        value={inpValue}
        onChange={handleInpChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
export default AddCategory;
