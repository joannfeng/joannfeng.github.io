import {BsLinkedin} from 'react-icons/bs';
import HeroPic from "../assets/placeholder.png";

const hero = () => {
    return (
        <section className='flex justify-around items-center p-10 space-x-10 md:flex-row flex-col space-y-10 text-white'>
            <div className='md:w-1/3 w-fit'>
                <p className='text-4xl mb-5 text-slate-300'>I'm</p>
                <h1 className='text-6xl'>Joann Feng</h1>
                <hr/>
                <p className='mt-10 text-xl text-slate-300 font-sans'>
                    Lorem ipsum
                </p>
            </div>
            <div className='md:w-1/3 items-center md:w-fit'>
                <img src={HeroPic} alt="placeholder image" width={250} height={250}
                className='rounded-full w-full border-8 border-white'/>
            </div>
            <div className='md:w-1/3 w-fit'>
                <p className='text-4xl mb-4'>
                    About Me
                </p>
                <p className='text-slate-300'>
                    Let's build quality applications with my services.
                </p>
                <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-8 hover:text-white'>
                    Show More...
                </button>
                <div className='flex mt-5 space-x-4 cursor-pointer'>
                    <BsLinkedin size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
                </div>
            </div>
        </section>
    )
}

export default hero