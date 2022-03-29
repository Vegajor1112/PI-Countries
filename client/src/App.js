import { Route } from "react-router";
import { Link } from "react-router-dom";
import { Home, Country, CreateActivity } from "./pages";

function App() {
  return (
    <>
      <Route exact path="/">
        <Link to="/home">Home</Link>
      </Route>
      <Route exact path="/home" component={Home} />
      <Route path="/countries/:id" component={Country} />
      <Route exact path="/createActivity" component={CreateActivity} />
    </>
  );
}

export default App;
