import React from 'react';
import Page from './Page';

type PageContainerProps = { location: { pathname: string } };

const PageContainer = (props: PageContainerProps) => {
    const getTitle = () => {
        const path = props.location.pathname;
        return path === '/' ? 'Templates' : `${path.charAt(1).toUpperCase()}${path.slice(2)}`;
    };

    const getType = () => {
        const path = props.location.pathname;
        return path === '/' ? 'templates' : getTitle().toLowerCase();
    };

    return <Page title={getTitle()} category={getType()} />;
};

export default PageContainer;
