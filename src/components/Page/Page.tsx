import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { RouteComponentProps, withRouter } from 'react-router-dom';
//import WeatherForecastService from '../../services/WeatherForecastsService';
import ContactGridComponent from '../Grid/ContactGrid';
import WeatherForecastGridComponent from '../Grid/WeatherForecastGrid';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

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
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <WeatherForecastGridComponent />
                            </TableCell>
                            <TableCell className="gridSeperator">                              
                            </TableCell>
                            <TableCell>
                                <ContactGridComponent />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>                
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
