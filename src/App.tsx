import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import PageContainer from './components/page/PageContainer';
import GridsPageContainer from './components/page/GridsPageContainer';
import UploadSchedulePageContainer from './components/page/UploadSchedulePageContainer';
import GridDemoPageContainer from './components/page/GridDemoPageContainer';
import '../assets/scss/main.scss';

const App = () => {
    return (
        <Router>
            <HeaderContainer />
            <Switch>
                <Route exact path="/" component={PageContainer} />
                <Route path="/originalGrids" component={GridsPageContainer} />
                <Route path="/uploadSchedule" component={UploadSchedulePageContainer} />
                <Route path="/gridDemo" component={GridDemoPageContainer} />
            </Switch>
        </Router>
    );
};

export default App;
