import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav
			className='navbar navbar-expand-lg bg-body-tertiary bg-dark'
			data-bs-theme='dark'
		>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					NewsFreak
				</a>
				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link
								className='nav-link active'
								aria-current='page'
								to={"/"}
							>
								Top Headlines
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link active'
								aria-current='page'
								to={"/sources"}
							>
								Sources
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
