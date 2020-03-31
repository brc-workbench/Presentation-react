import axios, { AxiosResponse } from 'axios';
import { setURL } from './BaseApiService';
import { customers } from './data.js';

const DevExDataGridColumns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

export interface ContactRowItem {
    id: number,
    firstName: string,
    lastName: number,
    city: string    
}

/// REST service for the contact resource.
class contactsService {
    
    /// Retrieve all contacts
    getContacts():Promise<AxiosResponse<any>> {
        return axios.get(setURL("generalcontact"));
    }

    devExGridDataColumns() {
        return DevExDataGridColumns;
    }

    getDevExGridSampleData() {
        return customers;
    }
}

export default contactsService;

