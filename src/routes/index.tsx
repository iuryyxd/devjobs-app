import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { Header } from "../components/Header";
import { Home } from "../screens/Home";
import { Job } from "../screens/Job";

export function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/details/:jobId" element={<Job />} />
      </Switch>
    </Router>
  );
}
