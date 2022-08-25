
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Rutas = () => {
	return(
		<div className="p-4">
			<Routes>

				<Route exact path="/" element={<Results />} />
				<Route exact path="/images" element={<Results />} />
				<Route exact path="/news" element={<Results />} />
				<Route exact path="/videos" element={<Results />} />

			</Routes>
		</div>

	)
}


// import React from 'react';
// import {Routes, Route, Navigate } from 'react-router-dom';

// import { Results } from './Results';

// export const Rutas = () => {
// 	return(
// 		// <div className="p-4">
// 		// 	<Routes>
// 		// 		<Route exact path="/">
// 		// 			<Navigate  to="/search" />
// 		// 		</Route>
// 		// 		<Route exact path={['/search','/images','/news','/videos']}>
// 		// 			<Results />
// 		// 		</Route>
// 		// 	</Routes>
// 		// </div>
// 		<div className="p-4">
// 			Rutas
// 		</div>
// 	)
// }


