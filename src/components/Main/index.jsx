import Button from 'components/Common/Button';
import tw, { css } from 'twin.macro';
import { ReactComponent as Arcticbit } from 'assets/arcticbit.svg';
import { ReactComponent as Raumwatch } from 'assets/raumwatch.svg';
import { ReactComponent as Tat } from 'assets/tat.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'assets/main.webp';
import { useEffect, useState } from 'react';

const Main = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const setInnnerWidth = () => {
      console.log('call', window.innerWidth);
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', setInnnerWidth);
    return () => {
      window.removeEventListener('resize', setViewportWidth);
    };
  }, [window.innerWidth]);

  return (
    <section tw='flex flex-col items-center'>
      <figure
        css={mainBackgroundCss}
        tw='relative flex w-full flex-col justify-end h-[48rem] p-[2rem]'
      >
        <div tw='absolute bottom-0 left-0 w-full bg-gradient-to-b from-[#00000005] p-[2rem] to-[#00000095]'>
          {/* 이미지-글자 색상대조를 위한 임시조치 */}
          <h3 tw='font-extrabold text-white text-[3.6rem] leading-[4.5rem] tracking-[-1px]'>
            Experience the
            <br />
            Elegance
          </h3>
          <figcaption tw='text-white text-[1.5rem] leading-[2.1rem] mt-[0.5rem]'>
            Explore, bid, and win with our AR try-on and real-time alerts with
            seamless web3 integration
          </figcaption>
        </div>
      </figure>

      <h3 tw='text-center font-bold text-[3.2rem] leading-[4rem] my-[2rem]'>
        Solving the Luxury <br /> Auction Challenges
      </h3>

      <p tw='text-center text-[1.6rem] leading-[2.4rem] mb-[2rem]'>
        We address trust issues and complex
        <br /> procedures with our cutting-edge solutions
      </p>

      <Button>Get Started</Button>

      <h6 tw='mt-[5rem] mb-[2rem]'>Trusted by industry leading partners</h6>

      <div tw='w-full sm:px-[2rem]'>
        <Slider
          speed={3000}
          infinite={true}
          autoplay={true}
          autoplaySpeed={0}
          cssEase={'linear'}
          dots={false}
          slidesToShow={viewportWidth < 510 ? 2.5 : 4}
          slidesToScroll={1}
          arrows={false}
          tw='py-[2rem] [&>svg]:mx-[1rem]'
        >
          <Arcticbit width='10rem' height='2rem' />
          <Raumwatch width='17rem' height='2rem' />
          <Tat width='4.5rem' height='2rem' />
          <Arcticbit width='10rem' height='2rem' />
          <Raumwatch width='17rem' height='2rem' />
          <Tat width='4.5rem' height='2rem' />
        </Slider>
      </div>
    </section>
  );
};

export default Main;

const settings = {
  dots: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 2,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
};

const mainBackgroundCss = css`
  background: url(assets/main.webp) no-repeat center / cover;
`;
