import Navbar from "./navbar"
import Hero from "./hero"
import Projects from "./projects"
import Footer from "./footer"

const main = () => {
    return (
        <div className="bg-indigo-600">
            <Navbar/>
            <Hero/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default main
