import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landingpage from './components/LandingPage/Landingpage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landingpage}/>

        </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
