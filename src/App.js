import './App.css';
import React, {useCallback, useEffect, useState} from "react";
import 'primeflex/primeflex.css';
import AddTodo from "./AddTodo";
import Header from "./Header";
import DosList from "./DosList";

function App() {
    let [toDoList, setToDoList] = useState([]);

    const fetchData = useCallback(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                setToDoList(data)
            });
    }, []);

    useEffect(() =>{
        fetchData();
        console.log(toDoList);
    }, [fetchData]);


  return (
      <>
          <Header />
          <div className="p-grid p-m-2">
              <div className="p-col">
                  <AddTodo onAddToDo={newToDo => setToDoList([...toDoList, newToDo])}/>
              </div>
              <div className="p-col">
                  <DosList doList={toDoList}/>
                  <p>Testing Develop Branch</p>
              </div>
          </div>
      </>

  );
}

export default App;
