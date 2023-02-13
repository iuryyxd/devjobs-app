import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { Header } from "../components/Header";
import { Home } from "../screens/Home";

export function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </Router>
  );
}
