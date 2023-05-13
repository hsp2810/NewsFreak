import React, { useEffect, useState } from "react";
import News from "../components/News";
import NewsNavbar from "../components/NewsNavbar";

const Home = () => {
	const [category, setCategory] = useState("general");
	const [country, setCountry] = useState("in");
	const [filteredNews, setFilteredNews] = useState([]);
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetchNews();
	}, [category, country]);

	const fetchNews = async () => {
		console.log("Fetching the news in useEffect");
		const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7ae99f6c3951421e982d3d66de158316`;
		const response = await fetch(url);
		const { articles } = await response.json();
		setNews(articles);
	};

	const handleCategoryClick = (e) => {
		console.log("Changing the category: ", e.target.firstChild.data);
		setCategory(e.target.firstChild.data);
	};

	const handleCountryClick = (e) => {
		setCountry(e.target.firstChild.data);
	};

	const handleSearch = (text) => {
		const filteredNews = news.filter((newsItem) => {
			return newsItem.title.toLowerCase().includes(text.toLowerCase());
		});
		setFilteredNews(filteredNews);
	};

	return (
		<div className='p-2'>
			<div className='heading my-3'>
				<h2 className='text-center'>Top Headlines</h2>
			</div>
			<NewsNavbar
				handleCategoryClick={handleCategoryClick}
				handleCountryClick={handleCountryClick}
				handleSearch={handleSearch}
			/>
			<News news={news} filteredNews={filteredNews} />
		</div>
	);
};

export default Home;
