import React from "react";
import "./App.css";
import "./components/style.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import { 
  BrowserRouter as Router,
  Routes,
  Route 
  } from "react-router-dom";



//---------------- main function-----------


function App() {
  //----------Delete Todos----------
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // this whould not work in react
    // let index = todos.indexOf(todo)
    // todos.splice(index, 1)

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      }),
    );

    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  // ----------Add Todos-----------
  const addTodo = (title, desc) => {
    console.log("i am adding", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodos = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodos]);
    console.log(myTodos);
  };

  // ---get data from storade to dispaly---
  let initTodo;
 if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //--------Help to add to add todos------
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);




  return (
    <>
<Router basename="/Todo-List">
  <Header title="Todo List" searchBar={true} />
     <main className="content-wrapper">
  <Routes>
  <Route path="/" element={
      <>
       <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
      </>
    }/>
  <Route path="/about" element={<About />}/>
  </Routes>
</main>
   
      <Footer />
</Router>
    </>
  );
}

export default App;