import React from "react";

const Categories = ({ category, filterItems }) => {
  return (
    <div className="btn-container">
      {category.map((item, index) => {
        return (
          <button
            onClick={() => filterItems(item)}
            key={index}
            className="filter-btn"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
