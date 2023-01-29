import React, { Component } from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import axios from "axios";
import { CloudinaryContext, Image, Placeholder} from "cloudinary-react";
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
  padding: 1em 0em;
  display: flex;

  a {
    display: inline-block;
    pointer-events: none;
  }
`;

const FooterContainer = styled.div`
  width: auto;
  height: 100%;
`;


class Redline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
  }

  componentDidMount() {
    axios.get('https://res.cloudinary.com/blankpagedesign/image/list/redline.json')
      .then(res => {
        console.log(res.data.resources);
        this.setState({gallery: res.data.resources});
      });
  }
  render() {
    return (
      <PageContainer>
        <Background>
          <DropdownMenu />
          <ContentContainer>
            <InformationContainer>
              <h1>Red Line</h1>
              <p>These images were taken on the CTA Redline. Starting at Howard and traveling south to 95th/Dan Ryan, this sequence captures all 33 stops of the beloved Redline. Transporting over 200,000 people every day, the redline runs 24hrs/day 365days/year, creating a truly unique way to see the city.</p>
              <h5>*this collection is NOT sponsored by the CTA</h5>
              <h4>Canon 7D mkii | 50mm</h4>
            </InformationContainer>
            <CloudinaryContext cloudName="blankpagedesign">
              {
                this.state.gallery.map(data => {
                  return (
                    <ResponsiveGrid key={data.public_id}>
                      <ImageGrid>
                        <a target="_blank" href={'http://res.cloudinary.com/blankpagedesign/image/upload/${data.public_id}.jpg'} >
                            <Image
                              publicID={data.public_id}
                              loading="lazy"
                              width="100%"
                              height="100%"
                            >
                              <Placeholder type="predominant"/>
                            </Image>
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
export default Redline;