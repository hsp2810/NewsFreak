import React from "react";
import ImageNotFound from "../assets/images/no_news_found.jpg";

const NewsItem = ({ title, description, urlToImage, url }) => {
	return (
		<>
			<div
				className='card'
				style={{ width: "18rem", margin: "0.5rem 0rem", maxHeight: "" }}
			>
				<img
					src={urlToImage ? urlToImage : ImageNotFound}
					className='card-img-top'
					alt='...'
				/>
				<div className='card-body'>
					<h5 className='card-title'>
						{title ? title : "No title found for this News"}
					</h5>
					<p className='card-text'>
						{description
							? description
							: "No description found for this News"}
					</p>
					<a href={url} target='_blank' className='btn btn-primary'>
						Read More
					</a>
				</div>
			</div>
		</>
	);
};

export default NewsItem;
