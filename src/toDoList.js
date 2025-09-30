import React from 'react';
import TodoItem from './TodoItem';

export default function ToDoList({todos,removeTask}){
    return(
        <ul style={style.list}>
            {todos.map((todo) => 
                <TodoItem key={todo.id} todo={todo} removeTask={removeTask}/>
            )}
        </ul>
    );
}

const style = {
    list: {
        listStyle: "none",
        padding: "0px"
    }
}