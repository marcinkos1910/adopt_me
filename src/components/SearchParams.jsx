function searchParams(){
    const location = "Seatle, WA";

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" value={location} placeholder="Location"/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default searchParams;