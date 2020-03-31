import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import ContactGridRowComponent from './ContactGridRow';

const ContactGridComponent: React.FC<{}> = () => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={4}>General Contacts</TableCell>
                </TableRow>
            </TableHead>
            <ContactGridRowComponent />
        </Table>
    );
};

export default ContactGridComponent;