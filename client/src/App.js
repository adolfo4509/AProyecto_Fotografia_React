import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nosotros from "./views/Nosotros";
import Home from "./views/Home";
import Contactanos from "./views/Contactanos";
import EventosReligiosos from "./views/EventosReligiosos";
import Recuerdos from "./views/Recuerdos";
import Quinceaneras from "./views/Quinceaneras";
import Graduaciones from "./views/Graduaciones";
import Gestantes from "./views/Gestantes";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/contactanos" component={Contactanos} />
        <Route path="/Religiosos" component={EventosReligiosos} />
        <Route path="/Recuerdos" component={Recuerdos} />
        <Route path="/Qinceaneras" component={Quinceaneras} />
        <Route path="/Graduaciones" component={Graduaciones} />
        <Route path="/Gestantes" component={Gestantes} />
      </Switch>
    </Router>
  );
}

export default App;
