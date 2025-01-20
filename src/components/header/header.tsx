import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="container mb-4 mx-auto py-4 flex justify-center items-center">
            <div className='flex flex-col lg:flex-row lg:w-3/4 justify-between items-center'>
                <Link className='text-2xl font-bold hover:text-gray-500 duration-300 ease-in cursor-pointer' to="/">DK FILMS MAGAZINE</Link>
                <ul className='flex gap-x-2 lg:gap-x-24 text-2xl'>
                    <li className="hover:text-gray-500 duration-300 ease-in cursor-pointer "><Link to="/interview">Interviews</Link></li>
                    <li className="hover:text-gray-500 duration-300 ease-in cursor-pointer "><Link to="/contacts">Contacts</Link></li>
                    <li className="hover:text-gray-500 duration-300 ease-in cursor-pointer "><Link to="/about">About</Link></li>
                </ul>
            </div>
            
        </header>
    )
}

export default Header