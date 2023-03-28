import { useContext } from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import { AppContent } from "./context/productcontext";

const About = () => {
    const myName = useContext(AppContent);
    return (
        <>
            <p>{myName.fname + " " + myName.lname}</p>
            <HeroSection data={{name : "About Store"}} />   
        </>
         
    )
}

export default About;