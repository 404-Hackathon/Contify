import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/header";
import HomePage from "./Components/Homepage";
import Biology from "./Components/Subjects/mwad/Biology";
import Subjects from "./Components/Subjects/subjects";
import Physics from "./Components/Subjects/mwad/physics";
import Chemistry from "./Components/Subjects/mwad/chemistry";
import History from "./Components/Subjects/mwad/history";
import Geography from "./Components/Subjects/mwad/geography";
import Arabic from "./Components/Subjects/mwad/arabic";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Route exact path="/" render={(props) => <HomePage />} />
          <Route exact path="/subjects" render={(props) => <Subjects />} />
          <Route exact path="/biology" render={(props) => <Biology />} />
          <Route exact path="/physics" render={(props) => <Physics />} />
          <Route exact path="/chemistry" render={(props) => <Chemistry />} />
          <Route exact path="/history" render={(props) => <History />} />
          <Route exact path="/geography" render={(props) => <Geography />} />
          <Route exact path="/arabic" render={(props) => <Arabic />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
