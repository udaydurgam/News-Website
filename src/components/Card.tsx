import React from "react";

const Card = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No news articles found.</p>;
  }

  return (
    <div className="cardcontainer">
      {data.map((curItem, index) => (
        <article className="card" key={index}>
          <img
            src={curItem.urlToImage || "fallback-image.jpg"}
            alt={curItem.title || "News Image"}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div className="cardContent">
            <h2>
              <a href={curItem.url} target="_blank" rel="noopener noreferrer">
                {curItem.title || "No Title Available"}
              </a>
            </h2>
            <p>{curItem.description || "No Description Available"}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Card;
