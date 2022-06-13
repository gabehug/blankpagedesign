import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/types/utils";


const Background = styled.div`
    width: 75vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoContainer = styled.div`
    width: 100%;
    height: 4em;

`;

const BackButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: green;
    font-size: 2em;
`;


export function BackToTop(props) {
    const [backToTopButton, setBackToTopButton] = useState(false);

    const toggleVisibility = () => {
            if(window.pageXOffset > 200) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
    };

    const scrollLeft = () => {
        window.scrollTo({
            left: 0,
            behavior: "smooth",
        })
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    },[]);

    return (
        <Background>
            <LogoContainer>
                <BackButton onClick={scrollLeft}>~</BackButton>
            </LogoContainer> 
        </Background>
    );
}