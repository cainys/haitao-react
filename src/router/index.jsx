import React from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import asyncComponent from '@/component/asyncComponent';
import index from '@/pages/index';

const history = createHistory();

const classIndex = asyncComponent(() => import("@/pages/class/class"));
const my = asyncComponent(() => import("@/pages/my/my"));
const login = asyncComponent(() => import("@/pages/my/login"));


const RouteConfig = (
    <Router path="/" history={history}>
        <div>
            <Route path="/"  exact component={index} />
            <Route path="/class" component={classIndex} />
            <Route path="/my" component={my} />                                                                                                                                                                                                                                                                                                                                                                                                                                              
            <Route path="/login" component={login} />                                                                                                                                                                                                                                                                                                                                                                                                                                              
            </div>
    </Router>
);
export default RouteConfig;
