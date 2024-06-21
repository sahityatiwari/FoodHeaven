import React from "react";
import { data } from "../resApi.json";
import NavBar from "../components/navBar";

const Qualities = () => {
  return (
    <>
      <section className="qualities" id="qualities">
        <NavBar />
        <div className="overlay"></div>

        <div className="container">
          {data[0].ourQualities.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <p className="title">{element.title}</p>
                <p className="description">{element.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Qualities;
