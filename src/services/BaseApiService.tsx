export const APIM_BASE_URL = 'https://bclausingwb-apim.azure-api.net/weatherforecasts/';
export const APIM_SUBSCRIPTION_KEY = '?subscription-key=9d7fdd56b3d14450b2e0d577a166244a';

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
export type BaseApiService<T> = 
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;

/// Helper function to construct the full API endpoint
export function setURL(endpointPath: string) {
    // Todo: Improve implementation to account for URL parms and make sure '/' are added only if needed.
    //       Current implementation only supports one url parm and has all '/' hardcoded.
    return APIM_BASE_URL + endpointPath + APIM_SUBSCRIPTION_KEY
}

export const standardHandleSuccess = () => {
    // Todo: Potentially do some standard logging here
};

export const standardHandleError = () => {
    // Todo: Potentially do some standard logging here
};
