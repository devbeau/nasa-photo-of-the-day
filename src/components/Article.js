import React from 'react';
import Content from './Content';
import styled from 'styled-components';
import './Article.css';

let StyledArticle = styled.div`

    background: ${props => props.theme.colors.secondaryLight};
    font-family: ${props => props.theme.fonts.headlineFont};
    flex-grow: 1;
    display: flex;
    .content-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        
    }
    .header-div{
        display: flex;
        flex-wrap: wrap;
        
    }
    .content-header{
        font-size: 1.8rem;
        flex-grow: 3;
        margin: ${props=>props.theme.margin.large};
        padding: ${props=>props.theme.padding.medium};
    }
    .content-image-container{
        display: block;
        width: 100%;
        box-shadow: ${props=>props.theme.shadow.box};
        padding: ${props=>props.theme.padding.small};
    }
    
    .image-container{
        float: right;
        width: 40%;
        margin: 3.2rem 1rem 1rem 1rem;
        box-shadow: ${props=>props.theme.shadow.box};
        padding: ${props=>props.theme.padding.small};
        border-radius: 5px;
    }
    .article-image{
        width: 100%;
    }
    .copyright-info{
        display: flex;
        justify-content: flex-end;
    }
    .copyright-name{
        margin-right: ${props => props.theme.margin.small};
    }
    .firstParagraph{
        text-align: justify;
        text-justify: newspaper;
        font-size: 1.5rem;
        font-weight: 300;
        text-indent: 5rem;
        clear: left;
        width: 95%;
        margin-left: ${props => props.theme.margin.medium};
        margin-right: ${props => props.theme.margin.medium};
        margin-bottom: ${props => props.theme.margin.medium};
        /* flex: 1 0.5; */
    }
    .firstLetter{
        font-size: 2.8rem;
    }
    .section-header{
        align-self:flex-start;
        flex-grow: 1;
        font-size:1.4rem;
        font-family: ${props=>props.theme.fonts.sansFont};
        background: ${props=>props.theme.colors.primaryColor};
        color:${props=>props.theme.colors.secondaryLight};
        padding: ${props=>props.theme.padding.medium};
        border-radius: 25px;
        box-shadow: -1px -1px 2px 1px rgba(27,27,27,0.31),1px 1px 4px 2px rgba(131,131,131,0.31);
        margin: ${props=>props.theme.margin.large};
    }
`


export default function Article (props) {
let article = props.article;

console.log("article props in Article:", article );

let image = {copyright: article.copyright, url: article.url,date: article.date}
let content = {explanation: article.explanation, title: article.title};
console.log("article reassigned to have props for article:", content);
console.log("Image props deconstructed from Article props",image);

    return (
        <StyledArticle className="article-container">
            <Content content={content} image={image}/>
        </StyledArticle>
    )
}