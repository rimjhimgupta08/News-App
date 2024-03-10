import React, { Component } from 'react'
import './news.css';



export class NewItem extends Component {
      
      render() {
            let {title, description, imageUrl, newsURL} = this.props;
            return (
                  <div className='my-3'>
                        <div className="card">
                              <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/parrot-fever-outbreak-in-europe-060824130-16x9_0.jpg?VersionId=O7GInN4lrcYP1ba9zdxesz6Ay2HPe_pr":imageUrl} className="card-img-top" alt="..." />
                              <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <a href={newsURL}  target="_blank" rel="noreferrer" className="btn btn-dark btn-sm " >Read More</a>
                              </div>
                        </div>
                        {/* <div className="card">
                              <img src={imageUrl} className="card-img-top" alt="..." />
                              <div className="card-body">
                              <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <a href="/" className="btn btn-primary btn-sm ">Read More</a>
                              </div>
                        </div>
                        <div className="card">
                              <img src={imageUrl} className="card-img-top" alt="..." />
                              <div className="card-body">
                              <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <a href="/" className="btn btn-primary btn-sm ">Read More</a>
                              </div>
                        </div> */}
                        {/* <div className="card">
                              <img src={imageUrl} className="card-img-top" alt="..." />
                              <div className="card-body">
                              <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <a href="/" className="btn btn-primary btn-sm ">Read More</a>
                              </div>
                        </div> */}
                  </div>
            )
      }
}

export default NewItem;
