import React, { useState } from "react";
import SearchWeather from "./SearchWeather";

export default function SearchForm() {
  let [value, setValue] = useState(null);
  let [city, setCity] = useState(null);
  let [search, setSearch] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setCity(value);
    setSearch("1");
  }

  function updateCityName(event) {
    setValue(event.target.value);
    setSearch("0");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter City"
          onChange={updateCityName}
        />
        <input type="submit" value="Search" />
      </form>
      <SearchWeather city={city} search={search} />
    </div>
  );
}
