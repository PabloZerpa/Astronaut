
import React from 'react';

export const Footer = () => {
	return(
		<div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-300">
			<ul className='flex flex-wrap justify-around justify-between'>
				<i className='not-italic cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400'>Privacy</i>|
				<i className='not-italic cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400'>Legal</i>|
				<i className='not-italic cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400'>Advertise</i>|
				<i className='not-italic cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400'>About Us</i>|
				<i className='not-italic cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400'>Help</i>|
				<i>© 2022 Astronaut, Inc.</i>
			</ul>
		</div>

	)
}


