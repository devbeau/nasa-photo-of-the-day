import React from 'react';

export default function Content (props) {  
let content = {...props.content};
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
            <h2 className="content-header">{content.title}</h2>
            <p className="firstParagraph">
                <span className="firstLetter">
                    {firstLetter}
                </span>
                {firstParagraph}
            </p>
        </div>
    )
}