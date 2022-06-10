import "./App.css";
import Header from "./components/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header2 from "./components/Header/Header2";
import Footer from "./components/Footer/Footer";
import Header3 from "./components/Header/Header3";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import { useStateValue } from "./StateProvider";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const App = () => {
  const [channels, loading, error] = useCollection(db.collection("data"));

  const [{ user }, dispatch] = useStateValue();
  const [customerData, setCustomerData] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: customerData ? customerData : authUser,
        });
      } else {
        setCustomerData(null);
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  useEffect(() => {
    if (user) {
      setCustomerData(
        channels?.docs?.filter(
          (doc) =>
            doc._document.data.value.mapValue.fields.email.stringValue ===
            user.email
        )[0]._document.data.value.mapValue.fields
      );
    }
  }, [user]);

  return (
    <div className="app">
      {/* <Menu /> */}
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header customerData={customerData} />
                  <Header3 />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <Header customerData={customerData} />
                  <Header2 />
                  <Checkout />
                </>
              }
            />
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/register" element={<h1>Register</h1>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
