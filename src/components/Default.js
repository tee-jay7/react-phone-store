import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import notfound from "../notfound.svg";

function Default() {
  return (
    <div>
      <Title name="page not" title="found" />
      <Link to="/">
        <p className="mx-auto text-center text-title text-uppercase">
          head back home
        </p>
      </Link>
      <img
        src={notfound}
        alt="page not found"
        className="img-fluid container-fluid"
        style={{ width: "vw", height: "400px" }}
      />
    </div>
  );
}

export default Default;
