import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./components/Write";
import Read from "./components/Read";
import UpdateRead from "./components/UpdateRead";
import UpdateWrite from "./components/UpdateWrite";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Write />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<UpdateRead />}></Route>
          <Route
            path="/updatewrite/:firebaseId"
            element={<UpdateWrite />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
