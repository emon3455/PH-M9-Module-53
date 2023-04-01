import React, { useEffect, useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';

const PriceList = () => {

    const [packages , setPackages] = useState([])

    useEffect(()=>{
        fetch("price.json")
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])

    return (
        <div className='container mx-auto my-4'>

            <h2 className='text-4xl text-center bg-violet-600 text-white font-bold p-2'>Get The Most Exciting Packages</h2>
            <div className="bg-slate-100 p-4 mt-2 grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">

                {
                    packages.map(pkg => <SinglePackage
                        
                        key = {pkg.id}
                        pkg={pkg}

                        >

                        </SinglePackage>)
                }

            </div>    
        </div>
    );
};

export default PriceList;