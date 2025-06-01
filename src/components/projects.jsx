import Project1Img from '../assets/placeholder.png'
import Project2Img from '../assets/placeholder.png'
import Project3Img from '../assets/placeholder.png'
import Project4Img from '../assets/placeholder.png'

export default function Projects() {
    return (
        <>
            <div className="bg-lion m-20 max-w-full rounded-full">
                <div className="grid justify-items-center m-10">
                    <h1 className="text-3xl text-ink mt-10 font-semibold">Projects</h1>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-2 p-2">
                        <div className="w-full max-w-sm mx-auto bg-bone rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animated-pulse">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="text-ink uppercase tracking-wide text-sm to-bone font-semibold">
                                        Project1
                                    </div>
                                    <a href="#" className="text-verdigris">Subheading</a>
                                    <p className="mt-2 text-pine">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="md:shrink-0 p-5">
                                    <img src={Project2Img} alt="Project2" width={150} height={150}></img>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto bg-bone rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animated-pulse">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="text-ink uppercase tracking-wide text-sm to-bone font-semibold">
                                        Project2
                                    </div>
                                    <a href="#" className="text-verdigris">Subheading</a>
                                    <p className="mt-2 text-pine">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="md:shrink-0 p-5">
                                    <img src={Project3Img} alt="Project3" width={150} height={150}></img>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto bg-bone rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animated-pulse">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="text-ink uppercase tracking-wide text-sm to-bone font-semibold">
                                        Project3
                                    </div>
                                    <a href="#" className="text-verdigris">Subheading</a>
                                    <p className="mt-2 text-pine">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="md:shrink-0 p-5">
                                    <img src={Project4Img} alt="Project4" width={150} height={150}></img>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto bg-bone rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animated-pulse">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="text-ink uppercase tracking-wide text-sm to-bone font-semibold">
                                        Project4
                                    </div>
                                    <a href="#" className="text-verdigris">Subheading</a>
                                    <p className="mt-2 text-pine">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="md:shrink-0 p-5">
                                    <img src={Project1Img} alt="Project1" width={150} height={150}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <hr className="my-4 border-t border-green-200 w-1/3" /> */}
                    <div className='grid grid-cols-2 gap-2 p-3'>

                    </div>
                </div>
            </div>
        </>
    )
}