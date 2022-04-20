import React from "react";
import * as ReactDOM from 'react-dom/client'

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {key: 1}, props.name),
    React.createElement("h3", {key: 2}, props.animal),
    React.createElement("h3", {key: 3}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, 
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet),
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
