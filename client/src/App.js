import { Route } from "react-router";
import { Link } from "react-router-dom";
import { Home, Country, CreateActivity, LandingPage } from "./pages";

function App() {
  return (
    <>
      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route exact path="/home" component={Home} />
      <Route path="/countries/:id" component={Country} />
      <Route exact path="/createActivity" component={CreateActivity} />
    </>
  );
}

export default App;
