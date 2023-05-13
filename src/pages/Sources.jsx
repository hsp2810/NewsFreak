import React, { useState } from "react";
import News from "../components/News";

const Sources = () => {
	const [sourceInput, setSourceInput] = useState("");
	const [sources, setSources] = useState([
		"wsj.com",
		"bbc.co.uk",
		"techcrunch.com",
		"engadget.com",
	]);
	const [newsBySources, setNewsBySources] = useState([]);
	const [filteredSources, setFilteredSources] = useState([]);

	const handleLoadSources = (text) => {
		const filtered = sources.filter((source) => {
			return source.toLowerCase().includes(text.toLowerCase());
		});

		const element = document.getElementById("dropdown");

		if (text.length === 0) {
			element.style.display = "none";
		} else {
			element.style.display = "block";
			setFilteredSources(filtered);
		}
	};

	const handleButtonClick = (e) => {
		setSourceInput(e.target.firstChild.data);
		const element = document.getElementById("dropdown");
		element.style.display = "none";
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (sourceInput === "") {
			alert("Please enter a source name to fetch its news");
		} else {
			const url = `https://newsapi.org/v2/everything?domains=${sourceInput},thenextweb.com&apiKey=7ae99f6c3951421e982d3d66de158316`;
			const response = await fetch(url);
			const { articles } = await response.json();
			setNewsBySources(articles);
		}
	};

	return (
		<div style={{ width: "100%", margin: "auto" }}>
			<div className='heading p-3'>
				<h2 className='text-center'>
					Search news based uploaded by specific sources
				</h2>

				<div
					className='dropdown-menu'
					style={{ display: "block", border: "none" }}
				>
					<form className='d-flex' role='search'>
						<input
							className='form-control me-2 rounded-pill p-3'
							type='search'
							placeholder='Search sources Eg. wsj.com'
							aria-label='Search'
							value={sourceInput}
							onChange={(e) => {
								setSourceInput(e.target.value);
								handleLoadSources(e.target.value);
							}}
						/>
						<button
							className='btn btn-outline-success rounded-pill p-3'
							type='submit'
							onClick={handleSubmit}
						>
							Search
						</button>
					</form>
					<div
						className='dropdown-divider'
						style={{ display: "none" }}
					></div>
					<div id='dropdown' style={{ display: "none" }}>
						{filteredSources.length !== 0
							? filteredSources.map((source) => {
									return (
										<button
											key={source}
											className='dropdown-item'
											onClick={handleButtonClick}
										>
											{source}
										</button>
									);
							  })
							: ""}
					</div>
				</div>
			</div>
			<div className='news mt-5 p-3'>
				<News news={newsBySources} filteredNews={[]} />
			</div>
		</div>
	);
};

export default Sources;
