import React from "react";
import Star from "./Star";

const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body">
        <Star rating={movie.rating} />
        <h3 className="card-title">{movie.title}</h3>
        <img
          src={movie.image}
          alt="image"
          style={{ height: "500px", width: "500px" }}
        />

        <p className="card-text">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
