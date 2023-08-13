
import React from 'react';
import {Link} from 'react-router-dom';
import { Search } from './Search';
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5"
import { Links } from './Links';

export const Navbar = ({darkTheme, setDarkTheme}) => {
	return(
		<div className="flex flex-col justify-center items-center">
			<div className="flex justify-between items-center w-full px-8 mt-4">
				<Link to='/'>
					<p className="flex text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-yellow-400 dark:text-gray-900"> 
						<IoRocketSharp className='mt-1 mr-2'/> Astronaut
					</p>
				</Link>

				<button type='button' onClick={() => setDarkTheme(!darkTheme)} className="text-4xl dark:text-gray-900 rounded-full px-2 py-1 hover:shadow-lg">
					{darkTheme ? <BsSunFill className='text-yellow-400' /> : <BsFillMoonStarsFill className='text-blue-500' /> }
				</button>
			</div>

			<div className='flex flex-col items-center mb-8 mt-8 md:mt-0 ' >
				<Search />
				<Links />
			</div>
			
		</div>
	)
}