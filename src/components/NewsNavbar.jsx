import React, { useState } from "react";
import Categories from "./Categories";

const NewsNavbar = ({
	handleSearch,
	handleCategoryClick,
	handleCountryClick,
}) => {
	const [searchText, setSearchText] = useState("");
	return (
		<nav
			className='navbar navbar-expand-lg bg-body-tertiary d-flex align-items-center justify-content-rounded-pill'
			style={{ backgroundColor: "none !important" }}
		>
			<div className='container-fluid'>
				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page'>
								<Categories
									handleCategoryClick={handleCategoryClick}
								/>
							</a>
						</li>
					</ul>
					<form className='d-flex' role='search'>
						<input
							className='form-control me-2 rounded-pill'
							type='search'
							placeholder='Search news based on title'
							aria-label='Search'
							value={searchText}
							onChange={(e) => {
								setSearchText(e.target.value);
								handleSearch(e.target.value);
							}}
						/>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default NewsNavbar;
