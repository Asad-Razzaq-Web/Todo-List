import React, { useState } from 'react'

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const pre = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank")
    } else {
      props.addTodo(title, desc)
      setTitle("");
      setDesc("");
    }
  }

  return (
    <div className="add-todo-container">
      <h3 className="add-todo-heading">Create New Task</h3>
      <form onSubmit={pre}>
        <div className="mb-3">
          <label htmlFor="title" className="custom-form-label">Task Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="form-control custom-form-input" 
            id="title" 
            placeholder="What needs to be done?"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="custom-form-label">Task Description</label>
          <textarea 
            rows="3"
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
            className="form-control custom-form-input" 
            id="desc"
            placeholder="Add some details about this task..."
          />
        </div>
        <div className="text-end">
          <button type="submit" className="btn-todo-submit">Add Task</button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo
