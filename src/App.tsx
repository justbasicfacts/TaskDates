import { useEffect } from "react";
import { getCompanies } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store/store";
import { companiesSelector } from "./store/companiesSelector";
import "bootstrap/dist/css/bootstrap.min.css";
import { Company } from "./components/Company/Company";
import "./_App.scss";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const { companies, status } = useSelector(companiesSelector);

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return (
    <div className="app container" data-testid="App">
      {status === "complete" ? (
        <div className="row">
          {companies.map((company, index) => {
            return (
              <Company
                key={`company-${company.id}_${index}`}
                company={company}
              />
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
