import React, { useState } from "react";

const Categories = ({ handleCategoryClick }) => {
	const [categories, setCategories] = useState([
		"business",
		"entertainment",
		"general",
		"health",
		"science",
		"sports",
		"technology",
	]);

	return (
		<>
			<div className='d-flex flex-row justify-content-center '>
				{categories.map((category) => {
					return (
						<div key={category} className='mx-1'>
							<button
								className='btn btn-dark rounded-pill'
								onClick={handleCategoryClick}
							>
								{category}
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Categories;
