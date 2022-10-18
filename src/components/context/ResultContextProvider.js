import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {

	const [searchTerm,setSearchTerm] = useState('');

	return(
		<ResultContext.Provider value={{searchTerm, setSearchTerm}}>
			{children}
		</ResultContext.Provider>
	)
}

export const useResultContext = () => useContext(ResultContext);

