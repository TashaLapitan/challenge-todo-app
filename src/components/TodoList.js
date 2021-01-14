import React from 'react'
import TodoCard from './TodoCard';

function TodoList(props) {

    const tasks = props.tasks;

    return (
        <div>
            {tasks.map(task => {return <TodoCard task={task} key={task._id}/>})}
        </div>
    )
}

export default TodoList;