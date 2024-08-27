import tw, { styled } from 'twin.macro';
import { ReactComponent as Logo } from 'assets/helvetica_logo.svg';

const Footer = () => {
  return (
    <footer tw='bg-page px-[2rem] py-[3rem]'>
      <FooterTitle first tw='flex'>
        <Logo tw='fill-black-1' width='1.5rem' height='1.5rem' />
        elvetica
      </FooterTitle>
      <p css={footerLinkStyle}>Bridging your luxury life to Web3 markets</p>
      <FooterTitle>PRODUCT</FooterTitle>
      <p css={footerLinkStyle}>Auction Platform</p>
      <p css={footerLinkStyle}>Luxury RWA Price Oracles</p>
      <p css={footerLinkStyle}>Widgets For Social Media (Frame)</p>
      <FooterTitle>COMPANY</FooterTitle>
      <p css={footerLinkStyle}>Terms of Service</p>
      <p css={footerLinkStyle}>Contact Us</p>
      <p css={footerLinkStyle}>Careers</p>
      <FooterTitle>DEVELOPERS</FooterTitle>
      <p css={footerLinkStyle}>Documentation</p>
      <p css={footerLinkStyle}>Tickets</p>
    </footer>
  );
};

export default Footer;

const FooterTitle = styled.div(({ first }) => [
  tw`font-bold text-[1.6rem] leading-[2rem] mb-[0.5rem]`,
  !first && tw`mt-[2rem]`,
]);

const footerLinkStyle = tw`text-gray-1 text-[1.2rem] leading-[2rem]`;
