import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApiService } from './BaseApiService';

const WEATHER_FORECAST_APIM_URL = 'https://bclausingwb-apim.azure-api.net/weatherforecasts/weatherforecast?subscription-key=9d7fdd56b3d14450b2e0d577a166244a';

export interface WeatherForecastRowItem {
    id: number,
    date: Date,
    temperatureC: number,
    summary: string    
}

const weatherService = () => {
    const [result, setResult] = useState<BaseApiService<WeatherForecastRowItem>>({
        status: 'loading'
    });

    useEffect(() => {
        axios.get(WEATHER_FORECAST_APIM_URL)
            .then(response => setResult({
                // handle success
                status: 'loaded', 
                payload: response.data
            }))
            .catch(error => {
                // handle error
                setResult({
                    status: 'error',
                    error
                });
                console.log(error);
            });
        }, []);
  
        return result;
    };
    
    export default weatherService;
          