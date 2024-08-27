import tw from 'twin.macro';
import grow from 'assets/growtogether2.webp';
import defi from 'assets/defi.webp';
import ar from 'assets/ar.webp';
import vip from 'assets/vip.webp';

const Usage = () => {
  return (
    <section tw='flex flex-col items-center mt-[10rem] mb-[4rem]'>
      <h3 tw='text-center font-bold text-[3.2rem] leading-[4rem]'>
        Web3 Auction tailored
        <br /> to your luxury needs
      </h3>

      <div tw='flex w-full flex-wrap items-center justify-center my-[5rem]'>
        {mockUsageDate.map((item) => (
          <div
            tw='flex items-center justify-center w-[32rem] my-[1rem]'
            key={item.title}
          >
            <div tw='p-[1rem] h-[40rem]'>
              <img
                src={item.img}
                alt={item.title}
                tw='overflow-hidden rounded-3xl w-[30rem]'
                lazy
              />
              <h6 tw='font-semibold text-[1.8rem] leading-[2.6rem] py-[0.5rem]'>
                {item.title}
              </h6>
              <p tw='font-light text-[1.6rem] leading-[2.4rem]'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Usage;

const mockUsageDate = [
  {
    title: 'Grow Together',
    description: 'Monetize',
    img: grow,
  },
  {
    title: 'DeFi Integrations',
    description: 'Leverage bidding with your auction account',
    img: defi,
  },
  {
    title: 'Ar Try-On',
    description: 'See how luxury items look in your space before bidding',
    img: ar,
  },
  {
    title: 'Premium Services',
    description: 'Access VIP auctions, after care and concierge services',
    img: vip,
  },
];
