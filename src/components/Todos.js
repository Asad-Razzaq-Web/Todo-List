import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  return (
    <div className="todos-container">
      <h3 className="todos-heading">Your Tasks</h3>
      <div className="todos-list-wrapper">
        {props.todos.length === 0 ? (
          <h5 className="no-todos-text">🎉 No tasks left! Enjoy your free time.</h5>
        ) : (
          props.todos.map((todo) => {
            return ( 
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Todos
