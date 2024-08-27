import tw from 'twin.macro';
import { ReactComponent as Certificate } from 'assets/certificate.svg';
import { ReactComponent as Payment } from 'assets/payment.svg';
import { ReactComponent as MarketDemocratization } from 'assets/market_democratization.svg';
import { ReactComponent as Privacy } from 'assets/privacy.svg';
import { ReactComponent as ArrowRight } from 'assets/arrow_right.svg';

const Keypoint = () => {
  return (
    <section tw='flex flex-col items-center p-[2rem] my-[5rem]'>
      <h3 tw='font-bold text-black-1 text-[3.2rem] leading-[4rem] mb-[2rem]'>
        An inclusive Web3
        <br /> auction suite <span tw='text-yellow-1'>for all</span>
      </h3>

      {mockKeypointData.map((item, idx) => (
        <div
          css={[
            tw`w-full border-2 border-gray-3 border-solid rounded-[1rem] max-w-[36rem] p-[1.5rem] my-[0.7rem] h-[15rem]`,
            idx % 2 !== 0 && tw`border-gray-2`,
            tw`hover:(border-yellow-1 [&>div>svg:last-of-type]:fill-yellow-1)`,
          ]}
          key={item.title}
        >
          <div tw='flex items-center justify-between mt-[0.5rem]'>
            {item.img}
            <ArrowRight width='1.5rem' height='1.5rem' tw='fill-gray-2' />
          </div>
          <h6 tw='font-bold my-[1.5rem] text-[1.6rem] leading-[2rem]'>
            {item.title}
          </h6>
          <p tw='text-[1.4rem] leading-[2.1rem]'>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Keypoint;

const mockKeypointData = [
  {
    title: 'Authenticity Certificates',
    description: 'Our platform ensures every item is certified authentic',
    img: <Certificate width='2rem' height='2rem' tw='fill-black-1' />,
  },
  {
    title: 'Secure Payment Systems',
    description: 'Enjoy safe and seamless transactions with our platform',
    img: <Payment width='2rem' height='2rem' tw='fill-black-1' />,
  },
  {
    title: 'Market Democratization',
    description:
      'We make auction permissionless, anyone can monetize, bid with the financial support',
    img: <MarketDemocratization width='2rem' height='2rem' tw='fill-black-1' />,
  },
  {
    title: 'Assured Privacy',
    description: 'Privacy-assured transactions with the blockchain technology',
    img: <Privacy width='2rem' height='2rem' tw='fill-black-1' />,
  },
];
