import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Components/Admin/Admin';
import AdminParts from './Components/Admin/AdminParts';
import AdminSection from './Components/AdminSection/AdminSection';
import ClothDetails from './Components/AnotherServices/ClothDetails/ClothDetails';
import Header from './Components/Home/Header/Header';
import HomePage from './Components/Home/HomePage/HomePage';
import ServiceDetails from './Components/Home/ServiceDetails/ServiceDetails';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import './App.css'
import Clothes from './Components/AnotherServices/Clothes/Clothes';
import OurServices from './Components/Home/OurServices/OurServices';

export const ThemeContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ThemeContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <div className="top-header-decoration">
       <h4 style={{textAlign: 'center', padding: '10px', textShadow: '6px 6px 12px gray'}}><i>Ninja Services</i></h4>
       <div className="animation-style">
       <h4>Covid-19 And Human Rights We are all in this together</h4>
       </div>
      </div>
      <Router>
      <Header></Header>
        <Switch>
         <Route path="/service/:serviceId">
           <ServiceDetails></ServiceDetails>
         </Route>
         <Route path="/cloth/:clothId">
           <ClothDetails></ClothDetails>
         </Route>
         <Route path="/adminSection">
         <AdminSection></AdminSection>
         </Route>
         <Route path="/cloth">
         <Clothes></Clothes>
         </Route>
         <Route path="/products">
           <OurServices></OurServices>
         </Route>
         <Route path="/login">
           <LogIn></LogIn> 
         </Route>
          <Route exact path="/">
          <HomePage></HomePage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
