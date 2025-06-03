import {BsLinkedin} from 'react-icons/bs';
import HeroPic from "../assets/placeholder.png";

const Hero = () => {
    return (
        <section className='flex justify-around items-center p-10 space-x-10 md:flex-row flex-col space-y-10 text-ink'>
            <div className='md:w-1/3 w-fit'>
                <p className='text-4xl mb-5 text-pine'>I'm</p>
                <h1 className='text-6xl'>Joann Feng</h1>
                <hr className="my-4 border-t border-verdigris" />
                <p className='mt-10 text-xl text-pine font-sans'>
                    Full Stack Software Engineer
                </p>
            </div>
            <div className='md:w-1/3 items-center md:w-fit'>
                <img src={HeroPic} alt="placeholder image" width={250} height={250}
                className='rounded-full w-full border-8 border-verdigris'/>
            </div>
            <div className='md:w-1/3 w-fit'>
                <p className='text-4xl mb-4'>
                    About Me
                </p>
                <p className='text-pine'>
                    Let's build quality applications with my services.
                </p>
                <button className='bg-verdigris text-bone px-10 py-2 my-3 rounded-full hover:bg-pine hover:text-lion hover:animated-pulse'>
                    Show More...
                </button>
                <div className='flex mt-5 space-x-4 cursor-pointer'>
                    <BsLinkedin size={50} className='bg-bone text-verdigris px-1 py-1 border-3 rounded-2xl hover:border-lion hover:text-pine hover:bg-lion hover:animated-pulse'/>
                </div>
            </div>
        </section>
    )
}

export default Hero