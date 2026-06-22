import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div className="todo-item-card">
      <div className="todo-item-header">
        <h4 className="todo-item-title">{todo.title}</h4>
        <span className="todo-item-id">#{todo.sno}</span>
      </div>
      <div className="todo-item-body">
        <p className="todo-item-desc">{todo.desc}</p>
        <div className="todo-item-actions">
          <button className="btn-todo-delete" onClick={() => { onDelete(todo) }}>
            Delete Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
