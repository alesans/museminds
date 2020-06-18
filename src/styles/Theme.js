import styled, { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { Link } from 'gatsby';

//🟣🔵🟢 THEME VARIABLES 🟢🔵🟣

export const Theme = {
  maxbp: {
    xs: 'only screen and (max-width: 320px)',
    sm: 'only screen and (max-width: 540px)',
    md: 'only screen and (max-width: 768px)',
    lg: 'only screen and (max-width: 960px)',
    xl: 'only screen and (max-width: 1366px)',
  },
  minbp: {
    xs: 'only screen and (min-width: 320px)',
    sm: 'only screen and (min-width: 540px)',
    md: 'only screen and (min-width: 768px)',
    lg: 'only screen and (min-width: 960px)',
    xl: 'only screen and (min-width: 1366px)',
  },
  color: {
    transparent: 'transparent',
    background: '#FFFFFF',
    backgroundAlt: '#F5FAFD',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#1D293F',
    backgroundAltLight: 'rgba(122, 64, 216)',
    backgroundAltDark: '#202D44',
    dark: 'rgba(14, 21, 58)',
    light: '#FFFFFF',
    gray: '#747474',
    grayAlt: '#d4d4d4',
    primary: 'rgba(122, 64, 216)',
    secondary: 'rgba(90, 36, 178)',
    title: 'rgba(14, 21, 58)',
    body: 'rgba(14, 21, 58)',
    success: 'springgreen',
    danger: 'crimson',
    warning: 'gold',
    info: 'royalblue',
    disabled: 'silver',
    opacityPrimary: 'rgba(122, 64, 216, 0.8)',
    opacitySecondary: 'rgba(90, 36, 178, 0.98)',
    opacityBody: 'rgba(14, 21, 58, 0.6)',
    opacityBodyDark: 'rgba(14, 21, 58, 0.4)',
    opacityBodyDarker: 'rgba(14, 21, 58, 0.9)',
    backgroundGradient: 'linear-gradient(to bottom, rgba(14, 21, 58, 0.7), rgba(14, 21, 58, 0.7))',
    brandGradient: 'linear-gradient(to top right, rgba(90, 36, 178), rgba(90, 36, 178, 0.7))',
  },
  boxShadow: {
    none: 'none',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 0 0 1px rgba(0, 0, 0, 0.02)',
    outline: '0 0 0 3px rgba(122, 64, 216, 0.5)',
    cover: '-200px -1px 0px 500px rgba(0,0,0,0.38)',
    card: '0px 2px 6px rgba(0,0,0,0.14)',
  },
  font: {
    sans: '"Noto Sans HK", sans-serif',
    serif: '"Pridi", sans',
    monospace: '"Space Mono", monospace',
    rendering: 'optimizeLegibility',
  },
  fontSize: {
    xs: '1.4rem',
    sm: '1.6rem',
    base: '1.8rem',
    md: '2.4rem',
    lg: '3.2rem',
    xl: '4.2rem',
    xxl: '5rem',
  },
  grid: {
    none: 'none',
    display: 'grid',
    center: 'center',
    start: 'start',
    end: 'end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    columnBox: '[full-start] 1fr [center-start] repeat(12, 1fr) [center-end] 1fr [full-end]',
    altBox: '[full-start] 5% [center-start] repeat(12, 1fr) [center-end] 5% [full-end]',
    contentBox: '[full-start] repeat(12, 1fr) [full-end]',
    fullBox: 'full-start / full-end',
    centerBox: 'center-start / center-end',
    gridOne: '1fr',
    gridTwo: 'repeat(2, 1fr)',
    gridThree: 'repeat(3, 1fr)',
    gridFour: 'repeat(4, 1fr)',
    gridFive: 'repeat(5, 1fr)',
    gridSix: 'repeat(6, 1fr)',
    gridSeven: 'repeat(7, 1fr)',
    gridEight: 'repeat(8, 1fr)',
    gridNine: 'repeat(9, 1fr)',
    gridTen: 'repeat(10, 1fr)',
    gridEleven: 'repeat(11, 1fr)',
    gridTwelve: 'repeat(12, 1fr)',
    responsive: 'repeat(auto-fit, minmax(20%, 1fr))',
    footer: 'repeat(auto-fit, minmax(20rem, 1fr))',
    gap: {
      sm: '2rem',
      md: '4rem',
      lg: '8rem',
      xl: '16rem',
    },
  },
  flex: {
    none: 'none',
    display: 'flex',
    wrap: 'wrap',
    noWrap: 'nowrap',
    wrapReverse: 'wrap-reverse',
    column: 'column',
    row: 'row',
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    italic: 'italic',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeight: {
    none: '1',
    tight: '1.1',
    snug: '1.3',
    normal: '1.5',
    relaxed: '1.6',
    loose: '2',
  },
  listStyleType: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
  },
  spacing: {
    none: '0',
    half: '0.5rem',
    base: '1rem',
    sm: '2.5rem',
    md: '4rem',
    lg: '8rem',
    xl: '10rem',
    section: '15vh',
  },
  button: {
    none: '0',
    icon: '0.1rem 1.2rem',
    xs: '1rem 2rem',
    sm: '1.2rem 3rem',
    md: '1.4rem 4rem',
    lg: '1.6rem 5rem',
    xl: '1.8rem 6rem',
  },
  background: {
    none: '0',
    top: 'center top',
    center: 'center center',
    bottom: 'center bottom',
    cover: 'cover',
    contain: 'contain',
    repeat: 'repeat',
    noRepeat: 'no-repeat',
    fixed: 'fixed',
  },
  borderRadius: {
    none: '0',
    sm: '0.1rem',
    md: '0.2rem',
    default: '0.4rem',
    lg: '1rem',
    xl: '5rem',
    full: '50%',
  },
  border: {
    none: '0',
    sm: '0.1rem solid',
    md: '0.2rem solid',
    lg: '0.3rem solid',
    xl: '0.4rem solid',
    solid: 'solid',
    dotted: 'dotted',
    dashed: 'dashed',
    double: 'double',
  },
  width: {
    box: 'border-box',
    maxWidth: '100%',
    remhack: '62.5%',
    maxContent: 'max-content',
    minContent: 'min-content',
    maxRepeat: 'repeat(2, max-content)',
    minRepeat: 'repeat(2, min-content)',
  },
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
  },
  properties: {
    cero: '0',
    one: '1',
    ceroFive: '0.5',
    ceroEight: '0.8',
    none: 'none',
    inherit: 'inherit',
    hidden: 'hidden',
    pointer: 'pointer',
    maxIndex: '9999',
    underIndex: '9995',
    stage1Index: '9990',
    stage2Index: '9980',
    capitalize: 'capitalize',
    uppercase: 'uppercase',
    marginAuto: '0 auto',
    middle: 'middle',
    smooth: 'smooth',
    vertical: 'vertical',
    horizontal: 'horizontal',
    auto: 'auto',
    center: 'center',
    left: 'left',
    right: 'right',
  },
  transition: {
    slow: '1s',
    fast: '0.5s',
    quick: '0.3s',
    instant: '0.1s',
  },
  align: {
    center: 'center',
    left: 'left',
    right: 'right',
  },
  position: {
    fixed: 'fixed',
    sticky: 'sticky',
    relative: 'relative',
    absolute: 'absolute',
    transform: 'translate',
  },
};

