import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import "./styles/colors.css";
import "./styles/global.css";
import { LoginForm } from "./pages/Login";
import { Posts } from "./pages/Posts";
import { PostDetails } from "./pages/PostDetails";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<LoadingSpinner message="Hello from" />}>
          <Routes>
            <Route
              path="/"
              element={<LoginForm message="Hello from" />}
            ></Route>
            <Route
              path="/app"
              element={
                isLoggedIn ? (
                  <Posts message="Hello from" />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              path="/post/:id"
              element={
                isLoggedIn ? (
                  <PostDetails message="Hello from" />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route path="*" element={<NotFound message="Hello from" />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
