import gun from "./components/gun.PNG";
import alice from "./components/alice.PNG";
import avatar from "./components/avatar.PNG";

import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";

function App() {
  const movies = [
    {
      id: "1",
      title: "AVATAR:la voie de l'eau",
      description:
        "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
      trailer: (
        <iframe
          src="https: //www.youtube.com/embed/CM79GTEm2ps"
          title="YouTube video player"
          style={{ frameborder: "0" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ),

      rating: 5,
      image: avatar,
    },
    {
      id: "2",
      title: "Alice in Borderland",
      description:
        "A group of bored delinquents are transported to a parallel dimension as part of a survival game",
      trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/49_44FFKZ1M"
          title="YouTube video player"
          style={{ frameborder: "0" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      rating: 5,
      image: alice,
    },
    {
      id: "3",
      title: " Top Gun: Maverick",
      description:
        "Follows a lawyer at the CIA who gets entangled in dangerous international power politics when a former asset threatens to expose the nature of her long-term relationship with the agency.",
      trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ArOMXELHiLw"
          title="YouTube video player"
          style={{ frameborder: "0" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      image: gun,
    },
  ];
  console.log(movies.title);

  return (
    <Fragment>
      <Routes>
        <Route
          path="/mouvies/:id"
          element={<Details movies={movies} />}
        ></Route>
        <Route path="/" element={<Home movies={movies} />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