//🟣🔵🟢 GLOBAL STYLES 🟢🔵🟣

export const GlobalStyles = createGlobalStyle`
  ${reset}

  *, *::after, *::before {
    box-sizing: ${(props) => props.theme.properties.inherit};
  }

  html {
    font-size: ${(props) => props.theme.width.remhack};
    box-sizing: ${(props) => props.theme.width.box};
  }

  body {
    width: ${(props) => props.theme.width.maxWidth};
    font-family: ${(props) => props.theme.font.sans};
    font-size: ${(props) => props.theme.fontSize.base};
    color: ${(props) => props.theme.color.body};
    background-color: ${(props) => props.theme.color.background};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    text-rendering: ${(props) => props.theme.font.rendering};
    line-height: ${(props) => props.theme.lineHeight.relaxed};
    overflow-x: ${(props) => props.theme.properties.hidden};
    text-decoration: ${(props) => props.theme.properties.none};
  }

  button, input[type="submit"], input[type="reset"] {
	background: ${(props) => props.theme.properties.none};
	color: ${(props) => props.theme.properties.inherit};
	border: ${(props) => props.theme.properties.none};
	padding: ${(props) => props.theme.properties.cero};
	font: ${(props) => props.theme.properties.inherit};
	cursor: ${(props) => props.theme.properties.pointer};
	outline: ${(props) => props.theme.properties.none};
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  input[type="text"] {
      color: ${(props) => props.theme.properties.inherit};
  }

  textarea {
      color: ${(props) => props.theme.properties.inherit};
  }
  
  ::-moz-selection {
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.light}
  }
  ::-webkit-selection {
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.light}
  }
  ::selection {
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.light}
  }
`;

