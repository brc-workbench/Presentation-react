import React from 'react';
import { Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import axios from 'axios';

//const WEATHER_FORECAST_URL = 'https://bclausingwb-api.azurewebsites.net/weatherforecast';
const WEATHER_FORECAST_APIM_URL = 'https://bclausingwb-apim.azure-api.net/weatherforecasts/weatherforecast?subscription-key=9d7fdd56b3d14450b2e0d577a166244a';
/* interface WeatherRowItem {
    id: Number,
    date: Date,
    temp: Number,
    summary: String
} */
//const JSON_RESPONSE = [{"id":1,"date":"2020-03-10T10:36:01.8905943","temperatureC":46,"temperatureF":114,"summary":"Hot"},{"id":2,"date":"2020-03-11T10:36:01.8905943","temperatureC":10,"temperatureF":49,"summary":"Freezing"},{"id":3,"date":"2020-03-12T10:36:01.8905943","temperatureC":48,"temperatureF":118,"summary":"Mild"},{"id":4,"date":"2020-03-13T10:36:01.8905943","temperatureC":34,"temperatureF":93,"summary":"Mild"},{"id":5,"date":"2020-03-14T10:36:01.8905943","temperatureC":32,"temperatureF":89,"summary":"Freezing"}];
const JSON_EMPTY_RESPONSE = [{"id":0,"date":"2020-03-10T10:36:01.8905943","temperatureC":0,"temperatureF":0,"summary":"Empty"}];
class WeatherForecastServiceComponent extends React.Component {
    state = {
        rowOfWeather: JSON_EMPTY_RESPONSE,
        loading: true,
        error: false
    }

    componentDidMount() {
        axios.get(WEATHER_FORECAST_APIM_URL)
            .then(response => this.setState({
                // handle success
                rowOfWeather: response.data
            }))
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                // handle error
                this.setState({
                    loading: false,
                    error: true
                });
                console.log(error);
            });
    }
     render() {
         const { rowOfWeather } = this.state;
         return (
             <Table>
                 <TableHead>
                     <TableRow>
                         <TableCell colSpan={4}>Weather Forecasts</TableCell>
                        </TableRow>                    
                 </TableHead>
                 <TableBody>
                 {rowOfWeather.map(row => (
                     <TableRow key={row.id}>
                         <TableCell>{row.id}</TableCell>
                         <TableCell>{row.date}</TableCell>
                         <TableCell>{row.temperatureC}</TableCell>
                         <TableCell>{row.summary}</TableCell>
                     </TableRow>
                 ))}
                 <TableRow>
                    <TableCell colSpan={4}>Record Count: {rowOfWeather.length}</TableCell>
                </TableRow>
                 </TableBody>
             </Table>
         );
     }  
};

export default WeatherForecastServiceComponent;