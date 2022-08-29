
import React from 'react';
import {Link} from 'react-router-dom';
import { Search } from './Search';

import { FaUserAstronaut, FaSun, FaMoon } from "react-icons/fa";

export const Navbar = ({darkTheme, setDarkTheme}) => {
	return(
		<div className="p-8 pb-2 flex flex-wrap sm:justify-between justify-center border-b dark:border-gray-700 border-gray-300">
			<div className="flex justify-between items-center space-x-5 w-screen">
				<Link to='/'>
					<p className="flex text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-yellow-400 dark:text-gray-900"> 
						<FaUserAstronaut className='mt-1 mr-2'/> Astronaut
					</p>
				</Link>

				<button type='button' onClick={() => setDarkTheme(!darkTheme)} className="text-4xl dark:text-gray-900 rounded-full px-2 py-1 hover:shadow-lg">
					{darkTheme ? <FaSun className='text-yellow-400' /> : <FaMoon className='text-blue-500' /> }
				</button>
			</div>

			<Search />
			
		</div>
	)
}