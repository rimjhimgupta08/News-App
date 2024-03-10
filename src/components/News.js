import React, { Component } from 'react'
import NewItem from './NewItem';
import PropTypes from 'prop-types'



export class News extends Component {
  static defaultProps = {
    country : "in",
    category : "general",
  }
  static propTypes = {
    country :PropTypes.string,
    category : PropTypes.string,
  }
  articles = [
    {
      "source":
      {
        "id": "australian-financial-review",
        "name": "Australian Financial Review"
      },
      "author": "Aaron Weinman",
      "title": "Macquarie, Julius Baer struggle over $US455m venture investment in India’s Byju’s",
      "description": "Macquarie launched an investment effort named after Indian cricketer Virat Kohli into Byju Raveendran’s online education tech company.",
      "url": "http://www.afr.com/companies/financial-services/swiss-bank-accuses-macquarie-of-distorting-valuations-for-higher-fees-20240229-p5f8u9",
      "urlToImage": "https://static.ffx.io/images/$zoom_0.2648%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_96/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/a3886ffa49d7ca1aa4579e3254dc597c148a854c",
      "publishedAt": "2024-03-03T00:02:19Z",
      "content": "Concerned about negative headlines and the decision of other major Byjus backers to slash their valuation of the company, Julius Baer bankers asked Macquarie why it had not yet lowered its estimates … [+3791 chars]"
    },
    {
      "source":
        { "id": "espn-cric-info", "name": "ESPN Cric Info" }, "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg", "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source":
      {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg", "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  // Constructor is here...
  constructor() {
    super();
    console.log("helo constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page : 1

    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2207890cf3446d38901784274f39391&page=1&pageSize=5`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults })


  }

   haddleNextClick =  async()=>{
    console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/5)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2207890cf3446d38901784274f39391&page=${this.state.page + 1}&pageSize=5`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // this.setState({articles : parsedData.articles})

    this.setState({
      page : this.state.page + 1,
      articles : parsedData.articles


    })
  }
  }
   haddlePreClick = async()=>{
    console.log("Pre");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2207890cf3446d38901784274f39391&page=${this.state.page - 1}&pageSize=5`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // this.setState({articles : parsedData.articles})

    this.setState({
      page : this.state.page - 1,
      articles : parsedData.articles


    })
  }
  render() {
    return (
      <div className='container my-3'>
      
        <h2 className='text-center'>News Headlines</h2>
        <div className="row">
        {this.state.articles.map((elements)=>{
          return <div className="col-md-4 col-sm-6" key={elements.url} >
            <NewItem  title={elements.title? elements.title : ""} description={elements.description} imageUrl={elements.urlToImage?elements.urlToImage:""} newsURL={elements.url}/>
            </div>

        })}
          



        </div>
        <div className="container d-flex justify-content-between">
        <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.haddlePreClick}>&larr; Prev</button>
        <button  disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/5)} type="button" className="btn btn-dark" onClick={this.haddleNextClick}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;
