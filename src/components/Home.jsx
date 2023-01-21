import React from "react";
import Filter from "../components/Filter";
import AddMovie from "../AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const Home = ({ movies }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("4");
  const add = (newMovie) => {
    movies.push(newMovie);
  };
  return (
    <div className="col-md-6 offset-md-3">
      <Filter
        title={title}
        setTitle={setTitle}
        rating={rating}
        setRating={setRating}
      />
      <MovieList
        movies={movies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(title.toLowerCase()) &&
            movie.rating == rating
        )}
      />

      <AddMovie add={add} />
    </div>
  );
};

export default Home;
