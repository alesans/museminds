import styled from 'styled-components';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';

import { MenuAlt3 } from '@styled-icons/heroicons-outline/MenuAlt3';
import { Close } from '@styled-icons/evaicons-solid/Close';
import { DownArrowAlt } from '@styled-icons/boxicons-regular/DownArrowAlt';
import { HappyBeaming } from '@styled-icons/boxicons-solid/HappyBeaming';
import { ShapePolygon } from '@styled-icons/boxicons-regular/ShapePolygon';
import { Rocket } from '@styled-icons/boxicons-solid/Rocket';
import { CheckCircle } from '@styled-icons/boxicons-solid/CheckCircle';
import { MailSend } from '@styled-icons/boxicons-regular/MailSend';
import { PhoneCall } from '@styled-icons/boxicons-solid/PhoneCall';
import { Map } from '@styled-icons/boxicons-solid/Map';
import { ChevronRightCircle } from '@styled-icons/boxicons-solid/ChevronRightCircle';
import { ChevronLeftCircle } from '@styled-icons/boxicons-solid/ChevronLeftCircle';
import { GridSmall } from '@styled-icons/boxicons-regular/GridSmall';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt';
import { Layout } from '@styled-icons/boxicons-solid/Layout';
import { ColorSwatch } from '@styled-icons/heroicons-outline/ColorSwatch';
import { Category } from '@styled-icons/material/Category';
import { FolderVideo } from '@styled-icons/entypo/FolderVideo';
import { AudioSpectrum } from '@styled-icons/open-iconic/AudioSpectrum';
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle';
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt';
import { Pinterest } from '@styled-icons/boxicons-logos/Pinterest';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { Dribbble } from '@styled-icons/boxicons-logos/Dribbble';

import { Icon, Iconsm, Iconlight, BurgerIcon, Wrapper, H1 } from './Theme';

//🟪🟦🟩 COMPONENTS 🟩🟦🟪

//🍔🍔🍔 BURGER 🍔🍔🍔

export const BurgerBtn = styled.div`
  background: ${(props) => props.theme.color.transparent};
  cursor: ${(props) => props.theme.properties.pointer};
  position: ${(props) => props.theme.position.relative};
  z-index: ${(props) => props.theme.properties.maxIndex};
`;

export const NWrapper = styled(Wrapper)`
  @media ${(props) => props.theme.maxbp.lg} {
    background-color: ${(props) => props.theme.color.backgroundAlt};
    width: 100%;
    height: 100vh;
    position: ${(props) => props.theme.position.fixed};
    z-index: ${(props) => props.theme.properties.underIndex};
    top: ${(props) => props.theme.properties.cero};
    left: ${(props) => props.theme.properties.cero};
    transition: transform ${(props) => props.theme.transition.fast} ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  }
`;

//🔳🔳🔳 CARD 🔳🔳🔳

export const ImageCardContainer = styled.div`
  outline: ${(props) => props.theme.properties.none};
  border: ${(props) => props.theme.properties.cero};
  display: ${(props) => props.theme.flex.display};
  flex-direction: ${(props) => props.theme.flex.column};
  justify-content: ${(props) => props.theme.flex.start};
  cursor: ${(props) => props.theme.properties.pointer};
  background-position: ${(props) => props.theme.background.center};
  background-size: ${(props) => props.theme.background.cover};
  background-repeat: ${(props) => props.theme.background.noRepeat};
  background-color: ${(props) => props.theme.color.light};
  box-shadow: ${(props) => props.theme.boxShadow.card};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  transition: all ${(props) => props.theme.transition.instant};
  z-index: 1;
  position: ${(props) => props.theme.position.relative};
  width: 100%;
  height: auto;
  overflow: hidden;
  :before {
    content: '';
    position: ${(props) => props.theme.position.absolute};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.color[props.bgh] || props.theme.color.opacityPrimary};
    opacity: 0;
    transition: opacity 500ms;
  }
  :hover::before {
    opacity: 1;
  }
  :hover .image-btn {
    opacity: 1;
    color: ${(props) => props.theme.color.light};
  }
  :hover .image-card {
    transform: scale(1.06);
  }
  :hover .image-btn {
    transform: translateX(2%);
  }
  @media ${(props) => props.theme.maxbp.sm} {
    :before {
      background-color: ${(props) => props.theme.color.opacityBody};
      opacity: 1;
    }
  }
`;

export const ImageContainer = styled.div`
  outline: ${(props) => props.theme.properties.none};
  border: ${(props) => props.theme.properties.cero};
  display: ${(props) => props.theme.flex.display};
  flex-direction: ${(props) => props.theme.flex.column};
  justify-content: ${(props) => props.theme.flex.start};
  background-position: ${(props) => props.theme.background.center};
  background-size: ${(props) => props.theme.background.cover};
  background-repeat: ${(props) => props.theme.background.noRepeat};
  background-color: ${(props) => props.theme.color.light};
  box-shadow: ${(props) => props.theme.boxShadow.card};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  transition: all ${(props) => props.theme.transition.instant};
  z-index: 1;
  position: ${(props) => props.theme.position.relative};
  width: 100%;
  height: auto;
  overflow: hidden;
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 500ms;
  }
  :hover::before {
    opacity: 1;
  }
  :hover .image-btn {
    opacity: 1;
    color: ${(props) => props.theme.color.light};
  }
  :hover .image-card {
    transform: scale(1.08);
  }
`;

