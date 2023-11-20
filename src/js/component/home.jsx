import React from "react";

//include images into your bundle
import { Card } from "./card.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <h1>This is a card component:</h1>
      <Card
        title="This is a really cute cat."
        buttonText="Click this button to go to the cat."
        buttonLink="http://placekitten.com/250"
      />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default Home;
