import { useState } from 'react';
import './App.css';

let initialState = [
    {
      id: 1,
      descricao: 'Batata'
    },
    {
      id: 2,
      descricao: 'poTAto'
    },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    };

    setAtividades([...atividades, {...atividade}]);
  }

  return (
    <>
      <form className="row g-3">
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Id</label>
        <input  
        id="id" 
        type="text"  
        className="form-control" 
        />
      </div>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Descrição</label>
        <input  
        id="descricao" 
        type="text"  
        className="form-control" 
        />
        <hr/>
        <div className="col-12">
        <button className="btn btn-outline-success" onClick={addAtividade} > ➕ Atividade</button>
        </div>
      </div>
      <br/>
      </form>
      <div className="mt-3">
            {atividades.map((ativ) => (
              <div key={ativ.id} className="card mb-2 shadow-sm" style={{width: "18rem"}}>
                <div className="card-body">
                  <p className="card-text">
                  {ativ.id} - {ativ.descricao}
                  </p>
                </div>
              </div>
            ))}
      </div>
   </> 
  );
}

export default App;
