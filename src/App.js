import {BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import Home from "./routes/home/index";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
