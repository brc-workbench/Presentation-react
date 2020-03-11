import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApiService } from './BaseApiService';

// date formatter
//new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "long", day: "2-digit"}).format(row.date);
const GENERAL_CONTACT_APIM_URL = 'https://bclausingwb-apim.azure-api.net/weatherforecasts/generalcontact?subscription-key=9d7fdd56b3d14450b2e0d577a166244a';
const WEATHER_FORECAST_APIM_URL = 'https://bclausingwb-apim.azure-api.net/weatherforecasts/weatherforecast?subscription-key=9d7fdd56b3d14450b2e0d577a166244a';

export interface ContactRowItem {
    id: number,
    firstName: string,
    lastName: number,
    city: string    
}

const contactsService = () => {
    const [result, setResult] = useState<BaseApiService<ContactRowItem>>({
        status: 'loading'
    });

    useEffect(() => {
        axios.get(GENERAL_CONTACT_APIM_URL)
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

export default contactsService;

