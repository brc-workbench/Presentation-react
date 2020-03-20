import React, { useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import WeatherService from '../../services/WeatherService';

const WeatherForecastGridComponent: React.FC<{}> = () => {
    const service = WeatherService();
    
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={4}>Weather Forecasts</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {service.status === 'loaded' && 
                    service.payload.map(row => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{
                            new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "long", day: "2-digit"}).format(new Date(row.date))
                            }</TableCell>
                        <TableCell>{row.temperatureC}</TableCell>
                        <TableCell>{row.summary}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell colSpan={4}>Record Count: {service.status === 'loaded' &&
                        service.payload.length}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default WeatherForecastGridComponent;