import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/';
import Dashboard from '../pages/Dashboard/';

const Routes: React.FC = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;