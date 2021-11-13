import { useState } from 'react';
import './App.css';

let initialState = [
    {
      id: 1,
      prioridade: 'Normal',
      titulo: 'título',
      descricao: 'Batata'
    },
    {
      id: 2,
      prioridade: 'Normal',
      titulo: 'título',
      descricao: 'poTAto'
    },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    };

    setAtividades([...atividades, {...atividade}]);
  }

  return (
    <>
      <form className="row g-3 ms-2">
      <div className="col-md-4">
        <label className="form-label">Id</label>
        <input  
        id="id" 
        type="text"  
        className="form-control" 
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Prioridade</label>
        <select id="prioridade" className="form-select">
          <option defaultValue="0">Selecione</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>
      <div className="col-md-4">
        <label className="form-label">Título</label>
        <input  
        id="titulo" 
        type="text"  
        className="form-control" 
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Descrição</label>
        <input  
        id="descricao" 
        type="text"  
        className="form-control" 
        />
      </div>
      </form>
      <div className="mt-3 ms-2">
      <div className="col-12 ms-2 mb-3">
        <button className="btn btn-outline-success" onClick={addAtividade} ><i class="fas fa-plus-circle"></i> Atividade</button>
        </div>
            {atividades.map((ativ) => (
              <div key={ativ.id} className="card ms-2 mb-2 shadow-sm" style={{width: "20rem"}}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">
                    <span className="badge bg-secondary me-1">{ativ.id}</span>
                     {ativ.titulo}
                    </h5>
                    <h6>Prioridade: 
                      <span className="ms-1 text-black">
                        <i className="me-1 far fa-smile"></i>
                          {ativ.prioridade}
                      </span>
                    </h6>
                  </div>
                  <p className="card-text"> {ativ.descricao} </p>
                  <div className="d-flex justify-content-end pt-2 m-0 border-top">
                    <button className="btn-sm btn btn-outline-info me-2 ">
                      <i className="fas fa-pen me-2"></i>
                      Editar
                    </button>
                    <button className="btn-sm btn btn-outline-danger">
                    <i className="fas fa-trash me-2"></i>
                      Deletar
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
   </> 
  );
}

export default App;
