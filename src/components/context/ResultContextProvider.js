import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {

	const [results,setResults] = useState([]);
	const [searchTerm,setSearchTerm] = useState('Pizza');
	
	const getResults = async (type) => {
		const response = await fetch(`${baseUrl}${type}`, {
			method: 'GET',
			headers: {
				'X-User-Agent': 'desktop',
				'X-Proxy-Location': 'US',
				'X-RapidAPI-Key': '74bbabdf08msh459da6725fa9e02p1e01e8jsn42fb642e3342',
				'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
			}
		});

		const data = await response.json();

		if(type.includes('/news')){
			setResults(data.entries);
		} 
		else if(type.includes('/image')){
			setResults(data.image_results);
		} 
		else {
			setResults(data.results);
		}
		
	}

	return(
		<ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm}}>
			{children}
		</ResultContext.Provider>
	)
}

export const useResultContext = () => useContext(ResultContext);

