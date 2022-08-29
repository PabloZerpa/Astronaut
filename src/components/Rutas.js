
import React from 'react';
import { Routes, Route } from 'react-router-dom';

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


