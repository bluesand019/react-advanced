import { useDispatch, useSelector } from "react-redux";
import { getData } from "./features/weatherSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather);

  return (
    <>
      {data.loading && <h2>loading...</h2>}
      {data.error && <h2>{data.error}</h2>}
      <button onClick={() => dispatch(getData())}>Get data</button>
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
