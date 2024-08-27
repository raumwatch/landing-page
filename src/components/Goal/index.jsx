import Button from 'components/Common/Button';
import tw from 'twin.macro';

const Goal = () => {
  return (
    <section tw='flex flex-col items-center bg-black-1 rounded-t-[4rem] py-[2rem] px-[1rem]'>
      <h3 tw='text-center font-medium text-white text-[3.2rem] leading-[4rem] max-w-[40rem]'>
        We are bridging
        <br /> on-chain and real world assets to build the
        <div tw='text-yellow-1'>interoperability</div>
      </h3>
      <p tw='text-center text-white text-[1.4rem] my-[3rem] leading-[2rem] max-w-[36rem]'>
        <b>Helvetica</b> is bridging interoperability for the real world assets
        on-chain with decentralization
      </p>
      <Button>Learn More About Our Approach</Button>
    </section>
  );
};

export default Goal;
