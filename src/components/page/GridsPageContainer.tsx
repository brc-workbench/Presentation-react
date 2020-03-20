import React from 'react';
import GridsPage from './GridsPage';

type GridsPageContainerProps = { location: { pathname: string } };

const GridsPageContainer = (props: GridsPageContainerProps) => {
    const getTitle = () => {
        const path = props.location.pathname;
        return path === '/' ? 'Templates' : `${path.charAt(1).toUpperCase()}${path.slice(2)}`;
    };

    const getType = () => {
        const path = props.location.pathname;
        return path === '/' ? 'templates' : getTitle().toLowerCase();
    };

    return <GridsPage title={getTitle()} category={getType()} />;
};

export default GridsPageContainer;
