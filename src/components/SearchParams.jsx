import { useState, useEffect, useContext } from "react";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import { useSearchParams } from "react-router-dom";

const animals = ["bird", "cat", "dog", "rabbit", "reptile"]

function searchParams(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [location, setLocation] = useState(searchParams.get("location") || "");
    const [animal, setAnimal] = useState(searchParams.get("animal") || "");
    const [breed, setBreed] = useState(searchParams.get("breed") || "");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(() => {
        requestPets().catch(() => {});
    }, []);

    useEffect(() => {

    }, [searchParams])

    async function requestPets() {
        const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

        const data = await response.json();
        setPets(data.pets);
    }

    function handleSubmit(event){
        event.preventDefault();

        requestPets().catch(() => {});
        const queryParams = {};
        if (location) queryParams.location = location;
        if (animal) queryParams.animal = animal;
        if (location) queryParams.breed = breed;
        setSearchParams(queryParams);
    }

    return (
        <div className="search-params">
            <form onSubmit={handleSubmit}>
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    id="location" 
                    value={location} 
                    placeholder="Location"
                    onChange={(event) => {
                        setLocation(event.target.value);
                    }}
                />

                    <label htmlFor="animal">Animal</label>
                    <select 
                        id="animal" 
                        value={animal} 
                        onChange={(event) => {
                            setAnimal(event.target.value);
                        }}
                        onBlur={(event) => {
                            setAnimal(event.target.value);
                        }}
                    >   
                        <option />
                        {animals.map((animal) => (
                            <option value={animal} key={animal}>
                                {animal}
                            </option>
                            ))}
                    </select>

                    <label htmlFor="breed">Breed</label>
                    <select 
                        id="breed"
                        disabled={!breeds.length}
                        value={breed} 
                        onChange={(event) => {
                            setBreed(event.target.value);
                        }}
                        onBlur={(event) => {
                            setBreed(event.target.value);
                        }}
                    >   
                        <option />
                        {breeds.map((breed) => (
                            <option value={breed} key={breed}>
                                {breed}
                            </option>
                            ))}
                    </select>

                    <label htmlFor="theme">Choose theme</label>
                    <select id="theme" value={theme} onChange={(evt) => {setTheme(evt.target.value)}} onBlur={(evt) => {setTheme(evt.target.value)}}>
                        <option value="violet">Violet</option>
                        <option value="gold">Gold</option>
                        <option value="blue">Blue</option>
                    </select>
                    
                <button type="submit" style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets}/>
        </div>
    );
}

export default searchParams;