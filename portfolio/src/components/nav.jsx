import {CgNametag} from 'react-icons/cg';

const nav = () => {
    return (
        <>
            <div className="flex items-center justify-between p-10 lg:flex-row text-indigo-600">
                <div>
                <a href="#" className="text-white font-mono text-3xl trarcking-wider flex items-center"><CgNametag/> Joann Feng</a>
                </div>
                <div className="space-x-4">
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Home</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">About Me</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Resume</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Contact</a>
                </div>
            </div>
        </>
    )
}

export default nav
