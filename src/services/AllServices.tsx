import axios from 'axios';

const GENERAL_CONTACT_APIM_URL = 'https://bclausingwb-apim.azure-api.net/weatherforecasts/generalcontact?subscription-key=9d7fdd56b3d14450b2e0d577a166244a';
const WEATHER_FORECAST_APIM_URL = 'https://bclausingwb-apim.azure-api.net/weatherforecasts/weatherforecast?subscription-key=9d7fdd56b3d14450b2e0d577a166244a';

class AllRESTServices {
    GetAllContacts() {
        return axios.get(GENERAL_CONTACT_APIM_URL);
    }

    GetAllWeatherForecasts() {
        return axios.get(WEATHER_FORECAST_APIM_URL);
    }
}

export interface WeatherForecastRowItem {
    id: number,
    date: Date,
    temperatureC: number,
    summary: string    
}
export default AllRESTServices;