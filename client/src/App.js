import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nosotros from "./views/Nosotros";
import Home from "./views/Home";
import { EventosReligiosos } from "./views/EventosReligiosos";
import { Recuerdos } from "./views/Recuerdos";
import { Quniceañeras } from "./views/Quniceañeras";
import { Graduaciones } from "./views/Graduaciones";
import Gestantes from "./views/Gestantes";
import Contactanos from "./views/Contactanos";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/contactanos" component={Contactanos} />
        <Route exact path="/EventosReligiosos" component={EventosReligiosos} />
        <Route exact path="/recuerdos" component={Recuerdos} />
        <Route  path="/quinceañeras" component={Quniceañeras} />
        <Route  path="/graduaciones" component={Graduaciones} />
        <Route  path="/gestantes" component={Gestantes} />
      </Switch>
    </Router>
  );
}

export default App;
