//import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./Pages/NotFound";
import Splash from "./Pages/Splash";
import ConsultarEncuesta from "./Pages/ConsultarEncuesta";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Splash />;
      break;
      case "/ConsultarEncuesta":
        Component = <ConsultarEncuesta />;
        break;
    default:
      Component = <NotFound></NotFound>;
  }
  return (
    <div>
      <Header></Header>
      <div className="container">{Component}</div>

      <Footer></Footer>
    </div>
  );
}

export default App;
