import Contact from 'components/Contact';
import Docs from 'components/Docs';
import Footer from 'components/Footer';
import Goal from 'components/Goal';
import Header from 'components/Header';
import Keypoint from 'components/Keypoint';
import Main from 'components/Main';
import Usage from 'components/Usage';
import tw from 'twin.macro';

export default function App() {
  return (
    <div tw='flex w-full items-center justify-center bg-page-outer font-helvetica text-black-1'>
      <div tw='min-h-screen w-full bg-white max-w-[77rem]'>
        <Header />
        <main>
          <Main />
          <Keypoint />
          <Docs />
          <Usage />
          <Goal />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
