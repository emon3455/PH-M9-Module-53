import React from 'react';

const SinglePackage = ({pkg}) => {

    return (

        <div className='bg-white shadow-2xl p-8 rounded-lg w-full'>

            <h2 className='text-4xl font-bold text-center text-violet-500'>
                <span>{pkg.price}</span>
                <span>/month</span>
            </h2>

            <h4 className='text-2xl font-bold text-center text-orange-500'>
                {pkg.name}
            </h4>

            <p className='text-xl font-semibold'>Feachers:</p>
            {
                pkg.features.map((feacher , idx) => <p key={idx}>
                    <i className="fa-solid fa-circle-check text-violet-400"></i> {feacher}
                </p>)
            }

            <button className='bg-violet-500 text-white w-full rounded-md mt-2 p-1 hover:bg-violet-700'>Buy Now</button>
            
        </div>

    );
};

export default SinglePackage;