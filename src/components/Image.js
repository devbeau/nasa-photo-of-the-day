import React from 'react';

export default function Image (props) {  
let {copyright, url, date} = props.image;
    return (
        <div className="image-container">
            <div className="image-div">
                <img src ={url} alt ='' className="article-image"></img>
            </div>
            <div className="copyright-info">
                <div className="copyright-name">{copyright}</div>
                <div className="copyright-date">{date}</div>
            </div>
        </div>
    )
}