
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom'
import AddEmp from "./Components/AddEmp";
import UpdateEmp from "./Components/UpdateEmp"
import List from "./Components/List";
import Update from "./Components/Update";

function App() {
  return (
    <div className="App">
              <Router>
        <div className="d-flex">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/add">AddEmployee</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
          </ul>

        <Routes>
        <Route exact path="/update" element={<Update/>}/>
          <Route exact path="/list" element={<List/>}/>
          <Route exact path="/add" element={<AddEmp/>}/>
         

        </Routes>
        </div>
        </Router>
      
    </div>
  );
}

export default App;
