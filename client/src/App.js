import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nosotros from "./views/Nosotros";
import Home from "./views/Home";
import Contactanos from "./views/Contactanos";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/nosotros" component={Nosotros} />
        <Route exact path="/" component={Home} />
        <Route path="/contactanos" component={Contactanos} />
      </Switch>
    </Router>
  );
}

export default App;
