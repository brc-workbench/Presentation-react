import React, { Component } from 'react';
import Header from './Header';

class HeaderContainer extends Component {
    render() {
        return (
            <Header title='containerTitle' initialState={false} />
        );
    }    
};

export default HeaderContainer;
