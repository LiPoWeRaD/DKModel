import { Link } from "react-router-dom"
import footer from '../../assets/baner/119.webp';

const Footer = () => {
    return (
        <>
            <footer className='relative flex flex-col my-8 justify-center items-center'>
                {/* <img id='poster' className='relative object-cover' src={footer} alt="" /> */}
                <div className="flex gap-y-4 flex-col justify-center items-center text-center">
                    <ul className='flex gap-x-2 lg:gap-x-24 text-xl'>
                        <li className="hover:text-gray-500 duration-300 ease-in cursor-pointer "><Link to="/interview">Interviews</Link></li>
                        <li className="hover:text-gray-500 duration-300 ease-in cursor-pointer "><Link to="/contacts">Contacts</Link></li>
                        <li className="hover:text-gray-500 duration-300 ease-in cursor-pointer "><Link to="/about">About</Link></li>
                    </ul>
                    <p className="text-sm text-gray-800">Copyright © 2006 - 2025 DK FILMS Inc. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer