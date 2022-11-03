import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landingpage from './components/LandingPage/Landingpage';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landingpage}/>
          <Route exact path='/home' component={Home}/>
          {/* <Route exact path='/recipe' component={NewRecipe} /> */}
          {/* <Route exact path="/recipes/:id" component={RecipeDetail} /> */}
        </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
