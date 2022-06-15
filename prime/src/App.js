import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const App = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/moreInfo" element={<Login />} /> */}
          {/* <Route path="/register" element={<h1>Register</h1>} />
          <Route path="/store" element={<h1>Store</h1>} />
          <Route path="/mystuff" element={<h1>My Stuff</h1>} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