export const ImageCardWrapper = styled.div`
  width: 100%;
  z-index: -1;
  position: ${(props) => props.theme.position.relative};
`;

export const ImageCard = styled(Img)`
  display: ${(props) => props.theme.grid.display};
  align-items: ${(props) => props.theme.grid.center};
  width: 100%;
  transition: all ${(props) => props.theme.transition.fast};
`;

export const CImageCard = styled.img`
  display: ${(props) => props.theme.grid.display};
  align-items: ${(props) => props.theme.grid.center};
  width: 100%;
  transition: all ${(props) => props.theme.transition.fast};
`;

export const VideoCard = styled.iframe`
  display: ${(props) => props.theme.grid.display};
  align-items: ${(props) => props.theme.grid.center};
  width: 100%;
  transition: all ${(props) => props.theme.transition.fast};
`;

export const ImageContent = styled.div`
  z-index: 2;
  position: ${(props) => props.theme.position.absolute};
  top: 5%;
  left: 5%;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.color.light};
`;

export const PH1 = styled(H1)`
  @media ${(props) => props.theme.maxbp.sm} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

export const InnerHtml = styled.div`
  display: ${(props) => props.theme.grid.display};
  grid-template-rows: repeat(8, max-content);
  a {
    font-size: ${(props) => props.theme.fontSize.base};
    text-decoration: ${(props) => props.theme.properties.none};
    color: ${(props) => props.theme.color.primary};
    opacity: ${(props) => props.theme.properties.ceroEight};
    transition: ${(props) => props.theme.transition.fast};
    &:hover {
      opacity: ${(props) => props.theme.properties.one};
    }
    &:after {
      content: ' ➜';
    }
  }

  p {
    margin-bottom: ${(props) => props.theme.spacing.sm};
    line-height: ${(props) => props.theme.lineHeight.relaxed};
    font-size: ${(props) => props.theme.fontSize.base};
    color: ${(props) => props.theme.color.body};
    @media ${(props) => props.theme.maxbp.sm} {
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }
  p img {
    width: ${(props) => props.theme.width.maxWidth}%;
    box-shadow: ${(props) => props.theme.boxShadow.card};
    border-radius: ${(props) => props.theme.borderRadius.lg};
  }

  p strong {
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }
  @media ${(props) => props.theme.maxbp.sm} {
    margin-top: ${(props) => props.theme.properties.cero};
  }
`;

//🔷🔷🔷 MISCELLANEOUS 🔷🔷🔷

export const CatBtn = styled.div`
  display: ${(props) => props.theme.grid.display};
  align-items: ${(props) => props.theme.grid.center};
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight] || props.theme.fontWeight.normal};
  letter-spacing: ${(props) => props.theme.letterSpacing[props.letterspacing] || props.theme.letterSpacing.wider};
  text-decoration: ${(props) => props.theme.properties.none};
  color: ${(props) => props.theme.color[props.color] || props.theme.color.light};
  background-color: ${(props) => props.theme.color[props.bg] || props.theme.color.secondary};
  max-width: ${(props) => props.width || props.theme.width.maxContent};
  padding: ${(props) => props.theme.button[props.padding] || props.theme.button.xs};
  border-radius: ${(props) => props.theme.borderRadius[props.radius] || props.theme.borderRadius.md};
  box-shadow: ${(props) => props.theme.boxShadow[props.shadow]};
  border: ${(props) => props.theme.border[props.border] || props.theme.border.none};
  transition: ${(props) => props.theme.transition[props.transition] || props.theme.transition.quick};
  opacity: ${(props) => props.theme.properties[props.opacity] || props.theme.properties.one};
  cursor: ${(props) => props.theme.properties.pointer};
  &:hover {
    opacity: ${(props) => props.theme.properties[props.hover] || props.theme.properties.one};
    background-color: ${(props) => props.theme.color[props.bgh] || props.theme.color.primary};
    color: ${(props) => props.theme.color[props.colorh] || props.theme.color.light};
    transform: scale(1.04);
  }
  &:focus {
    outline: ${(props) => props.theme.properties.none};
  }
`;

export const ViewMore = styled(DownArrowAlt)`
  width: 5rem;
  color: ${(props) => props.theme.color.light};
  cursor: ${(props) => props.theme.properties.pointer};
  opacity: ${(props) => props.theme.properties.ceroEight};
  transition: ${(props) => props.theme.transition.fast};
  &:hover {
    opacity: ${(props) => props.theme.properties.one};
  }
`;

export const IconBlockBG = styled.img`
  opacity: 0.1;
  position: absolute;
  width: 40%;
  left: -35rem;
  top: 10rem;
  @media ${(props) => props.theme.maxbp.xl} {
    width: 40%;
    left: -25rem;
  }
  @media ${(props) => props.theme.maxbp.md} {
    width: 100%;
    left: -20rem;
  }
