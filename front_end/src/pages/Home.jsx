import { SiStorybook } from "react-icons/si";
import Button from '../components/Button';
import heroImg from '../assets/images/image-editor.svg';
import codepower from '../assets/images/26940.jpg';

function Home() {
  return (
    <>
    <div className='w-full grad-img pt-8 pb-56 px-4 md:px-6 -mt-[1px]'>
      <div className="content w-full max-w-7xl mt-16 mx-auto text-white font-poppins">
        <h1 className='text-3xl md:text-5xl lg:text-6xl text-center leading-snug md:leading-snug lg:leading-snug font-semibold'>Unleash your potential with<br />our <span className='text-yellow'>CMS Platform</span></h1>
        <p className="text-base md:text-lg font-light px-2 sm:px-6 leading-tight text-center mt-6">Build Faster secure and faster website for you without using coding</p>
        <Button styles="mt-8 mx-auto" primaryPlain>Register Now</Button>
      </div>
    </div>

    <div className="img w-full max-w-5xl px-4 sm:px-8 md:px-12 -mt-32 xsm:-mt-40 mx-auto drop-shadow-xl">
        <img className='w-full rounded-xl drop-shadow-md' src={heroImg} alt="hero-image" />
    </div>

    <section className='w-full mt-24 md:mt-40 font-poppins'>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-between">
        <div className='w-full md:w-1/2 mr-0 md:mr-8 mt-12 md:mt-0 drop-shadow-md'>
          <img src={codepower} alt="power of code" className='w-full drop-shadow-xl rounded-xl' />
        </div>
        <div className="main-content w-full md:w-1/2 ml-0 md:ml-8 lg:ml-16 mt-2">
          <h2 className='text-3xl md:text-5xl lg:text-6xl leading-none md:leading-none lg:leading-none font-semibold text-neutral-800'>
            Power of code without writng it
          </h2>
          <div className="paragraphs mt-0 md:mt-2">
          <p className='text-base md:text-lg font-light leading-tight pt-6 text-neutral-800'>
            Say goodbye to the old traditional way of designing and developing the websites, and say hello to the new way of making websites without actually coding it.
          </p>
          <p className='text-base md:text-lg font-light leading-tight pt-2 text-neutral-800'>
            We assure you that the website will be fast, secure and SEO optimized. We offer the easy way to make a reliavle website, that create the clean and pleasent HTML, CSS code as it is written by a senior developer.
          </p>
          </div>
        </div>
      </div>
    </section>

    <section className='w-full mt-24 md:mt-40 font-poppins'>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between relative">
        <div className='w-full md:w-3/5 bg-[#e8e5ff] pt-16 pl-8 pr-12 small:pr-48 pb-28 small:pb-24 md:pb-8 rounded-xl'>
          <div className="opacity-100 ml-16 sm:ml-24 mt-12 mb-20 inline-block rotate-45">
            <SiStorybook color='#240D91' size={32} />
          </div>
          <h1 className="opacity-100 text-3xl md:text-4xl lg:text-5xl leading-none md:leading-none lg:leading-none font-semibold text-neutral-800">Build for everyone who has a story to tell</h1>
        </div>
        <div className="flex flex-col absolute right-8 sm:right-0 mx-8 mt-[22rem] small:mt-80 md:mx-0 md:mt-16">
          <div className="r flex flex-col sm:flex-row ">
            <div className="box drop-shadow-xl bg-[#fbfbfb] rounded-lg mx-4 px-4 py-6 w-full sm:w-1/2 md:w-56 lg:w-72">
            <h4 className=" font-poppins text-2xl text-neutral-800 font-semibold">Built for <span className="text-purplish">you</span></h4>
              <p className="text-base md:text-lg font-light leading-tight pt-1 text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="box drop-shadow-xl bg-[#fbfbfb] rounded-lg mx-4 px-4 py-6 w-full sm:w-1/2 md:w-56 lg:w-72 mt-4 sm:mt-0">
              <h4 className=" font-poppins text-2xl text-neutral-800 font-semibold">Built for <span className="text-purplish">designer</span></h4>
              <p className="text-base md:text-lg font-light leading-tight pt-1 text-neutral-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="r flex flex-col sm:flex-row mt-4">
            <div className="box drop-shadow-xl bg-[#fbfbfb] rounded-lg mx-4 px-4 py-6 w-full sm:w-1/2 md:w-56 lg:w-72">
            <h4 className=" font-poppins text-2xl text-neutral-800 font-semibold">Built for <span className="text-purplish">developers</span></h4>
              <p className="text-base md:text-lg font-light leading-tight pt-1 text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="box drop-shadow-xl bg-[#fbfbfb] rounded-lg mx-4 px-4 py-6 w-full sm:w-1/2 md:w-56 lg:w-72 mt-4 sm:mt-0">
            <h4 className=" font-poppins text-2xl text-neutral-800 font-semibold">Built for <span className="text-purplish">non coder</span></h4>
              <p className="text-base md:text-lg font-light leading-tight pt-1 text-neutral-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        </div>
    </section>

    <section className="team">

    </section>
    </>
  )
}

export default Home
