import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = (props) => {
	const [searchTerm, setSearchTerm] = useState("");
	const onFromSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(searchTerm);
	};
	return (
		<div className={styles.search}>
			<form onSubmit={onFromSubmit}>
				<input
					type='text'
					placeholder='Search a city'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}></input>
			</form>
		</div>
	);
};

export default Search;