//🟣🔵🟢 MIXINS 🟢🔵🟣

const Breakpoint = css`
  @media ${(props) => props.theme.maxbp.xs} {
    grid-column: ${(props) => props.xs};
    grid-template-columns: ${(props) => props.theme.grid[props.colxs] || props.colxs || props.theme.grid.gridOne};
    display: ${(props) => props.xsdisplay};
    order: ${(props) => props.xsorder};
    width: ${(props) => props.xswidth};
    font-size: ${(props) => props.theme.fontSize[props.xssize]};
  }

  @media ${(props) => props.theme.maxbp.sm} {
    grid-column: ${(props) => props.sm};
    grid-template-columns: ${(props) => props.theme.grid[props.colsm] || props.colsm || props.theme.grid.gridOne};
    display: ${(props) => props.smdisplay};
    order: ${(props) => props.smorder};
    width: ${(props) => props.smwidth};
    font-size: ${(props) => props.theme.fontSize[props.smsize]};
  }

  @media ${(props) => props.theme.maxbp.md} {
    grid-column: ${(props) => props.md};
    grid-template-columns: ${(props) => props.theme.grid[props.colmd] || props.colmd || props.theme.grid.gridOne};
    display: ${(props) => props.mddisplay};
    order: ${(props) => props.mdorder};
    width: ${(props) => props.mdwidth};
    font-size: ${(props) => props.theme.fontSize[props.mdsize]};
  }

  @media ${(props) => props.theme.maxbp.lg} {
    grid-column: ${(props) => props.lg};
    grid-template-columns: ${(props) => props.theme.grid[props.collg] || props.colmd};
    display: ${(props) => props.lgdisplay};
    order: ${(props) => props.lgorder};
    width: ${(props) => props.lgwidth};
    font-size: ${(props) => props.theme.fontSize[props.lgsize]};
  }

  @media ${(props) => props.theme.maxbp.xl} {
    grid-column: ${(props) => props.xl};
    display: ${(props) => props.xldisplay};
    order: ${(props) => props.xlorder};
    width: ${(props) => props.xlwidth};
    font-size: ${(props) => props.theme.fontSize[props.xlsize]};
  }
`;

const BaseGrid = css`
  grid-column: ${(props) => props.theme.grid.fullBox};
  display: ${(props) => props.theme.grid.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.color[props.bg]};
  box-shadow: ${(props) => props.theme.boxShadow[props.shadow]};
  color: ${(props) => props.theme.color[props.color]};
  grid-template-columns: ${(props) => props.theme.grid[props.columns] || props.theme.grid.columnBox};
  grid-template-rows: ${(props) => props.theme.properties.auto};
  align-items: ${(props) => props.theme.grid[props.align]};
  align-content: ${(props) => props.theme.grid[props.alignc]};
  justify-content: ${(props) => props.theme.grid[props.justify]};
  justify-items: ${(props) => props.theme.grid[props.justifyi]};
  align-self: ${(props) => props.theme.grid[props.alignSelf]};
  justify-self: ${(props) => props.theme.grid[props.justifySelf]};
  position: ${(props) => props.theme.position[props.position]};
  z-index: ${(props) => props.index};
`;

