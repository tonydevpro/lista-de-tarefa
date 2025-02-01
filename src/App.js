import './App.css';
import {useState} from 'react';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);


  function adicionarTarefa(){
    
    if (tarefa.trim() === '') return;
    setListaTarefas([...listaTarefas, {texto:tarefa, feita:false}]);
    setTarefa('');
  }
  function removerTarefa(index){
    setListaTarefas(listaTarefas.filter((_, i)=> i !== index))
  }
  function feito(index){
    setListaTarefas(
      listaTarefas.map((t, i) => 
      i === index ? {...t, feita: !t.feita} : t)
    );
  }
  return (
    <>
    <div className='geral'>
      <h1>Lista de <span>Tarefas</span></h1>
    <div className='tarefaAdicionar'>
      <input type='text' placeholder='Tarefa' value={tarefa} onChange={(props)=> setTarefa(props.target.value)}/>
      <input type='submit' value='adicionar' onClick={adicionarTarefa}/>
    </div>
    <div className='tarefas'>
      {listaTarefas.map((t, index) => (
        <div key={index} className='tarefa'>
          <button onClick={()=> feito(index)}>{t.feita ? '✔' : '❌'}</button>
          <span style={{textDecoration: t.feita ? 'line-through' : 'none'}}>
          {t.texto}
          </span>
          <button onClick={()=> removerTarefa(index)}>🗑️</button>
        </div>
      ))}
    </div>
    </div>
    </>
    
  );
}

export default App;
