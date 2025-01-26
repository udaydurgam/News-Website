import { useEffect, useState } from "react";
import Card from "./Card";

// Define types for each item in the data array
interface NewsItem {
  urlToImage: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
}

const NewsApp = () => {
  const [newsData, setNewsData] = useState<NewsItem[] | null>(null);
  const [search, setSearch] = useState("Trending");

  // Handle category button click
  const handleCategoryClick = (category: string) => {
    setSearch(category);
  };

  // Handle input change for search bar
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <h1>InformoHub</h1>
        </div>
        <ul>
          <li>
            <a onClick={() => handleCategoryClick("ESports")}>ESports</a>
          </li>
          <li>
            <a onClick={() => handleCategoryClick("Comedy")}>Comedy</a>
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
        <p className="head">Stay Updated with InformoHub</p>
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
        <Card data={newsData || []} />
      </div>

      <footer>
        <div className="creatorInfo">
          <p>InformoHub created by: Uday Durgam</p>
          <p>Contact: udaydurgam26@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default NewsApp;
