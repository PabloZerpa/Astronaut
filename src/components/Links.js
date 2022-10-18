
import React from 'react';
import {NavLink} from 'react-router-dom';

import { FaSearch, FaNewspaper, FaVideo, FaImage } from "react-icons/fa";

const links = [
	{ url: '/', text: <FaSearch className='text-2xl hover:text-blue-600 dark:hover:text-yellow-400' /> },
  	{ url: '/images', text: <FaImage className='text-2xl hover:text-blue-600 dark:hover:text-yellow-400' /> },
  	{ url: '/videos', text: <FaVideo className='text-2xl hover:text-blue-600 dark:hover:text-yellow-400' /> },
];

export const Links = () => {
	return(
		<div className=" flex sm:justify-around justify-between items-center mt-4">
			{links.map(({url,text}) => (
				<NavLink to={url} className="m-2 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
					{text}
				</NavLink>
			))}
		</div>
	)
}

