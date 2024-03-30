import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from '../components/Spinner';

export class News extends Component {
    articles= [];
    constructor(){
        super();
        console.log("Hi i am a constructor from news component");
        this.state={
        articles : this.articles,
        loading:false,
        page:1
    }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b06eee684ad74640a69188f4f5450fc9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults,
            loading:false})



    }
    //In React class components, it's a common practice to define methods without const or let before them, simply for brevity and consistency. 

    handleNextClick = async () =>{
        const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
        console.log("Next");
        this.state.page = this.state.page+1;
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b06eee684ad74640a69188f4f5450fc9&page=${this.state.page}&pageSize=${ this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        // this.setState({loading:false});
        this.setState({articles:parsedData.articles, loading:false});
        

    }
    handlePrevClick = async() =>{
        
        console.log("Prev");
        this.state.page=this.state.page-1;
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b06eee684ad74640a69188f4f5450fc9&page=${this.state.page}&pageSize=${ this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles, loading:false})
    }

    render() {
        return (
            <div className="container">
          <div className='container my-3'>
            <h1 className='container my-3' id="top"  style={{textAlign:"center"}}>Top Headlines</h1> 
            {this.state.loading && <Spinner/>}
            
            <button type="button" className="btn btn-dark" style={{padding:"10px"}}>
                <a href='#Last' style={{textDecoration:"none", color:"white"}}>Move to Bottom</a>
            </button>
            
            <div className="row">
              {!this.state.loading && this.state.articles.map((element) => {
                const title = element.title ? element.title : "Title removed due to content restrictions.";
                const description = element.description ? element.description: "Description for this item has been removed due to content restrictions.";
                const imageUrl = element.urlToImage ? element.urlToImage : "https://images.indianexpress.com/2024/02/garlic-news-1600.jpg";
                const newsUrl = element.url ? element.url : "";
                return (
                  <div className="col-md-4" key={newsUrl}>
                    <NewsItem title={title} description={description} imageUrl={imageUrl} newsUrl={newsUrl}/>
                  </div>
                );
              })}
            </div>
              <div className="container" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
              <button type="button" className="btn btn-dark" disabled={this.state.page==1} style={{padding:"10px",width:"90px"}}onClick={this.handlePrevClick}><a href='#top' style={{textDecoration:"none",color:"white"}}>Prev &larr;</a></button>
              <button type="button" id='Last' className="btn btn-dark" style={{padding:"10px",width:"90px"}}onClick={this.handleNextClick} disabled={this.state.page+1 > Math.ceil(this.state.totalResults /  this.props.pageSize)}><a href='#top' style={{textDecoration:"none",color:"white"}}>Next &rarr;</a></button>
              </div>


          </div>
          </div>
        )
      }
    
  
}

export default News
