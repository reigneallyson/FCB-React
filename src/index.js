
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function App() {

function TasksList(){

return(

<ul>
          <li className="tasks-item">Reigne
          </li>
 
          <li className="tasks-item"> Allyon </li>
          <li className="tasks-item"> De Leon</li>
        </ul>


        );

}
const paraStyle = {

  "margin-bottom": "15px",
  "backgroundColor": "red"
};

  return (
    <div className="app">
      <header className="app-header">

        <h1>My Amazing ToDo-List App</h1>
        <p style = {paraStyle}>The most simple and amazing todo-list React app.</p>

<TasksList />      

      </header>
    </div>
  );
}
ReactDOM.render(<App></App>, document.getElementById("root"));