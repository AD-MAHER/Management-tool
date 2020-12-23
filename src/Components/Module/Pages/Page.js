import React from 'react'
import LoginPage from './login/LoginPage';
import Layout1 from '../../Layout/Layout1';
import { Switch, Route } from "react-router-dom";
export default function Page() {
    return (

        <div>



            <Switch>
                <Route path="/" exact component={LoginPage}/>
                <Route path='/layout_1'  component={Layout1} />
            </Switch>

        </div>

    )
}
