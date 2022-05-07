import React, { useState } from "react";
import "./index.css";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  const [searchWeather, setSearchWeather] = useState();

  return (
    <section className='h-screen m-0 bg-blue-100'>
      <div className='mt-10 text-center text-blue-300 text-4xl'>Weather App</div>
      <Search setSearchWeather={setSearchWeather} />
      <Result weather={searchWeather} />
    </section>
  );
}

export default App;