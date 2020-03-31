import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import DevExDataGrid from '../grid/DevExDataGrid';

interface GridDemoPageComponentProps extends RouteComponentProps {
    title: string,
    category: string
};

class GridDemoPage extends Component<GridDemoPageComponentProps> {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md'>
                        <a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/React/Light/'>DevExtreme DataGrid Documentation</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md'>
                    <DevExDataGrid />
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(GridDemoPage);