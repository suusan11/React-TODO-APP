import React, {Component} from 'react';

function List(props) {
    return(
        <ul>
            {props.todo.map((todo, index) => {
                return <li key={index}>
                    <input type="button" value="x" onClick={() => props.deleteTodo()}/>{todo.title}
                </li>
            })}

        </ul>
    )
}

export default List;