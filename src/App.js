import { useState } from 'react';
import './App.css';
import  AtividadeForm from './components/AtividadeForm';
import  Atividade from './components/Atividade';

let initialState = [
    {
      id: 1,
      prioridade: '1',
      titulo: 'título',
      descricao: 'Batata'
    },
    {
      id: 2,
      prioridade: '2',
      titulo: 'título',
      descricao: 'poTAto'
    },
    {
      id: 3,
      prioridade: '3',
      titulo: 'título',
      descricao: 'teste'
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

  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  return (
    <>
      <AtividadeForm 
        atividades={atividades}
      />
      <div className="mt-3 ms-2">
        <div className="col-12 ms-2 mb-3">
          <button 
            className="btn btn-outline-info" 
            onClick={addAtividade} >
              <i className="fas fa-plus-circle"> ADICIONE</i> 
          </button>
          </div>
          <div className='mt-3'>
            {atividades.map((ativ) => (
              <Atividade  
                key={ativ.id} 
                ativ={ativ}
                deletarAtividade={deletarAtividade}
              />
              ))}
            </div>
        </div>
   </> 
  );
}

export default App;
