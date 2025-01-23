import React, { useEffect, useState } from "react";
import Card from "./Card";

const NewsApp = () => {
  const [newsData, setNewsData] = useState(null);
  const [search, setSearch] = useState("India");

  // Handle category button click
  const handleCategoryClick = (category) => {
    setSearch(category);
  };

  // Handle input change for search bar
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getData();
  }, [search]); // Re-run when search changes

  const API_KEY = "7de87392b46845a29c2455e09ccf406c";

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <li>
            <a href="#">All News</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
        </ul>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">Stay Updated with Trendy News</p>
      </div>
      <div className="categoryBtn">
        <button onClick={() => handleCategoryClick("sports")}>Sports</button>
        <button onClick={() => handleCategoryClick("politics")}>
          Politics
        </button>
        <button onClick={() => handleCategoryClick("entertainment")}>
          Entertainment
        </button>
        <button onClick={() => handleCategoryClick("money")}>Money</button>
        <button onClick={() => handleCategoryClick("national")}>
          National
        </button>
      </div>

      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
};

export default NewsApp;
