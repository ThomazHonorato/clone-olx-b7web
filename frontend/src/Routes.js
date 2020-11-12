import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/home';
import About from './Pages/About/about';

function Routes(){
    return(
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/about'>
                <About/>
            </Route>
            <Route>

            </Route>
    </Switch>
    );
}

export default Routes;