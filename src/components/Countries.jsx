import React, { useState } from "react";

const Countries = ({ handleCountryClick }) => {
	const [countries, setCountries] = useState([
		"ae",
		"ar",
		"at",
		"au",
		"be",
		"bg",
		"br",
		"ca",
		"ch",
		"cn",
		"co",
		"cu",
		"cz",
		"de",
		"eg",
		"fr",
		"gb",
		"gr",
		"hk",
		"hu",
		"id",
		"ie",
		"il",
		"in",
		"it",
		"jp",
		"kr",
		"lt",
		"lv",
		"ma",
		"mx",
		"my",
		"ng",
		"nl",
		"no",
		"nz",
		"ph",
		"pl",
		"pt",
		"ro",
		"rs",
		"ru",
		"sa",
		"se",
		"sg",
		"si",
		"sk",
		"th",
		"tr",
		"tw",
		"ua",
		"us",
		"ve",
		"za",
	]);
	return (
		<>
			<div className='dropdown'>
				<button
					className='btn btn-secondary dropdown-toggle'
					type='button'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					Dropdown button
				</button>
				<ul className='dropdown-menu'>
					{countries.map((country) => {
						return (
							<li key={country}>
								<button
									className='btn btn-primary'
									onClick={handleCountryClick}
								>
									{country}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Countries;