const ContentGrid = css`
  grid-column: ${(props) => props.theme.grid[props.box] || props.column || props.theme.grid.centerBox};
  display: ${(props) => props.theme.grid.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.color[props.bg]};
  box-shadow: ${(props) => props.theme.boxShadow[props.shadow]};
  color: ${(props) => props.theme.color[props.color]};
  grid-template-columns: ${(props) => props.theme.grid[props.columns] || props.theme.grid.contentBox};
  grid-template-rows: ${(props) => props.theme.properties.auto};
  grid-gap: ${(props) => props.theme.grid.gap[props.gap]};
  grid-column-gap: ${(props) => props.theme.grid.gap[props.cgap]};
  grid-row-gap: ${(props) => props.theme.grid.gap[props.rgap]};
  order: ${(props) => props.order};
  align-items: ${(props) => props.theme.grid[props.align]};
  align-content: ${(props) => props.theme.grid[props.alignc]};
  justify-content: ${(props) => props.theme.grid[props.justify]};
  justify-items: ${(props) => props.theme.grid[props.justifyi]};
  align-self: ${(props) => props.theme.grid[props.alignSelf]};
  justify-self: ${(props) => props.theme.grid[props.justifySelf]};
  position: ${(props) => props.theme.position[props.position]};
  z-index: ${(props) => props.index};
`;

const Grid = css`
  display: ${(props) => props.theme.display[props.display] || props.theme.grid.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.color[props.bg]};
  box-shadow: ${(props) => props.theme.boxShadow[props.shadow]};
  color: ${(props) => props.theme.color[props.color]};
  grid-template-columns: ${(props) => props.theme.grid[props.columns] || props.columns};
  grid-template-rows: ${(props) => props.theme.grid[props.rows] || props.rows};
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  grid-gap: ${(props) => props.theme.grid.gap[props.gap]};
  grid-column-gap: ${(props) => props.theme.grid.gap[props.cgap]};
  grid-row-gap: ${(props) => props.theme.grid.gap[props.rgap]};
  order: ${(props) => props.order};
  align-items: ${(props) => props.theme.grid[props.align]};
  align-content: ${(props) => props.theme.grid[props.alignc]};
  justify-content: ${(props) => props.theme.grid[props.justify]};
  justify-items: ${(props) => props.theme.grid[props.justifyi]};
  align-self: ${(props) => props.theme.grid[props.alignSelf]};
  justify-self: ${(props) => props.theme.grid[props.justifySelf]};
  position: ${(props) => props.theme.position[props.position]};
  z-index: ${(props) => props.index};
  transition: ${(props) => props.transition};
  :hover {
    transform: ${(props) => props.htransform};
  }
`;

const Flex = css`
  display: ${(props) => props.theme.grid.flex};
  flex-wrap: ${(props) => props.theme.flex[props.wrap] || props.theme.grid.wrap};
  flex-direction: ${(props) => props.theme.flex[props.direction]};
  align-items: ${(props) => props.theme.flex[props.align]};
  justify-items: ${(props) => props.theme.flex[props.justify]};
  position: ${(props) => props.theme.position[props.position]};
  z-index: ${(props) => props.index};
`;

const Margin = css`
  margin-top: ${(props) => props.theme.spacing[props.mt]};
  margin-right: ${(props) => props.theme.spacing[props.mr]};
  margin-left: ${(props) => props.theme.spacing[props.ml]};
  margin-bottom: ${(props) => props.theme.spacing[props.mb]};
`;

const Padding = css`
  padding-top: ${(props) => props.theme.spacing[props.pt]};
  padding-right: ${(props) => props.theme.spacing[props.pr]};
  padding-left: ${(props) => props.theme.spacing[props.pl]};
  padding-bottom: ${(props) => props.theme.spacing[props.pb]};
`;

const Border = css`
  border-top: ${(props) => props.bt};
  border-right: ${(props) => props.br};
  border-left: ${(props) => props.bl};
  border-bottom: ${(props) => props.bb};
`;

const Title = css`
  font-weight: ${(props) => props.theme.fontWeight[props.weight] || props.theme.fontWeight.bold};
  color: ${(props) => props.theme.color[props.color] || props.theme.color.body};
  text-align: ${(props) => props.theme.align[props.align] || props.theme.align.left};
  max-width: ${(props) => props.width || props.theme.width.maxWidth};
`;

const Content = css`
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight] || props.theme.fontWeight.normal};
  color: ${(props) => props.theme.color[props.color] || props.theme.color.body};
  text-align: ${(props) => props.theme.properties[props.align] || props.theme.properties.left};
  max-width: 60rem;
`;

