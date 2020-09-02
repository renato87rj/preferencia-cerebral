import React, { useState } from 'react';

export const ResultsContext = React.createContext();

export const ResultsProvider = ({children}) => {
    const [values, setValues] = useState({});

    return (
        <ResultsContext.Provider value={{values, setValues}}>
            {children}
        </ResultsContext.Provider>
    );
}
