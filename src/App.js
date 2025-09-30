import React, {useState} from 'react'; 
import ToDoList from "./ToDoList";

export default function App(){ 
  // variavel de estado que armazenará todas as atividades 
  const [todos, setTodos] = useState([]); // [] indica um array

  const [visivel, setVisivel] = useState(true);
  
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

  //função que mostra/esconde a lista 
  const showList = () => {
    setVisivel(!visivel)
  }

  return( 
    <div style={style.container}> 
      <h1>Minha To-do-List</h1> 
      <div style={style.container}> 
        <input 
          type='text' 
          placeholder='Digite uma nova tarefa' 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)}
          style={style.input}
        /> 
        <button onClick={addTask}>Adicionar</button>
        <button onClick={showList}>Lista</button>
      </div>
      <div style={{marginTop: 20}}>
          <input
          type='time'
          placeholder=''
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          style={style.inputdh}
          />
          <input
          type='date'
          placeholder='Escolha uma data'
          value={dataDia}
          onChange={(e) => setDataDia(e.target.value)}
          style={style.inputdh}
          />
      </div>
      <div
        style={{
          height: "500px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px"
        }}
      > 
        {
        visivel && <ToDoList todos={todos} removeTask={removeTask}/> 
        }    
      </div> 
    </div>
  ); 
}

const style = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  },
  inputdh: {
    padding: "10px",
    width: "39%",
    marginRight: "5px",
    borderRadius: "10px"
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "5px"
  },
  button: {
    padding: "10px",
    cursor: "pointer"
  }
}
