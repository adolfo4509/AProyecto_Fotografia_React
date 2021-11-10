import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nosotros from "./views/Nosotros";
import Home from "./views/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/nosotros" component={Nosotros} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
