import React, { Component } from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import axios from "axios";
import { CloudinaryContext, Image, Placeholder} from "cloudinary-react";
import { Parallax } from "react-scroll-parallax";
import DropdownMenu from "../../components/menu/dropdownMenu";
import { Footer } from "../../components/footer";


const Background = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
`;


const ContentContainer = styled.div`
  height: 100%;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 3px solid black;
  margin-top: 3em;

  {/*Tablet*/} 
  @media screen and (min-width: ${deviceSize.tablet}px) {
    width: 85vw;
  }
`;

const InformationContainer = styled.div`
  width: 38em;
  height: auto;
  padding: 2em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 80vw;
    h1 {
      font-size: 1.5em;
    }

    p {
      font-size 1.2em;
    }

    h4 {
      font-size: 1em;
    }
  }
`;

const ResponsiveGrid = styled.div`
  width: auto;
  height: auto;
  padding: 2em;
  display: flex;
  flex-direction: column;

`;

const ImageGrid = styled.div`
  width: auto;
  max-width: 42em;
  height: auto;
  padding: 6em 0em;
  display: flex;

  a {
    display: inline-block;
    pointer-events: none;
  }

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 4em 0em;
  }
`;

const FooterContainer = styled.div`
  width: auto;
  height: 100%;
`;

class Waste extends Component {
  constructor(props) {
    super(props);
      this.state = {
        gallery: []
      }
  }

  componentDidMount() {
    axios.get('https://res.cloudinary.com/blankpagedesign/image/list/waste.json')
      .then(res => {
        console.log(res.data.resources);
        this.setState({gallery: res.data.resources});
      });
  }

  render () {
    return (
      <PageContainer>
        <Background>
          <DropdownMenu/>
            <ContentContainer>
              <InformationContainer>
                <h1>Waste</h1>
                <p>Plastics are often seen as an aesthetic problem as we see more and more single-use plastics and waste in our streets. This excess waste is just a small part of the plastics issue. Today plastics are chock-full of chemicals meant to improve people's lives and create convenience. These chemicals are often toxic and have health side effects even at extremely low concentrations. The chemicals are spread into our soil, water supply, and even the air as plastics are discarded and broken down. These images are a small reminder of how plastics and chemicals permeate our everyday lives. </p>
                <h4>Fuji x100t | Canon EOS R</h4>
              </InformationContainer>
              <CloudinaryContext cloudName="blankpagedesign">
              {
                this.state.gallery.map(data => {
                  return (
                    <ResponsiveGrid key={data.public_id}>
                      <ImageGrid>
                        <a target="_blank" href={'http://res.cloudinary.com/blankpagedesign/image/upload/${data.public_id}.jpg'} >
                          <Parallax speed={-15}>
                            <Image
                              publicID={data.public_id}
                              loading="lazy"
                              width="100%"
                              height="100%"
                            >
                              <Placeholder type="predominant"/>
                            </Image>
                          </Parallax>
                        </a>
                      </ImageGrid>
                    </ResponsiveGrid>
                  )
                })
              }
            </CloudinaryContext>
          </ContentContainer>
          <FooterContainer>
            <Footer/>
          </FooterContainer>
        </Background>
      </PageContainer>
    );
  }
}
export default Waste;