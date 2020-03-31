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
                    <h1>Dashboard</h1>
                    <h3>=== OUT OF SCOPE for MVP ===</h3>
                    <p className="lead">
                        This is the application's temporary landing page.<br />
                        Use the menu to navigate to other parts of the app.<br />
                        We will use another landing page when that decision is made.<br />
                    </p>
                </div>
            </main>
        );
    }
};

export default withRouter(Page);
