import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl === null
                ? "https://images.thequint.com/thequint%2F2022-07%2F91fabb23-2334-4144-8608-51bc1f13590c%2FScreenshot_2022_02_16_at_16_02_34.png?w=1200&auto=format%2Ccompress&ogImage=true"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="badge bg-danger">{source}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author === null ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
