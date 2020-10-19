import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import DevExDataGrid from '../grid/DevExDataGrid';
import FileDownloadLink from '../file/FileDownloadLink';

interface UploadSchedulePageComponentProps extends RouteComponentProps {
    title: string,
    category: string
};

class UploadSchedulePage extends Component<UploadSchedulePageComponentProps> {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md'>
                        <FileDownloadLink />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md'>
                        <button>Upload Schedule Here</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md'>
                        <DevExDataGrid />
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(UploadSchedulePage);