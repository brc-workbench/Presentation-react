import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import DevExDataGrid from '../grid/DevExDataGrid';

interface PageComponentProps extends RouteComponentProps {
    title: string,
    category: string
};

class Page extends Component<PageComponentProps> {
    render() {
        return (
            <main className="container" role="main">
                <div className="starter-template">
                    <h1>Bootstrap starter template</h1>
                    <p className="lead">Use this document as a way to quickly start any new project.</p>
                </div>
                <a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/React/Light/'>DevExtreme DataGrid Documentation</a>
                <DevExDataGrid />
            </main>
        );
    }
};

export default withRouter(Page);
