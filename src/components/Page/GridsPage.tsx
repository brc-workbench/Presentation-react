import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ContactGridComponent from '../grid/ContactGrid';
import WeatherForecastGridComponent from '../grid/WeatherForecastGrid';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

interface GridsPageComponentProps extends RouteComponentProps {
    title: string,
    category: string
};

class GridsPage extends Component<GridsPageComponentProps> {
    render() {
        return (
            <main className="container" role="main">
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

export default withRouter(GridsPage);
