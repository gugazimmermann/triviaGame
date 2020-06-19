import React from "react";
import { Link } from "react-router-dom";

/**
 * A simple error page
 */
const NotFound = () => {
  console.log('error');
  return (
    <div className="container">
      <h1>Trivia Challenge</h1>
      <h2 data-testid="h2-1">Sorry, Page Not Found</h2>
      <Link to="/">
        <button data-testid="begin" type="button">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
