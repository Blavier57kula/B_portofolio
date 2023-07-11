import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav className=" sticky  w-full left-0 top-0 z-10 bg-[#0f1630]">
            <div className=" w-full shadow-md h-19 py-2 flex justify-between items-center">
                <div className="mx-7">
                    <h3 className="text-4xl text-cyan-600 cursor-pointer uppercase font-bold">Bk</h3>
                </div>

                <div className="mr-7">
                    <ul className='gap-4 hidden md:flex items-center'>
                       <Link href="#home" className='capitalize text-lg font-bold hover:text-cyan-600 transition'>
                            <li >Home</li>
                        </Link>
                        <Link href="#about" className='capitalize text-lg font-semibold hover:text-cyan-600 transition'>
                            <li >About</li>
                        </Link> 
                        <Link href="#competence" className='capitalize text-lg font-semibold hover:text-cyan-600 transition'>
                            <li >competence</li>
                        </Link>  
                        <Link href="#projet" className='capitalize text-lg font-semibold hover:text-cyan-600 transition'>
                            <li >projet</li>
                        </Link> 
                        <Link href="#contact" className='capitalize text-lg font-semibold hover:text-cyan-600 transition'>
                            <li >contact</li>
                        </Link> 
                    </ul>
                    <button className='block md:hidden py-3 px-4 mx-2 group rounded hover:bg-cyan-200 focus:outline-none'>
                        <div className='w-5 h-1 bg-cyan-800 mb-1'></div>
                        <div className='w-5 h-1 bg-cyan-800 mb-1'></div>
                        <div className='w-5 h-1 bg-cyan-800 mb-1'></div>
                        <div className='w-8/12 text-cyan-600 absolute top-0 h-screen right-full bg-white border opacity-0
                        group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
                            <ul className='flex flex-col items-center w-full text-base cursor-pointer pt-10'>
                            <Link href="#home" className='w-full py-2 px-6 hover:bg-gray-300 capitalize text-lg font-semibold hover:text-cyan-800 transition'>
                                <li >Accueil</li>
                            </Link>
                            <Link href="#about" className='w-full py-2 px-6 hover:bg-gray-300 capitalize text-lg font-semibold hover:text-cyan-800 transition'>
                                <li >Apropos</li>
                            </Link> 
                            <Link href="#competence" className='w-full py-2 px-6 hover:bg-gray-300 capitalize text-lg font-semibold hover:text-cyan-800 transition'>
                                <li >compétence</li>
                            </Link>  
                            <Link href="#projet" className='w-full py-2 px-6 hover:bg-gray-300 capitalize text-lg font-semibold hover:text-cyan-800 transition'>
                                <li >projet</li>
                            </Link> 
                            <Link href="#contact" className='w-full py-2 px-6 hover:bg-gray-300 capitalize text-lg font-semibold hover:text-cyan-800 transition'>
                                <li >contact</li>
                            </Link> 
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        
        </nav>
     );
}
 
export default Navbar;