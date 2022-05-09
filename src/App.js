import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Details from "./components/Details";

import SearchParams from "./components/SearchParams";


function App() {
    return (
        // <div>
        //     <h1>Adopt Me!</h1>
        //     <SearchParams />
        // </div>
        <BrowserRouter>
            <header>
                <Link to="/"><h1>Adopt Me!</h1></Link>
            </header>
            <Routes>
                <Route path="/" element={<SearchParams/>}/>
                <Route path="/details/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
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