const Background = css`
  background-image: ${(props) => props.bgurl};
  background-position: ${(props) => props.theme.background[props.bgp]};
  background-size: ${(props) => props.theme.background[props.bgs]};
  background-repeat: ${(props) => props.theme.background[props.bgr]};
`;

export const BurgerIcon = css`
  width: 4rem;
  color: ${(props) => props.theme.color.primary};
  border: ${(props) => props.theme.properties.cero};
  background-color: ${(props) => props.theme.color.transparent};
  &:focus {
    outline: ${(props) => props.theme.properties.none};
  }
`;

export const Icon = css`
  width: 5rem;
  color: ${(props) => props.theme.color.primary};
  margin: 1rem auto;
`;

export const Iconsm = css`
  width: 3rem;
  color: ${(props) => props.theme.color.primary};
  margin: 1rem auto;
  margin-right: 1rem;
`;

export const Iconlight = css`
  width: 2rem;
  color: ${(props) => props.theme.color.light};
  margin-bottom: 0.3rem;
  margin-left: 1rem;
`;

//🟪🟦🟩 CONTAINER STYLES 🟩🟦🟪

export const Main = styled.main`
  position: ${(props) => props.theme.position.relative};
  ${BaseGrid}
  ${Margin}
  ${Padding}
  ${Border}
`;

export const Section = styled.section`
  ${BaseGrid}
  ${Margin}
  ${Padding}
  ${Border}
  ${Background}
`;

export const Container = styled.div`
  ${ContentGrid}
  ${Margin}
  ${Padding}
  ${Border}
`;

export const Wrapper = styled.div`
  ${Grid}
  ${Margin}
  ${Padding}
  ${Border}
  ${Breakpoint}
`;

export const FlexWrap = styled.div`
  ${Flex}
  ${Margin}
  ${Padding}
  ${Border}
`;

export const HLayout = styled.header`
  position: ${(props) => props.theme.position.fixed};
  z-index: ${(props) => props.theme.properties.maxIndex};
  ${BaseGrid}
  ${Margin}
  ${Padding}
  ${Border}
`;

export const FLayout = styled.footer`
  ${BaseGrid}
  ${Margin}
  ${Padding}
  ${Border}
`;

export const NUl = styled.ul`
  @media ${(props) => props.theme.maxbp.lg} {
    display: ${(props) => props.theme.flex.display};
    flex-direction: ${(props) => props.theme.flex.column};
    justify-content: ${(props) => props.theme.flex.evenly};
    padding: 10vh 0;
  }
  display: ${(props) => props.theme.flex.display};
  justify-content: ${(props) => props.theme.flex.between};
  align-items:  ${(props) => props.theme.flex.center};
  ${Margin}
  ${Padding}
  ${Border}
`;

export const Ul = styled.ul`
  ${Grid}
  ${Margin}
  ${Padding}
  ${Border}
  ${Breakpoint}
`;

//🟪🟦🟩 TYPOGRAPHY STYLES 🟩🟦🟪

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.xxl};
  @media ${(props) => props.theme.maxbp.sm} {
      font-size: 4rem;
    }
  ${Title}
  ${Margin}
  ${Padding}
  ${Border}
  ${Breakpoint}
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.xl};
  @media ${(props) => props.theme.maxbp.md} {
      font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.lg};
  }
  ${Title}
  ${Margin}
  ${Padding}
  ${Border}
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.md};
  @media ${(props) => props.theme.maxbp.md} {
      font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.md};
  }
  ${Title}
  ${Margin}
  ${Padding}
  ${Border}
`;

export const H4 = styled.h4`
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  @media ${(props) => props.theme.maxbp.md} {
      font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  }
  ${Title}
  ${Margin}
  ${Padding}
  ${Border}
`;

export const P = styled.p`
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  @media ${(props) => props.theme.maxbp.md} {
      font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.sm};
  }
  ${Content}
  ${Margin}
  ${Padding}
  ${Border}
`;

export const Span = styled.span`
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  ${Content}
  ${Margin}
  ${Padding}
  ${Border}
`;

export const Li = styled.li`
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  @media ${(props) => props.theme.maxbp.md} {
      font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.sm};
  }
  ${Content}
  ${Margin}
  ${Padding}
  ${Border}
