import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Results from './pages/results';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/resultados">
                    <Results />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}