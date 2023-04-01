import React, { useState } from 'react';

const Navbar = () => {

    const [open , setOpen] = useState(false);

    return (
        <>

           
            <nav className='container mx-auto bg-slate-900 text-white p-4 flex justify-between'>

                <div className='flex gap-1 items-center md:w-1/3'>
                    
                    <div onClick={()=> setOpen(!open)} className="md:hidden">
                
                        <span>
                            {
                                open===true ? 
                                <i className="fa-solid fa-xmark fa-xl"></i>
                                : 
                                <i className="fa-solid fa-bars fa-xl"></i>
                            }
                        </span>

                    </div> 

                    <h2 className='text-2xl text-orange-600 font-bold'>Shop Now BD</h2>
                </div>


                <ul className={`bg-slate-900 w-full md:w-2/3 p-1 text-white md:flex md:justify-around text-xl
                 absolute md:static left-0 ${open ? 'top-14' : '-top-36'}`}>

                    <li className='hover:text-orange-400 duration-300'> 
                        <a href="/home">Home</a>
                    </li>

                    <li className='hover:text-orange-400 duration-300'>
                        <a href="/about">About</a>
                    </li>

                    <li className='hover:text-orange-400 duration-300'>
                        <a href="/product">Product</a>
                    </li>

                    <li className='hover:text-orange-400 duration-300'>
                        <a href="/service">Service</a>
                    </li>

                    <li className='hover:text-orange-400 duration-300'>
                        <a href="contact">Contact</a>
                    </li>

                </ul>

            </nav>
            
        </>
    );
};

export default Navbar;