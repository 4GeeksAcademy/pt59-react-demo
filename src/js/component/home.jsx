import React, { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import { Card } from "./card";

const Home = () => {
  const [searchResults, setSearchResults] = useState([])

  // Async/await Syntax
  const searchSpoonacular = async (search) => {
    const url = "https://api.spoonacular.com/recipes/complexSearch";
    const apiKey = "150b3d1fc44d4503a4808decd9346790";

    const response = await fetch(`${url}?apiKey=${apiKey}&query=${search}`);
    const data = await response.json();

    setSearchResults(data.results);
  }

  // Promise Chaining Syntax
  // const searchSpoonacular = (search) => {
  //   const url = "https://api.spoonacular.com/recipes/complexSearch";
  //   const apiKey = "150b3d1fc44d4503a4808decd9346790";

  //   return fetch(`${url}?apiKey=${apiKey}&query=${search}`, {
  //     method: "GET",
  //   })
  //     .then(resp => resp.json())
  //     .then(data => setSearchResults(data.results));
  // }

  // Example of sending data to an API:
  const fetchWithPost = async () => {
    const resp = await fetch("https://httpbin.org/anything", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Neuromancer",
        author: "William Gibson"
      })
    })

    const data = await resp.json();
    console.log(data);
  }

  return (
    <>
      <NavBar onSubmit={searchSpoonacular} />
      <section className="d-flex flex-column gap-3 mt-3 align-items-center">
        {searchResults.map((recipe, idx) => <Card
          key={idx}
          title={recipe.title}
          img={recipe.image}
          buttonText="View This Recipe"
        ></Card>)}
      </section>
    </>
  );
};

export default Home;
