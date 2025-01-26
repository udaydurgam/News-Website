import React from "react";
import "./Card.css"; // Import the CSS file
import { CardProps } from "../App";

// Define types for each item in the data array
export interface NewsItem {
  urlToImage: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
}

const Card: React.FC<CardProps> = ({ data }) => {
  // Helper function to truncate long text
  const truncateText = (text: string | null, maxLength: number): string =>
    text && text.length > maxLength
      ? text.slice(0, maxLength) + "..."
      : text || "";

  if (!data || data.length === 0) {
    return (
      <div className="no-news">
        <p>No news articles found. Try a different search!</p>
      </div>
    );
  }

  return (
    <div className="card-container">
      {data.map((curItem, index) => (
        <article className="card" key={index}>
          <img
            src={
              curItem.urlToImage ||
              "https://via.placeholder.com/300?text=No+Image"
            }
            alt={curItem.title ? `Image for: ${curItem.title}` : "News Image"}
            loading="lazy"
          />
          <div className="card-content">
            <h2>
              {curItem.url ? (
                <a href={curItem.url} target="_blank" rel="noopener noreferrer">
                  {curItem.title || "Title not available for this article"}
                </a>
              ) : (
                <span>
                  {curItem.title || "Title not available for this article"}
                </span>
              )}
            </h2>
            <p>{truncateText(curItem.description, 100)}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Card;
