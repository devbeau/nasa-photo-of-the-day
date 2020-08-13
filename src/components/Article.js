import React from 'react';
import Content from './Content'
import Image from './Image'
import './Article.css'

export default function Article (props) {
let article = props.article;

console.log("article props in Article:", article );

let image = {copyright: article.copyright, url: article.url,date: article.date}
let content = {explanation: article.explanation, title: article.title};
console.log("article reassigned to have props for article:", content);
console.log("Image props deconstructed from Article props",image);

    return (
        <div className="article-container">
            <Image image={image}/>
            <Content content={content}/>
        </div>
    )
}