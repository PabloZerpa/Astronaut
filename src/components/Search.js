
import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext } from './context/ResultContextProvider';
import { FaRegTimesCircle } from "react-icons/fa";

export const Search = () => {
	const [text,setText] = useState('');
	const {setSearchTerm} = useResultContext();
	const [debounceValue] = useDebounce(text,300);

	useEffect(() =>{
		if(debounceValue) setSearchTerm(debounceValue);
	}, [debounceValue]);

	return(
		<div className="relative">
			<input
				value={text}
				type="text"
				className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded shadow-sm outline-none px-3 py-5 text-black hover:shadow-lg"
				placeholder="Search"
				onChange={(e) => setText(e.target.value)}
			/>
			{text && (
				<button type="button" className="absolute top-0.5 right-4 text-2xl text-gray-500" onClick={() => setText('')}>
					<FaRegTimesCircle className='mt-2'/>
				</button>
			)}
		</div>
	)
}

