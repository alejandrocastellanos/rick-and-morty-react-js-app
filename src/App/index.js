import React from 'react';
import { AppProvider } from '../AppContext';
import {AppUI} from './AppUI';


function Index() {
    return (
        <AppProvider>
            <AppUI/>
        </AppProvider>
    );
}

export default Index;