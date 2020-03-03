import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { RouteComponentProps, withRouter } from 'react-router-dom';

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
            </main>
        );
    }
};
/* 
Page.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    match: PropTypes.object
}; */

export default withRouter(Page);
/* export default Page; */
