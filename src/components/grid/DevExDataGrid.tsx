import React, { Component } from 'react';
import DataGrid, { Export, Pager, Paging, FilterRow } from 'devextreme-react/data-grid';
import { customers } from './data.js';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

const DevExDataGrid: React.FC<{}> = () => {
  return (
    <DataGrid
      dataSource={customers}
      defaultColumns={columns}
      showBorders={true}>
      <Export enabled={true} fileName="Employees" allowExportSelectedData={false} />
      <Paging defaultPageSize={10} />
      <Pager
        showPageSizeSelector={true}
        allowedPageSizes={[5, 10, 20]}
        showInfo={true} />
      <FilterRow
        visible={true}
        applyFilter='auto' />
    </DataGrid>
  );
};

export default DevExDataGrid;