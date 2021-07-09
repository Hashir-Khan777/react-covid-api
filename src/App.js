import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCovidCases } from "./store/action/getCovidCases";

function App() {
  const dispatch = useDispatch();

  const { cases } = useSelector((state) => state.CovidCases);

  useEffect(() => {
    dispatch(getCovidCases());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Covid 19 recods</h1>
      {cases ? (
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>
                <h3>Country</h3>
              </td>
              <td>
                <h3>Country code</h3>
              </td>
              <td>
                <h3>Total confirmed</h3>
              </td>
              <td>
                <h3>Total recoverd</h3>
              </td>
              <td>
                <h3>Total deaths</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            {cases.Countries.map((country, index) => {
              return (
                <tr key={country.ID}>
                  <td>{index + 1}</td>
                  <td>{country.Country}</td>
                  <td>{country.CountryCode}</td>
                  <td>{country.TotalConfirmed}</td>
                  <td>{country.TotalDeaths}</td>
                  <td>{country.TotalRecovered}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default App;
