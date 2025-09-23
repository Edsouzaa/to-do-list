import React, {useState} from 'react'; 
import ToDoList from "./toDoList";

export default function App(){ 
  // variavel de estado que armazenará todas as atividades 
  const [todos, setTodos] = useState([]); // [] indica um array
  
  // variavel de estado relativo a tarefa 
  const [newTask, setNewTask] = useState(''); 
  
  // variavel de estado relativa a data 
  const [dataDia, setDataDia] = useState(''); 
  
  // variavel de estado relativo a hora 
  const [hora, setHora] = useState(''); 
  
  // Funcao adiciona uma tarefa na lista 
  const addTask = () => { 
    if(newTask.trim() === '') return; 
    
    // Crio um objeto que representa a atividade 
    const newToDo = { 
      id: Date.now(), // Crio um id unico baseado na hora atual 
      text: newTask, 
      data: dataDia, 
      hora: hora 
    }; 
    
    setTodos([...todos, newToDo]); 
    
    // Limpar as variaveis de estado 
    setNewTask(''); 
    setDataDia(''); 
    setHora(''); 
  }; 
  
  // Função que remove as tarefas pelo id 
  const removeTask = (id) => 
    setTodos(todos.filter((todo) => todo.id !== id)) 
  ; 

  return( 
    <div> 
      <h1>Minha To-do-List</h1> 
      <div> 
        <input 
          type='text' 
          placeholder='Digite uma nova tarefa' 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        /> 
        <button onClick={addTask}>Adicionar</button> 
      </div> 
      <div> 
        <ToDoList todos={todos} removeTask={removeTask}/> 
      </div> 
    </div> 
  ); 
};
