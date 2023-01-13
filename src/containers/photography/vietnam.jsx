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

class Vietnam extends Component {
  constructor(props) {
    super(props);
      this.state = {
        gallery: []
      }
  }
  //https://res.cloudinary.com/blankpagedesign/image/upload/v1673021931/bpd/vietnam/Shutter_hugEdits-9690_b07lsv.jpg
  componentDidMount(){
    axios.get('https://res.cloudinary.com/blankpagedesign/image/list/vietnam.json')
    .then(res => {
      console.log(res.data.resources);
      this.setState({gallery: res.data.resources});
    });
  }

  render() {
    return (
      <PageContainer>
        <Background>
          <DropdownMenu/>
            <ContentContainer>
              <InformationContainer>
                <h1>Vietnam</h1>
                <p>The following is a selection of images from my time traveling in Vietnam and South East Asia. The kindest, most welcoming culture and people. I hope to be back soon! </p>
                <h4>Canon 7D mkii</h4>
              </InformationContainer>
                <CloudinaryContext cloudName="blankpagedesign">
                  {
                    this.state.gallery.map(data => {
                      return (
                        <ResponsiveGrid key={data.public_id}>
                          <ImageGrid>
                            <a target="_blank" href={`http://res.cloudinary.com/blankpagedesign/image/upload/${data.public_id}.jpg`}>
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
export default Vietnam;