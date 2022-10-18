import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from './context/ResultContextProvider';
import loader from "../assets/loader.svg";

export const Results = () => {

	const location = useLocation();
	const {searchTerm} = useResultContext();

	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);

	const webUrl = 'https://bing-web-search1.p.rapidapi.com';
	const imgUrl = 'https://bing-image-search1.p.rapidapi.com';
	const videoUrl = 'https://youtube138.p.rapidapi.com';

	const getResults = async (type, dataType) => {
		let baseUrl;
		if(dataType === 'web'){
			baseUrl = webUrl; 
		}
		else if(dataType === 'image'){
			baseUrl = imgUrl;
		}
		else if(dataType === 'video'){
			baseUrl = videoUrl;
		}

		const response = await fetch(`${baseUrl}${type}`, {
			method: 'GET',
			headers: {
				'X-BingApis-SDK': 'true',
				'X-RapidAPI-Key': process.env.REACT_APP_API,
				'X-RapidAPI-Host': `bing-${dataType}-search1.p.rapidapi.com`
			}
		});
		const x = await response.json();

		if(dataType === 'web'){
			setData(x['webPages']['value']);
		}
		else if(dataType === 'image'){
			setData(x['value']);
		}
		else if(dataType === 'video'){
			setData(x['value']);
		}
		setIsLoading(false);
	}
	
	useEffect(() => {
		if(searchTerm)
		{
			setIsLoading(true);
			if(location.pathname === '/'){
				getResults(`/search?q=${searchTerm}&count=12`, 'web');
			}
			else if(location.pathname === '/images'){
				getResults(`/images/search?q=${searchTerm}&count=10`, 'image');
			}
			else if(location.pathname === '/videos'){
				getResults(`/search/?q=${searchTerm}`, 'video');
			}
		}
		
	}, [searchTerm, location.pathname]);

	if (isLoading) {
		return (
			<div className="flex flex-wrap justify-between ">
				<div></div>
				<img className="w-28" src={loader} alt="loader" />
				<div></div>
			</div>
		);
	}

	switch(location.pathname){
		case '/':
			return (
				<div className="flex flex-wrap justify-between space-y-6 sm:px-56">
					{data.map(({name,url}, index) => (
						<div key={index} className="md:w-2/5 w-full">
							<a href={url} target="_blank" rel="noreferrer"> 
								<p className="text-sm">
									{url}
								</p>
								<p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
									{name}
								</p>
							</a>
						</div>
					))}
				</div>
			);
		case '/images':
			return(
				<div className="flex flex-wrap justify-center items-center">
					{data.map(({thumbnailUrl, webSearchUrl, name}, index) => (
						<a className="sm:p-3 p-5" href={webSearchUrl} key={index} target="_blank" rel="noreferrer">
							<img className='w-480 h-360' src={thumbnailUrl} alt={name} />
							<p className="w-30 break-words text-sm mt-2">
								{name}
							</p>
						</a>
					))}
				</div>
			);
		case '/videos':
			return(
				<div className="flex flex-wrap justify-center items-center">
					{data.map((webSearchUrl,index) => (
						<div key={index} className="p-3">
							<video width="480" height="320" controls>
								<source src={webSearchUrl} type="video/mp4" />
							</video>
						</div>
					))}
				</div>
			);
	}
}