`;

//🟪🟦🟩 LINK STYLES 🟩🟦🟪 FIXME:

export const NavLink = styled(Link)`
  @media ${(props) => props.theme.maxbp.lg} {
     font-size: 150%;
  }
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  ${Content}
    font-weight: ${(props) => props.theme.fontWeight[props.fontWeight] || props.theme.fontWeight.normal};
  text-decoration: ${(props) => props.theme.properties.none};
  color: ${(props) => props.theme.color[props.color] || props.theme.color.body};
  transition: ${(props) => props.theme.transition[props.transition] || props.theme.transition.quick};
  &:hover {
    opacity: ${(props) => props.theme.properties[props.hover] || props.theme.properties.ceroEight};
  }
`;

export const LogoLink = styled(Link)`
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  ${Content}
  text-decoration: ${(props) => props.theme.properties.none};
  color: ${(props) => props.theme.color[props.color] || props.theme.color.light};
  transition: ${(props) => props.theme.transition[props.transition] || props.theme.transition.quick};
  &:hover {
    opacity: ${(props) => props.theme.properties[props.hover] || props.theme.properties.ceroEight};
  }
  @media ${(props) => props.theme.maxbp.md} {
    width: 150%;
  }
  @media ${(props) => props.theme.maxbp.sm} {
    width: 250%;
  }
  @media ${(props) => props.theme.maxbp.xs} {
    width: 300%;
  }
  z-index: ${(props) => props.theme.properties.maxIndex};
`;

export const GLink = styled(Link)`
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight] || props.theme.fontWeight.normal};
  text-decoration: ${(props) => props.theme.properties.none};
  color: ${(props) => props.theme.color[props.color] || props.theme.color.light};
  transition: ${(props) => props.theme.transition[props.transition] || props.theme.transition.quick};
  &:hover {
    opacity: ${(props) => props.theme.properties[props.hover] || props.theme.properties.ceroEight};
    color: ${(props) => props.theme.color[props.chover]};
  }
  @media ${(props) => props.theme.maxbp.md} {
    font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.sm};
  }
  ${Content}
`;

export const NavBtn = styled(Link)`
  @media ${(props) => props.theme.maxbp.lg} {
     font-size: 150%;
  }
  display: ${(props) => props.theme.grid.display};
  align-items: ${(props) => props.theme.grid.center};
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight] || props.theme.fontWeight.normal};
  letter-spacing: ${(props) => props.theme.letterSpacing[props.letterspacing] || props.theme.letterSpacing.wider};
  text-decoration: ${(props) => props.theme.properties.none};
  color: ${(props) => props.theme.color[props.color] || props.theme.color.light};
  background-color: ${(props) => props.theme.color[props.bg] || props.theme.color.secondary};
  max-width: ${(props) => props.width || props.theme.width.maxContent};
  padding: ${(props) => props.theme.button[props.padding] || props.theme.button.sm};
  border-radius: ${(props) => props.theme.borderRadius[props.radius] || props.theme.borderRadius.md};
  border: ${(props) => props.theme.border[props.border] || props.theme.border.none};
  transition: ${(props) => props.theme.transition[props.transition] || props.theme.transition.quick};
  opacity: ${(props) => props.theme.properties[props.opacity] || props.theme.properties.one};
  ${Margin}
  ${Padding}
  ${Border}
  &:hover {
    opacity: ${(props) => props.theme.properties[props.hover] || props.theme.properties.one};
    background-color: ${(props) => props.theme.color[props.bg] || props.theme.color.primary};
    transform: scale(1.04);
  }
  &:focus {
    outline: ${(props) => props.theme.properties.none};
  }
`;

export const Btn = styled(Link)`
  display: ${(props) => props.theme.flex.display};
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
  ${Margin}
  ${Padding}
  ${Border}
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

