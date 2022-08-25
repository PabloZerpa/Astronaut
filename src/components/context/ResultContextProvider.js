import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
	const [results,setResults] = useState([]);
	const [searchTerm,setSearchTerm] = useState('JS MASTERY');
	
	const getResults = async (type) => {

		const response = await fetch(`${baseUrl}${type}`, {
			method: 'GET',
			headers: {
				'x-user-agent': 'desktop',
				'x-rapidapi-host': 'google-search3.p.rapidapi.com',
				'x-rapidapi-key': process.env.REACT_APP_API,
			}
		});

		const data = await response.json();
		console.log(data);

		if(type.includes('/news')){
			setResults(data.entries);
		} 
		else if(type.includes('/images')){
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

