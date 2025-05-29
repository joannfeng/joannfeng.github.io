import Project1Img from '../assets/placeholder.png'
import Project2Img from '../assets/placeholder.png'
import Project3Img from '../assets/placeholder.png'
import Project4Img from '../assets/placeholder.png'

export default function Projects() {
    return (
        <>
            <div className="bg-indigo-800 m-20 max-w-full">
                <div className="grid justify-items-center m-10">
                    <h1 className="text-3xl text-white mt-10">Projects</h1>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-4 p-5">
                        <div className="max-w-md wx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animated-pulse">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                        Project1
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className="mt-2 text-slate-500">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="md:shrink-0 p-5">
                                    <img src={Project1Img} alt="Project1" width={150} height={150}></img>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md wx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animated-pulse">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                        Project1
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className="mt-2 text-slate-500">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="md:shrink-0 p-5">
                                    <img src={Project1Img} alt="Project1" width={150} height={150}></img>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md wx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animated-pulse">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                        Project1
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className="mt-2 text-slate-500">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="md:shrink-0 p-5">
                                    <img src={Project1Img} alt="Project1" width={150} height={150}></img>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md wx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animated-pulse">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                        Project1
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className="mt-2 text-slate-500">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="md:shrink-0 p-5">
                                    <img src={Project1Img} alt="Project1" width={150} height={150}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='grid grid-cols-2 gap-4 p-5'>

                    </div>
                </div>
            </div>
        </>
    )
}