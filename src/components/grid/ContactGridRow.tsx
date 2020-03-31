import React from 'react';
import { useEffect, useState } from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import { BaseApiService } from '../../services/BaseApiService';
import ContactsService, { ContactRowItem } from '../../services/ContactsService';

const ContactGridRowComponent: React.FC<{}> = () => {
    const [state, setResult] = useState<BaseApiService<ContactRowItem>>({
        status: 'loading'
    });
    const service = new ContactsService();

    useEffect(() => {
        service.getContacts()
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
        
    return (
        <TableBody>
            {state.status === 'loading' && (
                <TableRow>
                    <TableCell>
                        <span>Loading...</span>
                    </TableCell>
                </TableRow>
            )}
            {state.status === 'loaded' && 
                state.payload.map(row => (
                <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.city}</TableCell>
                </TableRow>
            ))}
            <TableRow>
                <TableCell colSpan={4}>Record Count: {state.status === 'loaded' &&
                    state.payload.length}</TableCell>
            </TableRow>
            {state.status === 'error' && (
                <TableRow>
                <TableCell>
                    <span>Error!</span>
                </TableCell>
            </TableRow>
            )}        
        </TableBody>
    );
};

export default ContactGridRowComponent;