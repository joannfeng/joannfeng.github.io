import {CgNametag} from 'react-icons/cg';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const nav = () => {

const [toggle, setToggle] = useState(false);

function openMenu(){
    setToggle(true);
}
function closeMenu(){
    setToggle(false);
}

    return (
        <>
            <div className="flex items-center justify-between p-10 md:flex-row bg-pine">
                <div>
                    <a href="/" className="text-bone font-mono text-3xl tracking-wider flex items-center"><CgNametag/> Joann Feng</a>
                </div>
                <div className="space-x-4">
                    <div className='hidden md:block space-x-2'>
                        <Link to="/" className="text-bone hover:bg-ink rounded-full px-5 py-2 text-xl">Home</Link>
                        <Link to="/resume" className="text-bone hover:bg-ink rounded-full px-5 py-2 text-xl">Resume</Link>
                        <Link to="/contact" className="text-bone hover:bg-ink rounded-full px-5 py-2 text-xl">Contact</Link>
                    </div>
                    <div className='block md:hidden'>
                        {toggle ? (
                            <AiOutlineClose onClick={closeMenu} size={30} 
                            className='text-orange-100'/>
                        ):(<HiMenuAlt1 onClick={openMenu} size={30} 
                        className='text-orange-100'/>)}
                    </div>
                </div>
            </div>

            <div className='block md:hidden'>
                {toggle ? (
                    <div className='flex justify-between ml-10'>
                        <ul>
                            <li className='text-bone hover:bg-ink text-xl mb-2 cursor-pointer'>Home</li>
                            {/* <li className='text-orange-100 hover:bg-emerald-800 text-xl mb-2 cursor-pointer'>About Me</li> */}
                            <li className='text-bone hover:bg-ink text-xl mb-2 cursor-pointer'>Resume</li>
                            <li className='text-bone hover:bg-ink text-xl mb-2 cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                    ):(
                        <div></div>
                )}
            </div>
        </>
    )
}

export default nav
