import { Route } from "react-router";
import { Home, Country, CreateActivity } from "./pages";

function App() {
  return (
    <>
      <Route exact path="/home" component={Home} />
      <Route path="/countries/:id" component={Country} />
      <Route exact path="/createActivity" component={CreateActivity} />
    </>
  );
}

export default App;
