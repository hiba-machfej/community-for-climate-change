import { useState } from "react";
import Nav from "./components/Nav";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import SignUp from "./components/SignUp1"
import SignIn from "./components/SignIn1"
import Home from "./components/Home";
import HeroSection from "./components/HeroSection"
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({});
  console.log(userData);
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Nav} />
        <Route exact path="/">
          <HeroSection/>
          <Home {...userData} />
        </Route>
        <Route path="/sign-in">
          {/* <SignIn handleFetch={setUserData} /> */}
          <SignIn />
        </Route>
        <Route path="/sign-up">
          
          {/* <SignUp handleFetch={setUserData} /> */}
          <SignUp  />
        </Route>
      </Router>
    </div>
  );
}

export default App;
