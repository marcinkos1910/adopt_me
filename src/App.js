import SearchParams from "./components/SearchParams";


function App() {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
        </div>
    )

//   return React.createElement("div", {}, 
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//   );
};

export default App;