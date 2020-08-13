import React from 'react';
import Nav from './Nav';
import styled from 'styled-components'

    
    let StyledFooter = styled.footer`
    clear: both;
    justify-self: flex-end;
    background: ${props=>props.theme.colors.secondaryDark};
    .footer-nav{
        display: flex;
        width: 60%;
        justify-content: flex-start;
        align-items: flex-start;
        height:75px;
    }
    .nav-btn {
        font-family: ${props => props.theme.fonts.sansFont};
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
        background-color: ${props => props.theme.colors.secondaryColor};
        box-shadow: ${props => props.theme.shadow.box};
        padding: ${props => props.theme.padding.small};
        border-radius: 0 0 6px 6px;
        width: 100px;
        margin: 2px ${props => props.theme.margin.small};
        flex: 1 1;
    }
    
    `

export default function Footer () {  

    return (
        <StyledFooter className='footer-container'>
            <Nav/>
        </StyledFooter>
    )
}