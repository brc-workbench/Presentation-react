import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import PageContainer from './components/Page/PageContainer';
import 'assets/scss/main.scss';

const App = () => {
    return (
        <Router>
            <HeaderContainer />
            <Switch>
                <Route exact path="/" component={PageContainer} />
            </Switch>
        </Router>
    );
};

export default App;
