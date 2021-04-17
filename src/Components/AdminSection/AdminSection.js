import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AdminParts from '../Admin/AdminParts';
import ManageProduct from '../ManageProduct/ManageProduct';
import './AdminSection.css';

const AdminSection = () => {

    return (
        <div>
          <Router>
              <div style={{margin: '10px', padding: '10px'}}>
                  <Link className="Link-style" to="/manage">Manage Product</Link>
                  <Link className="Link-style" to="/addProduct">Add Product</Link>
              </div>
         <Switch>
             <Route path="/manage">
             <ManageProduct></ManageProduct>
             </Route>
             <Route path="/addProduct">
                 <AdminParts></AdminParts>
             </Route>
         </Switch>
        </Router>  
        </div>
    );
};

export default AdminSection;