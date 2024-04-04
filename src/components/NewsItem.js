import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={imageUrl} className="card-img-top" alt="..." />
          
          <div className="card-body" style={{backgroundColor:"grey"}}> 
          
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm ">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
