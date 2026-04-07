import { useDispatch, useSelector } from "react-redux";
import { getData } from "./features/weatherSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather);
  const [city, setCity] = useState("");

  const inputHandler = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      {data.loading && <h2>loading...</h2>}
      {data.error && <h2>{data.error}</h2>}
      <label htmlFor="search">Enter City Name:</label>
      <input
        value={city}
        onChange={(e) => inputHandler(e)}
        type="text"
        name="search"
        id="search"
      />
      <br />
      <button
        onClick={() => {
          if (city.trim() == "") {
            alert('Please enter a valid city');
          }
          dispatch(getData(city));
        }}
        disabled={data.loading}
      >
        {data.loading ? "Fething..." : "Get data"}
      </button>
      {data.info && (
        <div className="fethedWether">
          <h2>{data.info?.name}</h2>
          <p>Temp: {(data.info.main.temp - 273.16).toFixed(2)} °C</p>
          <p>Description: {data.info.weather[0].description}</p>
        </div>
      )}
    </>
  );
}

export default App;
