import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Details from "./components/Details";

import SearchParams from "./components/SearchParams";
import ThemeContext from "./components/ThemeContext";


function App() {
    const theme = useState("green");
    return (
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                <header>
                    <Link to="/"><h1>Adopt Me!</h1></Link>
                </header>
                <Routes>
                    <Route path="/" element={<SearchParams/>}/>
                    <Route path="/details/:id" element={<Details/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
        // <div>
        //     <h1>Adopt Me!</h1>
        //     <SearchParams />
        // </div>
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