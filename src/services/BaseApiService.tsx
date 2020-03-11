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