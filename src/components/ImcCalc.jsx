import { useState } from "react";

import Button from "./Button";

import "./ImcCalc.css";

const ImcCalc = ({imc}) => {
  const [alturaState, setAlturaState] = useState("");
  const [pesoState, setPesoState] = useState("");

  const validityFields = (text) => {
    return text.replace(/[^0-9,]/g, "");
  }

  const handlerFields = (text, func) => {
    const updateValues = validityFields(text)
    func(updateValues);
  }

  const clearFields = (e) => {
    e.preventDefault();

    setAlturaState('')
    setPesoState('')
  }

  return (
    <form className="form">
      <h1 className="containerTitle">IMC</h1>
      <div className="form-container">
        <div className="form-control">
          <label htmlFor="altura">Altura:</label>
          <input
            type="text"
            name="altura"
            id="altura"
            onChange={(e) => handlerFields(e.target.value, setAlturaState)}
            value={alturaState}
          />
        </div>
        <div className="form-control">
          <label htmlFor="peso">Peso:</label>
          <input
            type="text"
            name="peso"
            id="peso"
            onChange={(e) => handlerFields(e.target.value, setPesoState)}
            value={pesoState}
          />
        </div>
      </div>
      <div className="actions">
        <Button id="calcular" text="Calcular" action={(e) => imc(e, alturaState, pesoState)} />
        <Button id="limpar" text="Limpar" action={clearFields} />
      </div>
    </form>
  );
};

export default ImcCalc;
