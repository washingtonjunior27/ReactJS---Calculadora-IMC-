import { useState } from "react";
import { data } from "./data/data";

import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

import "./App.css";

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const handlerImc = (e, altura, peso) => {
    e.preventDefault();

    if (!altura || !peso) return;

    const newPeso = +peso.replace(",", ".");
    const newAltura = +altura.replace(",", ".");

    const calc = +(newPeso / (newAltura * newAltura)).toFixed(1);
    
    setImc(calc);

    data.forEach(item => {
      if (calc >= item.min && calc <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
  };

  const resetCalc = () => {
    setImc("");
    setInfo("");
    setInfoClass("");
  };

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc imc={handlerImc} />
      ) : (
        <ImcTable
          imc={imc}
          data={data}
          info={info}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      )}
    </div>
  );
}

export default App;
