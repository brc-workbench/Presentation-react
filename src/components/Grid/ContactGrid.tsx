import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import ContactsService from '../../services/ContactsService';

const ContactGridComponent: React.FC<{}> = () => {
    const service = ContactsService();
        
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={4}>General Contacts</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* {service.status === 'loading' && (
                    <TableRow>
                        <TableCell>
                            <span>Loading...</span>
                        </TableCell>
                    </TableRow>
                )} */}
                {service.status === 'loaded' && 
                    service.payload.map(row => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.city}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell colSpan={4}>Record Count: {service.status === 'loaded' &&
                        service.payload.length}</TableCell>
                </TableRow>
                {service.status === 'error' && (
                    <TableRow>
                    <TableCell>
                        <span>Error!</span>
                    </TableCell>
                </TableRow>
                )}        
            </TableBody>
        </Table>
    );
};

export default ContactGridComponent;