export const Anchor = styled.a`
  display: ${(props) => props.theme.grid.display};
  align-items: ${(props) => props.theme.grid.center};
  cursor: ${(props) => props.theme.properties.pointer};
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight[props.weight] || props.theme.fontWeight.bold};
  letter-spacing: ${(props) => props.theme.letterSpacing[props.letterspacing] || props.theme.letterSpacing.wider};
  text-decoration: ${(props) => props.theme.properties.none};
  color: ${(props) => props.theme.color[props.color] || props.theme.color.body};
  background-color: ${(props) => props.theme.color[props.bg] || props.theme.color.transparent};
  max-width: ${(props) => props.width || props.theme.width.maxContent};
  padding: ${(props) => props.theme.button[props.padding] || props.theme.button.none};
  border-radius: ${(props) => props.theme.borderRadius[props.radius] || props.theme.borderRadius.none};
  border: ${(props) => props.theme.border[props.border] || props.theme.border.none};
  transition: ${(props) => props.theme.transition[props.transition] || props.theme.transition.quick};
  opacity: ${(props) => props.theme.properties[props.opacity] || props.theme.properties.one};
  ${Margin}
  ${Padding}
  ${Border}

  &:hover {
    opacity: ${(props) => props.theme.properties[props.hover] || props.theme.properties.one};
  }
  &:focus {
    outline: ${(props) => props.theme.properties.none};
  }
`;

//🟪🟦🟩 IMAGE STYLES 🟩🟦🟪 FIXME:

export const Image = styled.img`
  display: ${(props) => props.theme.grid.display};
  width: ${(props) => props.width || props.theme.width.maxWidth};
  ${Breakpoint}
  ${Margin}
  ${Padding}
  ${Border}
`;

//🟪🟦🟩 FORM STYLES 🟩🟦🟪

export const Form = styled.form`
  ${Grid}
  ${Margin}
  ${Padding}
  ${Border}
  ${Breakpoint}
  `;
export const Input = styled.input`
  display: ${(props) => props.theme.display.block};
  width: 100%;
  height: 0.3rem;
  padding-left: 1rem;
  padding-top: ${(props) => props.theme.spacing.sm};
  padding-bottom: ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.color.backgroundAlt};
  border: ${(props) => props.theme.border.sm} ${(props) => props.theme.color.transparent || props.theme.color.primary};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  outline: ${(props) => props.theme.properties.none};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-size: ${(props) => props.theme.properties.inherit};
  font-family: ${(props) => props.theme.properties.inherit};
  transition: all ${(props) => props.theme.transition.instant};
  box-shadow: ${(props) => props.theme.boxShadow.inner};
  ::placeholder {
    color: ${(props) => props.theme.color.gray};
  }

  :-ms-input-placeholder {
    color: ${(props) => props.theme.color.gray};
  }

  ::-ms-input-placeholder {
    color: ${(props) => props.theme.color.gray};
  }

  &:focus {
    border: ${(props) => props.theme.border.sm} ${(props) => props.theme.color.secondary};
    box-shadow: ${(props) => props.theme.boxShadow.outline};
  }
`;

export const Label = styled.label`
  display: ${(props) => props.theme.width.block};
  width: ${(props) => props.theme.width[100]}%;
  color: ${(props) => props.theme.color.tertiary};
  margin-top: ${(props) => props.theme.spacing.base};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;
export const Textarea = styled.textarea`
  min-height: 26em;
  resize: ${(props) => props.theme.properties.vertical};
  display: ${(props) => props.theme.display.block};
  width: 100%;
  height: 0.3rem;
  padding-left: 1rem;
  padding-top: ${(props) => props.theme.spacing.sm};
  padding-bottom: ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.color.backgroundAlt};
  border: ${(props) => props.theme.border.sm} ${(props) => props.theme.color.transparent || props.theme.color.primary};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  outline: ${(props) => props.theme.properties.none};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-size: ${(props) => props.theme.properties.inherit};
  font-family: ${(props) => props.theme.properties.inherit};
  transition: all ${(props) => props.theme.transition.instant};
  box-shadow: ${(props) => props.theme.boxShadow.inner};
  ::placeholder {
    color: ${(props) => props.theme.color.gray};
  }

  :-ms-input-placeholder {
    color: ${(props) => props.theme.color.gray};
  }

  ::-ms-input-placeholder {
    color: ${(props) => props.theme.color.gray};
  }

  &:focus {
    border: ${(props) => props.theme.border.sm} ${(props) => props.theme.color.secondary};
    box-shadow: ${(props) => props.theme.boxShadow.outline};
  }
`;

export const SendBtn = styled.button`
  display: ${(props) => props.theme.flex.display};
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
  ${Margin}
  ${Padding}
  ${Border}
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
