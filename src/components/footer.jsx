import {BsFillHouseDoorFill} from 'react-icons/bs';
import {BsEnvelopeFill} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';


export default function Footer() {
    return (
        <footer
        className="bg-ink text-center text-verdigris">
            <div className="flex justify-between items-center  max-w-3xl mx-auto w-full py-6 px-6">
                <span>Copyright &copy; 2025 Joann Feng</span>
                <div className="flex items-center space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="text-2xl">
                    <BsLinkedin />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                    className="text-2xl">
                    <BsGithub />
                    </a>
                </div>
            </div>
        </footer>
    )
}