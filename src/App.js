import React from 'react';
import Top from './top/top';

import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import store from './store/configStore'
import U from './components/users/u';
import A from './components/accounts/a';
import Bottom from './bottom/bottom';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Top />
                    <Switch>
                        <Route exact path='/' component={U} />
                        <Route exact path='/A' component={A} />
                        <Route exact path='/U' component={U} />
                    </Switch>
                    <Bottom />
                </div>
            </Router>
        </Provider>
    )
}

export default App;
