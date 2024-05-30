import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetApi from "./component/crud/GetApi";
import Home from "./component/crud/Home";
import AppNavbar from "./component/crud/AppNavbar";
import Post from "./component/crud/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import Update from "./component/crud/Update";
import Login from "./component/crud/Login";
import ProtectedRoute from "./component/crud/common/protectedRoute";
function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/update"
            element={
              <ProtectedRoute>
                <Update />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route
            path="/GetApi"
            element={
              <ProtectedRoute>
                <GetApi />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
