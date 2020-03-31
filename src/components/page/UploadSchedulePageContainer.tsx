import React from 'react';
import UploadSchedulePage from './UploadSchedulePage';

type UploadSchedulePageContainerProps = { location: { pathname: string } };

const UploadSchedulePageContainer = (props: UploadSchedulePageContainerProps) => {
    const getTitle = () => {
        const path = props.location.pathname;
        return path === '/' ? 'Templates' : `${path.charAt(1).toUpperCase()}${path.slice(2)}`;
    };

    const getType = () => {
        const path = props.location.pathname;
        return path === '/' ? 'templates' : getTitle().toLowerCase();
    };

    return <UploadSchedulePage title={getTitle()} category={getType()} />;
};

export default UploadSchedulePageContainer;
