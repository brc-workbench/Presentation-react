import { useEffect, useState } from 'react';
import axios from 'axios';

// date formatter
//new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "long", day: "2-digit"}).format(row.date);
const GENERAL_CONTACT_APIM_URL = 'https://bclausingwb-apim.azure-api.net/weatherforecasts/generalcontact?subscription-key=9d7fdd56b3d14450b2e0d577a166244a';
const WEATHER_FORECAST_APIM_URL = 'https://bclausingwb-apim.azure-api.net/weatherforecasts/weatherforecast?subscription-key=9d7fdd56b3d14450b2e0d577a166244a';
interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T[];
}
interface ServiceError {
    status: 'error';
    error: Error;
}
interface ServiceInit {
    status: 'init';
}
interface ServiceLoading {
    status: 'loading';
}
export type ContactService<T> = 
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;

export interface ContactRowItem {
    id: number,
    firstName: string,
    lastName: number,
    city: string    
}

const contactsService = () => {
    const [result, setResult] = useState<ContactService<ContactRowItem>>({
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

