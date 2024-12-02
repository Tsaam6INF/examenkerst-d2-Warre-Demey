import { Fragment, useState } from "react";
import Personen from "./components/Personen";
function App() {
  const start = [
    { naam: "karel kleintjes", klassen: ["1A", "2A", "3STW"] },
    { naam: "Els Dotjes", klassen: ["1A", "2B", "3H"] },
  ];
  return (
    <Fragment>

      {start.map((persoon, index) => (
        <div className="card">
          <div className="card-body" >
        <Personen key={index} persoon={persoon} />
        </div>
        </div>
      ))}

    </Fragment>
  );
}

export default App;
