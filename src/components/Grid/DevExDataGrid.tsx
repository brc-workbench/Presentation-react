import React from 'react';
import DataGrid from 'devextreme-react/data-grid';
import { customers } from './data.js';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

const DevExDataGrid: React.FC<{}> = () => {
    return (
      <DataGrid
        dataSource={customers}
        defaultColumns={columns}
        showBorders={true}
      />
    );
};

export default DevExDataGrid;