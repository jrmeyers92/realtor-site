import React, { useState } from "react";
import Search from "./search/Search";

function App() {
	const [searchCity, setSearchCity] = useState("");

	const onSubmit = (term) => {
		setSearchCity(term);
		alert(searchCity);
	};

	return (
		<div className='App'>
			<Search onSubmit={onSubmit} />
		</div>
	);
}

export default App;
