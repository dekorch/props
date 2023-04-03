import React from "react";
import Star from "./Star";
import shortid from "shortid";

const Stars = ({ count }) => {
  const isValidRating = count > 5 || count < 1;
  const countStars = [...new Array(count).fill(0)];

  return isValidRating ? null : (
    <ul className="card-body-stars u-clearfix">
      {countStars.map(() => (
        <li key={shortid.generate()}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

export default Stars;
