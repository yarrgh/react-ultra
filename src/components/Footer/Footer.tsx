import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapper,
  WebsiteRights,
} from './Footer.elements';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Destinations</FooterLink>
            <FooterLink to="/">Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/">Submit Video</FooterLink>
            <FooterLink to="/">Ambassadors</FooterLink>
            <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo to="/">
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA &copy; 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapper>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
