
import React from 'react';

export const Footer = () => {

	return(
		<div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-300">
			<ul className='flex flex-wrap justify-around justify-between'>
				<i className='not-italic cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400'>Privacy</i>
				<i className='not-italic cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400'>Legal</i>
				<i className='not-italic cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400'>Advertise</i>
				<i className='not-italic cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400'>About Us</i>
				<i className='not-italic cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400'>Help</i>
				<i>© 2022 Astronaut, Inc.</i>
			</ul>
		</div>

	)
}

// useEffect(() => {
	// 	console.log("PRUEBA");
	// 	axios.get('https://api.duckduckgo.com/?q=elon+musk&format=json')
	// 	.then(function (response) 
	// 	{
	// 		console.log(response.json());
	// 	})

	// }, []);

	// let ddg = new ddg('my-app-name'); 

	// ddg.instantAnswer('superman', {skip_disambig: '0'}, function(err, response) {
	// console.log(response);
	// });

	// useEffect(() => {
	// 	console.log("PRUEBA");
	// 	axios.get('https://app.scrapingbee.com/api/v1/store/google', 
	// 	{
	// 		params: {
	// 			'api_key': '52BBF6U2F0NXIP55DW5OWW8S5J6ZSE0LEBQ8BG1Q0WK690PCKRBB375OWTJ9A0NAYWV0063MD57T1SFZ',
	// 			'search': 'elon musk',
	// 		}
	// 	}).then(function (response) {
	// 		setResultado(response.data.organic_results[0]);
	// 		console.log(response.data.organic_results[0]);
	// 	})

	// }, []); 


