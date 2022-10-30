import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  const captializeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=14a61fb5091e45f4a30dd4d71fac66e4&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true); // jab jab yeh url hit krega aur data aayega loading chlegi
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    props.setProgress(70);
    // console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false); // jese he data aa jayega loading ko false kr denge
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${captializeFirstLetter(
      props.category
    )} - NewsPanda`;
    updateNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=14a61fb5091e45f4a30dd4d71fac66e4&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    setTimeout(() => {
      setArticles(articles.concat(parseData.articles));
      setTotalResults(parseData.totalResults);
    }, 1500);
  };

  return (
    <>
      <h1 className="text-center" style={{marginTop:"90px"}}>
        NewsPanda - Top {captializeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />} {/* Jab loading chlegi toh spinner dikhega */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title === null ? "" : element.title} // agr element.title null hai toh empty show krwa do else element.title show krwa do
                    description={
                      element.description === null ? "" : element.description
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
