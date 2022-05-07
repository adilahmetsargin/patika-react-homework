import React from "react";

function Result({ weather }) {
  return (
    <>
      {typeof weather != "undefined" && (
        <>
          <div className="text-center mt-8 text-5xl text-[rgba(147,197,253)]">
  

            {weather.name},{weather.sys.country}
          </div>
          <div className="flex relative justify-center bg-black m-8 opacity-60 rounded-2xl h-64">
            <div className="text-center mt-5 absolute text-5xl text-white">{Math.round(weather.main.temp)} °c</div>
            <div className="flex items-center mt-5 text-center text-3xl text-white">{weather.weather[0].main}</div>
          </div>
        </>
      )}
  
    </>
  );
}

export default Result;