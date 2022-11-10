import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landingpage from './components/LandingPage/Landingpage';
import Home from './components/Home/Home';
import DetailRecipe from './components/DetailRecipe/DetailRecipe';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landingpage}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/recipe' component={CreateRecipe} />
          <Route exact path="/recipes/:id" component={DetailRecipe} />
        </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
