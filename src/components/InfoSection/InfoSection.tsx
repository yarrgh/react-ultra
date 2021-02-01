import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import {
  Heading,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  InfoSec,
  InfoSectionStyleProps,
  Subtitle,
  TextWrapper,
  TopLine,
} from './InfoSection.elements';

interface InfoSectionProps {
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  primary: boolean;
  img: string;
  alt: string;
}

const InfoSection: React.FC<InfoSectionStyleProps & InfoSectionProps> = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  primary,
  img,
  alt,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper imgStart={imgStart}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
