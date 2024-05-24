import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetApi from "./component/crud/GetApi";
import Home from "./component/crud/Home";
import AppNavbar from "./component/crud/AppNavbar";
import Post from "./component/crud/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import Update from "./component/crud/Update";
import Login from "./component/crud/Login";
function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/GetApi" element={<GetApi />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/update" element={<Update />}></Route>
          <Route path="/home" element={<Home />}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
