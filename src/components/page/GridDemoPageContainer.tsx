import React from 'react';
import GridDemoPage from './GridDemoPage';

type GridDemoPageContainerProps = { location: { pathname: string } };

const GridDemoPageContainer = (props: GridDemoPageContainerProps) => {
    const getTitle = () => {
        const path = props.location.pathname;
        return path === '/' ? 'Templates' : `${path.charAt(1).toUpperCase()}${path.slice(2)}`;
    };

    const getType = () => {
        const path = props.location.pathname;
        return path === '/' ? 'templates' : getTitle().toLowerCase();
    };

    return <GridDemoPage title={getTitle()} category={getType()} />;
};

export default GridDemoPageContainer;
