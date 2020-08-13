import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';


let StyledHeader = styled.header`
    background: ${props => props.theme.colors.primaryColor};
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    .header-nav{
        display: flex;
        width: 60%;
        justify-content: flex-start;
    }


    .header-text {
        font-family: ${props => props.theme.fonts.headlineFont};
        font-size: 4rem;
        letter-spacing: 0.2rem;
        text-shadow: ${props => props.theme.shadow.text};
        width: 100%;
    }
    .nav-btn {
        font-family: ${props => props.theme.fonts.sansFont};
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
        background-color: ${props => props.theme.colors.primaryLight};
        box-shadow: ${props => props.theme.shadow.box};
        padding: ${props => props.theme.padding.small};
        border-radius: 6px 6px 0 0;
        width: 100px;
        margin: 0 ${props => props.theme.margin.small};
        flex: 1 1;
    }
   
`

export default function Header (props) {  

    return (
        <StyledHeader className='header'>
            <h1 className="header-text">NASA APOD</h1>
            <Nav/>
        </StyledHeader>
    )
}