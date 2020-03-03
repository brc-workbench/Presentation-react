import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import { BrowserRouter } from 'react-router-dom';

const wrapper = document.getElementById('root');
const app = (
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>
);

wrapper ? ReactDOM.render(app, wrapper) : false;