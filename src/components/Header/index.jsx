import tw from 'twin.macro';
import { ReactComponent as Logo } from 'assets/helvetica_logo.svg';
import { ReactComponent as Menu } from 'assets/menu.svg';

const Header = () => {
  return (
    <header tw='flex w-full items-center justify-between bg-white p-[2rem] h-[6rem]'>
      <Logo width='2.2rem' height='2.2rem' tw='fill-gray-1' />
      <Menu width='2.5rem' height='2.5rem' tw='fill-gray-1' />
    </header>
  );
};

export default Header;
