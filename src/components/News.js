import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "../components/Spinner";
import { PropTypes } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  //   capitalizeFLetter=(string)=> {

  //     return (string[0].toUpperCase() +
  //         string.slice(1));
  // }
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];
  constructor(props) {
    super(props);
    console.log("Hi i am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsNigger - ${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }`;
  }
  //this is needed to fetch the data from News API and parse it into JSON and all of it is done asynchronously and it dynamically initiates the state variables of this news component. this runs after the rendering of the react class based components
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b06eee684ad74640a69188f4f5450fc9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  //This takes care of the same process componentDidMount() function does but AFTERR the initiation, i.e., moving next or prev
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    
    this.props.setProgress(40);
    let parsedData = await data.json();
    
    this.props.setProgress(60);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    
    this.props.setProgress(100);
  }

  //In React class components, it's a common practice to define methods without const or let before them, simply for brevity and consistency.

  handleNextClick = async () => {
    this.state.page = this.state.page + 1;
    this.updateNews();
  };
  handlePrevClick = async () => {
    this.state.page = this.state.page - 1;
    this.updateNews();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), //adds the new articles
      totalResults: parsedData.totalResults,
      // loading: false,
    });
  };
  render() {
    return (
      <>
        <h1
          className="container my-3"
          id="top"
          style={{
            fontFamily: "Bebas Neue",
            fontWeight: "400",
            fontStyle: "normal",
            color: "red",
            textAlign: "center",
            fontSize: "58px",
          }}
        >
          News Nigger - Top{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          headlines
        </h1>
        {/* {this.state.loading && <Spinner />} */}

        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                const title = element.title
                  ? element.title
                  : "Title removed due to content restrictions.";
                const description = element.description
                  ? element.description
                  : "Description for this item has been removed due to content restrictions.";
                const imageUrl = element.urlToImage
                  ? element.urlToImage
                  : "https://images.indianexpress.com/2024/02/garlic-news-1600.jpg";
                const newsUrl = element.url ? element.url : "";
                return (
                  <div
                    className="col-md-4"
                    key={`${newsUrl}-${element.publishedAt}`}
                  >
                    <NewsItem
                      title={title}
                      description={description}
                      imageUrl={imageUrl}
                      newsUrl={newsUrl}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <button
            className="btn btn-dark"
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
            
          >
            <a href="#navtop" style={{textDecoration:"none", color:"white"}}>Move to Top</a>
          </button>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
