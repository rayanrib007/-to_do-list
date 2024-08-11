import React, { useState, useEffect } from "react";
import "./Main.css";

import Form from "./Form";
import Tarefas from "./Tarefas";

export default function Main() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas");
    if (!tarefasStorage) return;
    setTarefas(JSON.parse(tarefasStorage));
  }, []);

  useEffect(() => {
    if (tarefas.length === 0) return localStorage.clear();
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleSubmit(e) {
    e.preventDefault();
    let nova = novaTarefa.trim();
    if (tarefas.indexOf(nova) !== -1 || !nova) return;
    const novasTarefas = [...tarefas];
    if (index === -1) {
      setTarefas([...novasTarefas, nova]);
    } else {
      novasTarefas[index] = novaTarefa;
      setTarefas([...novasTarefas]);
      setIndex(-1);
    }
    setNovaTarefa("");
  }

  function handleChange(e) {
    setNovaTarefa(e.target.value);
  }

  function handleEdit(e, index) {
    setIndex(index);
    setNovaTarefa(tarefas[index]);
  }

  function handleDelete(e, index) {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas([...novasTarefas]);
  }

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        novaTarefa={novaTarefa}
      />
      <Tarefas
        tarefas={tarefas}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
