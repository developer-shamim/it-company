import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import AddImage from './components/Dashboard/AddImage';
import Home from './components/Home/Home/Home';
import DesignTshirt from './components/Dashboard/DesignTshirt';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/insertImages">
          <AddImage/>
        </Route>

        <Route path="/design">
          <DesignTshirt/>
        </Route>

        <Route path="/contact">
          
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
