import React, { Component } from 'react';
import DataGrid, { Export, Pager, Paging, FilterRow } from 'devextreme-react/data-grid';
import ContactsService from '../../services/ContactsService';

const DevExDataGrid: React.FC<{}> = () => {
  const service = new ContactsService();

  return (
    <DataGrid
      dataSource={service.getDevExGridSampleData()}
      defaultColumns={service.devExGridDataColumns()}
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