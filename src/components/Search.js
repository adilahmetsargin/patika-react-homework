import React, { useState } from "react";

function Search({ setSearchWeather }) {
  const api = {
    key: "94d403b2fed1acff7073a1385dde3153",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  const [parameter, setParameter] = useState("");

  const ara = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}?q=${parameter}&units=metric&lang=tr&appid=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          setParameter("");
          setSearchWeather(data);
        });
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <input
        className='p-1 w-2/3 h-10 outline-none text-center border-none text-base bg-[rgb(58,58,54) text-[#f3f2eb]] rounded-2xl'
        placeholder="City"
        onChange={(event) => setParameter(event.target.value)}
        value={parameter}
        onKeyPress={ara}
      ></input>
    </div>
  );
}

export default Search;