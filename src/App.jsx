//import React from "react";
import "./App.css";

import ConsultarEncuesta from "./Pages/ConsultarEncuesta";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./Pages/NotFound";


function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <ConsultarEncuesta/>
      break;
      default:
        Component = <NotFound></NotFound>
    
  }
  return (
    <div>
      <Header>
      </Header>
      <div className="container">{Component}</div>

      <Footer></Footer>
    </div>
  );
}

export default App;
