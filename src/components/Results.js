import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from './context/ResultContextProvider';
import ReactPlayer from 'react-player';
import axios from 'axios';
import loader from "../assets/loader.svg";

export const Results = () => {

	const location = useLocation();
	const {searchTerm} = useResultContext();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);

	const webUrl = `${process.env.REACT_APP_URL}`;
	const imgUrl = `${process.env.REACT_APP_URL}/images`;
	const videoUrl = `${process.env.REACT_APP_URL}/videos`;

	const getResults = async (term, dataType) => {
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

		const { data } = await axios.post(`${baseUrl}`, {term});

		if(dataType === 'web'){
			setData(data.organic_results);
		}
		else if(dataType === 'image'){
			const original = data.images_results;
			const datos = original.slice(0, 40);
			setData(datos);
		}
		else if(dataType === 'video'){
			const original = data.video_results;
			const datos = original.slice(0, 10);
			setData(datos);
		}
		setIsLoading(false);
	}
	
	useEffect(() => {
		if(searchTerm)
		{
			setIsLoading(true);
			if(location.pathname === '/'){
				getResults(searchTerm, 'web');
			}
			else if(location.pathname === '/images'){
				getResults(searchTerm, 'image');
			}
			else if(location.pathname === '/videos'){
				getResults(searchTerm, 'video');
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
				
				<div className='flex flex-wrap justify-center items-center'>
					<div className='w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8'>
						{data.map((result, index) => {
							return (
							<div key={index}>

								<a href={result.link} target='__blank' className='flex items-center gap-4'>
									<img src={result.favicon} alt='img' className='w-6' loading="lazy" />
									<h5 className='text-lg text-blue-500 font-bold hover:underline'>{result.title}</h5>
								</a>

								<div className='truncate'>
									<a href={result.link} target='__blank' className='text-sm text-blue-500 hover:underline'>
										{result.link}
									</a>
								</div>
								<p className='text-base text-black dark:text-white'>{result.snippet}</p>
							</div>
							)
						})}
					</div>
				</div>
			);
		case '/images':
			return(
				<div className='flex flex-wrap justify-center items-center'>
					<div className='w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8'>
						{data.map((result, index) => {
							return (
								<a key={index} href={result.link} target='__blank' className='flex flex-col items-center gap-2'>
									<img src={result.thumbnail} alt='img' loading="lazy" />
				
									<div className='flex gap-2'>
										<img src={result.source_logo} alt='img' className='w-6' loading="lazy" />
										<span className='flex items-center gap-4'>{result.source}</span>
									</div>
									<h5 className='text-lg text-blue-500 font-bold hover:underline'>{result.title}</h5>
								</a>
							)
						})}
					</div>
				</div>
			);
		case '/videos':
			return(
				<div className='flex flex-wrap justify-center items-center'>
					<div className='w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8'>
						{data.map((result, index) => {
							return (
								<div key={index} className='flex flex-col items-center gap-2'>

									<ReactPlayer
										url={result.link}
										className='react-player'
										width='480px' 
										height='280px'
									/>
									<a href={result.link} target='__blank' className='text-lg text-blue-500 font-bold hover:underline'>{result.title}</a>
				
									<a href={result.channel.link} target='__blank' className='flex gap-2'>
									<img src={result.channel.thumbnail} alt='img' className='w-8' loading="lazy" />
									<span className='flex items-center gap-4'>{result.channel.name}</span>
									</a>
								</div>
							)
						})}
					</div>
				</div>
			);
	}
}