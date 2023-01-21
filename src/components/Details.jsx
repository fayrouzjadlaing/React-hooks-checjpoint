import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((el) => el.id === id);
  const navigate = useNavigate();
  const onClick = () => navigate("/");
  return (
    <div className="card mb-3" style={{ maxwidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={movie.image}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Description</h5>
            <p className="card-text">{movie.description}</p>
            <h5>Trailer</h5>
            {movie.trailer}
            <br />
            <button className="btn btn-primary" onClick={onClick}>
              return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
