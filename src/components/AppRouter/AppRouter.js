// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import React from 'react'
import Search from '../Search'
import ShowPage from '../ShowPage'
import { Switch, Route, Redirect } from 'react-router-dom'
import './AppRouter.css'

export default () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Search} />
                <Route path="/shows/:id" component={ShowPage} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}