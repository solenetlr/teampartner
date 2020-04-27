import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Connection from './Login'
import Form from './Form/Mainform'

const Router = () => {

return (
    <>
        <Switch>
            <Route exact path='/' component={Connection} />
            <Route exact path='/form' component={Form} />
        </Switch>
    </>
)
}

export default Router