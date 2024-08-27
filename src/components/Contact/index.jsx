import tw from 'twin.macro';
import { ReactComponent as ArrowRight } from 'assets/arrow_right_with_tail.svg';
import { ReactComponent as X } from 'assets/x.svg';
import { ReactComponent as Discord } from 'assets/discord.svg';
import { ReactComponent as Instagram } from 'assets/instagram.svg';
import { ReactComponent as Warpcast } from 'assets/warpcast.svg';
import { ReactComponent as IOS } from 'assets/iOS.svg';
import { ReactComponent as Android } from 'assets/android.svg';
import Button from 'components/Common/Button';

const Contact = () => {
  return (
    <section tw='flex flex-col items-center p-[2rem]'>
      <h3 tw='text-center font-bold text-[3.2rem] leading-[4rem] mt-[5rem]'>
        Join the Luxury Auction Revolution
      </h3>
      <p tw='text-[1.6rem] leading-[2.4rem] my-[2rem]'>
        Try our App or visit our social media
      </p>

      <div tw='w-full overflow-hidden border-transparent border-solid bg-yellow-1 border-[0.01px] rounded-[2rem] max-w-[40rem]'>
        <div tw='p-[2rem] pt-[3rem]'>
          <h6 tw='text-center text-[3rem] leading-[2rem] mb-[3rem]'>
            Join our <b>newsletter</b>
          </h6>
          <div tw='relative my-[2rem] h-[3rem]'>
            <input
              type='email'
              tw='w-full outline-khaki-1 rounded-[1rem] p-[1rem]'
              placeholder='Enter your email'
            />
            <button tw='absolute top-0 bg-khaki-1 rounded-[1rem] translate-y-[0.4rem] right-[0.5rem] px-[1rem] py-[0.3rem]'>
              <ArrowRight width='2.5rem' height='2.5rem' tw='fill-white' />
            </button>
          </div>
        </div>

        <div tw='flex flex-col items-center bg-black-1 p-[2rem]'>
          <div tw='text-white pb-[3rem] pt-[1rem] flex items-center [&>svg]:(fill-white mx-[1rem] hover:fill-yellow-1)'>
            <X width='2.5rem' height='2.5rem' />
            <Discord width='2.5rem' height='2.5rem' />
            <Instagram width='2.5rem' height='2.5rem' />
            <Warpcast width='2.5rem' height='2.5rem' />
            <IOS width='2.5rem' height='2.5rem' />
            <Android width='2.5rem' height='2.5rem' />
          </div>
          <h6 tw='text-white text-[3rem] leading-[2rem] pb-[2rem]'>
            Ready to join us?
          </h6>
          <Button tw='my-[1rem]'>Create Account</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
