import { Route } from "react-router";
import { Home, Country } from "./pages";

function App() {
  return (
    <>
      <Route exact path="/home" component={Home} />
      <Route path="/countries/:id" component={Country} />
    </>
  );
}

export default App;
