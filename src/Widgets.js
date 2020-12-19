import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) =>
    (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )


    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("What's on your holiday reading list?", "Top news - 1353 readers")}
            {newsArticle("The smarter you are, the harder this is", "Top news - 853 readers")}
            {newsArticle("Parts of NSW to enter lockdown", "Top news - 452 readers")}
            {newsArticle("Co-working spaces try to bounce back", "Top news - 1202 readers")}
            {newsArticle("The Six Morning Habits of High Performers", "Top news - 7542 readers")}
            {newsArticle("Developing Your Emotional Intelligence", "Top news - 608 readers")}

        </div>
    )
}

export default Widgets
