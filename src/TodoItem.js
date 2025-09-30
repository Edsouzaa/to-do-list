import React from 'react';

export default function TodoItem({todo,removeTask}){
    return(
        <li style={style.item}>
            {todo.data} -- {todo.hora} -- : {todo.text}
            <button style={style.button} onClick={() => removeTask(todo.id) }>X</button>
        </li>
    );
};
const style = {
    item: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    button: {
        background: "red",
        color: "white",
        border: "none",
        padding: "5px",
        cursor: "pointer",
        borderRadius: "4px"
    }
}
