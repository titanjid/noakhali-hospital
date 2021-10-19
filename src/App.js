
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import SingleService from './components/SingleService/SingleService';
import Doctor from './Doctor/Doctor';
import AboutUS from './components/About/AboutUS';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/loging">
            <Login></Login>
          </Route>
          <Route  path="/doctor">
            <Doctor></Doctor>
          </Route>
          <Route  path="/aboutUs">
            <AboutUS></AboutUS>
          </Route>
          <PrivateRoute path="/singleService/:serviceId">
            <SingleService></SingleService>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
