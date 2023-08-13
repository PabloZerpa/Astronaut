
import React from 'react';
import {NavLink} from 'react-router-dom';
import { TiVideo } from "react-icons/ti";
import { BiSearchAlt, BiImage } from "react-icons/bi";

const links = [
	{ url: '/', text: <BiSearchAlt className='text-4xl hover:text-blue-600 dark:hover:text-yellow-400' /> },
  	{ url: '/images', text: <BiImage className='text-4xl hover:text-blue-600 dark:hover:text-yellow-400' /> },
  	{ url: '/videos', text: <TiVideo className='text-4xl hover:text-blue-600 dark:hover:text-yellow-400' /> },
];

export const Links = () => {
	return(
		<div className="flex justify-center items-center space-x-12 mt-2">
			{links.map(({url,text}) => (
				<NavLink to={url} className="m-2 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
					{text}
				</NavLink>
			))}
		</div>
	)
}

