import MovieList from "./components/MovieList";
import gun from "./components/gun.PNG";
import alice from "./components/alice.PNG";
import avatar from "./components/avatar.PNG";

import { Fragment } from "react";
import AddMovie from "./AddMovie";
import { useState } from "react";
import Filter from "./components/Filter";

function App() {
  const movies = [
    {
      id: "1",
      title: "AVATAR:la voie de l'eau",
      description:
        "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
      posterURL:
        "https://www.imdb.com/title/tt1630029/mediaviewer/rm1548750849/?ref_=tt_ov_i",
      rating: 4,
      image: avatar,
    },
    {
      id: "2",
      title: "Alice in Borderland",
      description:
        "A group of bored delinquents are transported to a parallel dimension as part of a survival game",
      posterURL:
        "https://www.imdb.com/title/tt10795658/mediaviewer/rm2066169345/?ref_=tt_ov_i",
      rating: 5,
      image: alice,
    },
    {
      id: "3",
      title: " Top Gun: Maverick",
      description:
        "Follows a lawyer at the CIA who gets entangled in dangerous international power politics when a former asset threatens to expose the nature of her long-term relationship with the agency.",
      posterURL:
        "https://www.imdb.com/title/tt16030542/mediaviewer/rm809777153/?ref_=tt_ov_i",
      rating: 4,
      image: gun,
    },
  ];
  console.log(movies.title);
  const add = (newMovie) => {
    movies.push(newMovie);
  };
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("4");
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
