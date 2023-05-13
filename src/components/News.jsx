import React from "react";
import NewsItem from "./NewsItem";

const News = ({ news, filteredNews }) => {
	return (
		<>
			<div className='container mt-3'>
				<div className='row'>
					{filteredNews.length === 0
						? news.map((newsEach, index) => {
								return (
									<div key={index} className='col-md-3'>
										<NewsItem
											title={newsEach.title}
											description={newsEach.description}
											url={newsEach.url}
											urlToImage={newsEach.urlToImage}
										/>
									</div>
								);
						  })
						: filteredNews.map((newsEach, index) => {
								return (
									<div key={index} className='col-md-3'>
										<NewsItem
											title={newsEach.title}
											description={newsEach.description}
											url={newsEach.url}
											urlToImage={newsEach.urlToImage}
										/>
									</div>
								);
						  })}
				</div>
			</div>
		</>
	);
};

export default News;
