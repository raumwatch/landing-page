import tw from 'twin.macro';
import phone from 'assets/phone.png';
import Button from 'components/Common/Button';
import { ReactComponent as Logo } from 'assets/helvetica_logo.svg';

export const Docs = () => {
  return (
    <section tw='flex flex-col items-center'>
      <h3 tw='text-[3.2rem] leading-[4rem] my-[2rem]'>
        Built to bring
        <div tw='font-bold text-khaki-1 indent-[2rem]'>Real World Asset</div>
        <div tw='indent-[4rem]'>
          <span tw='text-yellow-1'>onchain</span> seamlessly
        </div>
      </h3>

      <h6 tw='flex font-bold text-[1.7rem] leading-[2rem] my-[1rem]'>
        <Logo tw='fill-black-1' width='1.5rem' height='1.5rem' />
        elvetica
      </h6>
      <p tw='text-center font-light text-[1.2rem] leading-[2rem]'>
        empowers the cornerstone to create the most powerful feeds
        <br />
        for luxury real world assets onchain with web3 auction
      </p>
      <img src={phone} alt='phone' tw='my-[2rem]' />

      <Button>Read the Docs</Button>
    </section>
  );
};

export default Docs;
