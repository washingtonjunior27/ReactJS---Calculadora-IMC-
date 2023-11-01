import Button from './Button';
import './ImcTable.css';

const ImcTable = ( {imc, data, info, infoClass, resetCalc} ) => {
  return (
    <div className="imcTable">
      <h1>Tabela IMC</h1>
      <div className="table-status">
        <p>Seu IMC é:</p>
        <span className={infoClass}>{imc}</span>
      </div>
      <div className="table-status">
        <p>Situação Atual:</p>
        <span className={infoClass}>{info}</span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.info}>
              <td>{item.classification}</td>
              <td>{item.info}</td>
              <td>{item.obesity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button id="back" text="Voltar" action={resetCalc} />
    </div>
  )
}

export default ImcTable