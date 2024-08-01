import React, { useState } from "react";
import './Main.css';
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";

export default function Main(){
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([
    'fazer café',
    'beber agua',
    'estudar',
  ]);

  function handleChange(e){
    setNovaTarefa(e.target.value);
  }

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>

      <form action="#" className="form">
        <input onChange={ handleChange } type="text" value={ novaTarefa } />
        <button type="submit">
          <FaPlus />
        </button>
      </form>

      <ul className="tarefas">
        {tarefas.map(tarefa =>
          <li key={tarefa}>
            {tarefa}
            <div>
              <FaEdit className="edit"/>
              <FaWindowClose className="delete"/>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
