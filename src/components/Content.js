import React from 'react';
import Image from './Image';
export default function Content (props) {  
let content = {...props.content};
let image = {...props.image};
console.log(JSON.stringify(content.explanation));
let strValue = JSON.stringify(content.explanation);

let firstLetter = ''
let firstParagraph = content.firstParagraph;

if (strValue !== undefined){
    firstLetter = strValue.slice(1,2);
    firstParagraph = strValue.slice(2, strValue.length - 1)
}

// let firstParagraph = strValue.slice(2,strValue.length-3);

    return (
        <div className="content-container">
            <div className="header-div">
                <h2 className="section-header">Today's Picture:</h2>
                <h3 className="content-header">{content.title}</h3>
            </div>
            <div className="content-image-container">
                <Image image={image}/>
                <p className="firstParagraph">
                    <span className="firstLetter">
                        {firstLetter}
                    </span>
                    {firstParagraph}
                </p>
            </div>
        </div>
    )
}