`;

export const IconMotion = styled(motion.div)`
  width: ${(props) => props.theme.width.maxContent};
`;

export const Small = styled.h4`
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight[props.weight] || props.theme.fontWeight.bold};
  color: ${(props) => props.theme.color[props.color] || props.theme.color.secondary};
  text-align: ${(props) => props.theme.align[props.align] || props.theme.align.center};
`;

export const SmallHover = styled.h3`
  transition: all 0.3s ease-in-out;
  opacity: 0;
  color: ${(props) => props.theme.color.backgroundAlt};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  @media ${(props) => props.theme.maxbp.md} {
    opacity: 1;
  }
`;

export const HeightFix = styled.div`
  height: 8rem;
`;

export const Scroll = styled.div``;

//🟪🟦🟩 DROPDOWNS 🟩🟦🟪

export const OptionsBtn = styled.div`
  background: ${(props) => props.theme.color.transparent};
  cursor: ${(props) => props.theme.properties.pointer};
  position: ${(props) => props.theme.position.fixed};
  top: 80%;
  z-index: ${(props) => props.theme.properties.stage1Index};
`;

export const SWrapper = styled(Wrapper)`
  @media ${(props) => props.theme.maxbp.lg} {
    background-color: ${(props) => props.theme.color.backgroundAlt};
    width: 100%;
    height: 100vh;
    position: ${(props) => props.theme.position.fixed};
    z-index: ${(props) => props.theme.properties.stage2Index};
    top: ${(props) => props.theme.properties.cero};
    left: ${(props) => props.theme.properties.cero};
    transition: transform ${(props) => props.theme.transition.fast} ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    overflow: scroll;
  }
`;

//🟪🟦🟩 ICONS 🟩🟦🟪

//🎲🎲🎲 CONTENT 🎲🎲🎲

export const CompanyIconValues1 = styled(HappyBeaming)`
  ${Icon}
`;

export const CompanyIconValues2 = styled(ShapePolygon)`
  ${Icon}
`;

export const CompanyIconValues3 = styled(Rocket)`
  ${Icon}
`;

export const ServiceIconValues1 = styled(CodeAlt)`
  ${Icon}
`;

export const ServiceIconValues2 = styled(Layout)`
  ${Icon}
`;

export const ServiceIconValues3 = styled(ColorSwatch)`
  ${Icon}
`;

export const ServiceIconValues4 = styled(Category)`
  ${Icon}
`;

export const ServiceIconValues5 = styled(FolderVideo)`
  ${Icon}
`;

export const ServiceIconValues6 = styled(AudioSpectrum)`
  ${Icon}
`;

export const ServicesIcon = styled(CheckCircle)`
  ${Icon}
`;

export const ContactFooterIconOne = styled(MailSend)`
  ${Iconsm}
`;

export const ContactFooterIconTwo = styled(PhoneCall)`
  ${Iconsm}
`;

export const ContactFooterIconThree = styled(Map)`
  ${Iconsm}
`;

export const ServicesFooterIcon = styled(CheckCircle)`
  ${Iconsm}
`;

export const BackBtnIcon = styled(ChevronLeftCircle)`
  ${Iconsm}
`;

export const IconPreviousPage = styled(ChevronLeftCircle)`
  ${Icon}
`;

export const IconNextPage = styled(ChevronRightCircle)`
  ${Icon}
`;

export const SocialFooterFacebook = styled(FacebookCircle)`
  ${Iconsm}
`;

export const SocialFooterInstagram = styled(InstagramAlt)`
  ${Iconsm}
`;

export const SocialFooterPinterest = styled(Pinterest)`
  ${Iconsm}
`;

export const SocialFooterTwitter = styled(Twitter)`
  ${Iconsm}
`;

export const SocialFooterDribbble = styled(Dribbble)`
  ${Iconsm}
`;

export const SmallHoverIcon = styled(ChevronRightCircle)`
  ${Iconlight}
`;

// export const PlusIcon = styled(Map)`
//   top: 20%;
//   left: 20%;
//   position: ${(props) => props.theme.position.absolute};
//   ${Icon}
// `;

export const CloseCat = styled(Close)`
  background-color: ${(props) => props.theme.color.backgroundAlt};
  box-shadow: ${(props) => props.theme.boxShadow.card};
  border-radius: ${(props) => props.theme.borderRadius.full};
  ${Icon};
`;

export const OpenCat = styled(GridSmall)`
  background-color: ${(props) => props.theme.color.backgroundAlt};
  box-shadow: ${(props) => props.theme.boxShadow.card};
  border-radius: ${(props) => props.theme.borderRadius.full};
  ${Icon}
`;
//🍔🍔🍔 BURGER 🍔🍔🍔

export const Closed = styled(Close)`
  ${BurgerIcon}
`;

export const Opened = styled(MenuAlt3)`
  ${BurgerIcon}
`;
