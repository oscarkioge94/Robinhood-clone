import React from 'react'
import LineGraph from './LineGraph'
import './NewsFeed.css'

function NewsFeed() {
    return (
        <div className="newsfeed">
        <div classsName="newsfeed__container">
            <div className="newsfeed__chartSection">
                <div className="newsfeed__portfolio">
                    <h1>$114,000</h1>
                    <p>$142,63(+0.94) Today</p>
                </div>
                <div className="newsfeed__chart">
                <LineGraph/>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default NewsFeed
