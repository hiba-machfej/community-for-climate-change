import { useState } from "react";
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Nav} />
        <Route exact path="/">
          <HeroSection />
          <Cards isChanged={isChanged} />
          {userData && (
            <Home
              userData={userData}
              isChanged={isChanged}
              handleChange={setIsChanged}
            />
          )}
        </Route>
        <Route path="/sign-in">
          <SignIn handleFetch={setUserData} />
        </Route>
        <Route path="/sign-up">
          <SignUp handleFetch={setUserData} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
