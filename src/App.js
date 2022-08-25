
import React, {useState} from 'react';

import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Rutas} from './components/Rutas';

const App = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	return(
		<>
		<div className={darkTheme ? 'dark' : ''}>
			<div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
				<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
				<Rutas />
				<Footer />
			</div>
		</div>
		</>
	);
}

export default App;



// import React, {useState} from 'react';

// import {Navbar} from './components/Navbar';
// import {Footer} from './components/Footer';
// import {Rutas} from './components/Rutas';

// const App = () => {
// 	const [darkTheme, setDarkTheme] = useState(false);

// 	return(
// 		// <div className={darkTheme ? 'dark' : ''}>
// 		// 	<div className="bg-gray-100">
// 		// 		<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
// 		// 		<Rutas />
// 		// 		<Footer />
// 		// 	</div>
// 		// </div>
// 		<div className={darkTheme ? 'dark' : ''}>
// 			<div className="bg-gray-100">
// 				<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
// 				<button className="bg-green-300">Prueba</button>
// 				<Rutas />
// 				<Footer />
// 			</div>
// 		</div>

// 	)
// }

// export default App;