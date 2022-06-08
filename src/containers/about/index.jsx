import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import webBackground from "../../assets/webBackground.mp4";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import headshot3 from "../../assets/headshot3.jpg";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import scrollIndi from "../../assets/scrollIndi.png";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;

  video {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const MenuContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0em 2em;
  
`;

const LogoContainer = styled.div`
  width: auto;
  height: auto;
  margin-top: 2em;

  image {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: row;
  margin: 2em;
  align-items: start;
  justify-content: start;

`;

const ImageContainer = styled.div`
  width: 16em;
  height: 16em;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

`;

const InformationContainer = styled.div`
  width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 2em 1em;
    
  h1 {
    line-height: 0em;
    margin: 2em 0em 0em 0em;
  }

  h2 {
    margin: 1em 0em 0em 0em;
    text-decoration: underline;
  }

  p {
    margin: 0;
  }

  ul {
    margin: 0em 0em 0em 2em;
    padding: 0em;
  }
`;

const ScrollContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: end;
  

  img {
    width: 3em;
    height: 100%;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function About(props) {
  return (
    <PageContainer> 
      <Background>
        <MenuContainer>
            <LogoContainer>
              <Logo/>
            </LogoContainer>
            <Menu />
          </MenuContainer>
        <video autoPlay muted loop id="backgroundVideo">
          <source src= {webBackground} type="video/mp4"/>
        </video>
        <ContentContainer>
          <InformationContainer>
            <ImageContainer>
              <img src={headshot3} alt="headshot"></img>
            </ImageContainer>
            <h1>Gabriel Hug</h1>
            <h3>Photographer and Web Designer</h3>
            <h2>Education</h2>
            <p>Loyola University of Chicago _ 2018-2022</p>
            <p>Roseville Area Highschool _ 2014-2018</p>
            <h2>Technical Skills</h2>
            <p>Web Development _ JavaScript, HTML, CSS, Responsive Web Design, and React</p>
            <p>Adobe _ Photoshop, Illustrator, XD, Bridge, Lightroom, After Effects, Indesign</p>
            <p>Methodologies _ Agile Development and Scrum</p>
            <h2>Project Experience</h2>
            <p>Emperor Card Game _ Java implementation of the card game Emperor </p>
            <p>Lead Designer</p>
            <ul>
              <li><h3>Researched design elements, implemented design aspects in Unity, and created custom card backs and logo.</h3></li>
              <li><h3>Technologies Used: Unity, Java, C#, SQLite, and Adobe Illustrator.</h3></li>
            </ul>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </InformationContainer>
          <Marginer direction="horizontal" margin={50}/>
          <InformationContainer>
            <h2>Professional Experience</h2>
            <p>Vice President of Marketing and Operations at Chainlinks _ 2018-2022</p>
            <h3>Working for an entirely student-run organization allows for many leadership roles. I have managed all marketing and operations for the bike shop over the past four years. During this time, I redesign the Chainlinks website, created a new rental system, and created a new intake system for customer bikes. I am also a trained bike mechanic who fixes customer’s bikes promptly and rents out bikes from the rental fleet maintained at the shop.</h3>
            <Marginer direction="vertical" margin={20}/>
            <p>ITRS Classroom Assistant at Loyola University Chicago _ Jan. 2021–Jan. 2022 </p>
            <h3>Provided general tech support for the classrooms and learning spaces on Loyola’s Lakefront and Water Tower campuses. Responsibilities included regular checks of equipment, troubleshooting equipment issues, and providing general technical support to staff and students. Strong team communication and working as part of a team were required to provide fast and efficient support across campus.</h3>
            <Marginer direction="vertical" margin={20}/>
            <p>Loyola University of Chicago Orientation Leader _ Summer 2019</p>
            <h3>Leading the first-year student orientations for Loyola University of Chicago. Tasks included leading student groups, interacting with parents and guests, and performing administrative tasks. Working as a team was crucial to providing a positive first experience for students and their guests.</h3>
          
            <h2>Volunteer Experience</h2>
            <p>Minnesota Boychoir Volunteer _ 2014-2021</p>
            <p>Church of Corpus Christi Retreat Leader and Educator _ 2012-2018</p>
          </InformationContainer>
          <Marginer direction="horizontal" margin={50}/>
          <InformationContainer>
            <h2>Photography Experience</h2>
            <p>Milesplit Photography _ Photographer _ 2018</p>
            <h3>Official photographer for Milesplit, the premier network for track & field and cross country. I took images for the Suburban Eastern Conference track & field events and State meet for the 2018 season. This included the planning of events to photograph, time management, and sports photography experience with different lighting environments.</h3>
            <Marginer direction="vertical" margin={20}/>
            <p>Photographer for GradImages and MarathonFoto _ 2018-2019</p>
            <h3>Assistant photographer during the graduation season taking images with controlled lighting of recent graduates. Official photographer for the Chicago Marathon taking images at the finish line for runners. Working with the other photographers and following directions from team leaders.</h3>
          </InformationContainer>
          <Marginer direction="horizontal" margin={100}/>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Background>
    </PageContainer>
  )
}