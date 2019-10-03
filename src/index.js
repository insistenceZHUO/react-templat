import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


import App from './App' 
import './index.less'
import { mainRouter  } from './routes/index'

render(
    <Router>
        <Switch>
           <Route path="/admin" render = { (routerProps) => {
                return <App {...routerProps}/>
            }}/>
            {
                mainRouter.map(route => {
                    return (
                            <Route key={route.pathname} path={route.pathname} component={route.component} />
                        )
                })
            }
            <Redirect to="/admin" from="/" exact></Redirect>
            <Redirect to="/404"></Redirect>
        </Switch>
    </Router>,
    document.getElementById('root')
)