import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const result =[

        { id: 1, name: 'user 1', package1: 78, package2: 21, package3: 92 },
        { id: 2, name: 'user 2', package1: 32, package2: 59, package3: 42 },
        { id: 3, name: 'user 3', package1: 95, package2: 73, package3: 80 },
        { id: 4, name: 'user 4', package1: 43, package2: 91, package3: 67 },
        { id: 5, name: 'user 5', package1: 61, package2: 39, package3: 98 },
        { id: 6, name: 'user 6', package1: 87, package2: 80, package3: 3 },
        { id: 7, name: 'user 7', package1: 12, package2: 62, package3: 61 },
        { id: 8, name: 'user 8', package1: 59, package2: 84, package3: 27 },
        { id: 9, name: 'user 9', package1: 71, package2: 94, package3: 56 },
        { id: 10, name: 'user 10', package1: 29, package2: 7, package3: 60 },
        { id: 11, name: 'user 11', package1: 96, package2: 30, package3: 47 },
        { id: 12, name: 'user 12', package1: 14, package2: 86, package3: 29 }
            
]

    return (

        <div className='container mx-auto'>

            <h2 className='text-center text-4xl mt-2 font-semibold'>Client Reviews of our product:</h2>

            <div className="w-full">

                    <LineChart
                        width={1200}
                        height={300}
                        data={result}
                        >
                        <CartesianGrid strokeDasharray="3 12" />
                        <XAxis dataKey="name" />
                        <Line type="monotone" dataKey="package1" stroke="#8884d8" activeDot={{ 1: 12 }} />
                        <Line type="monotone" dataKey="package2" stroke="#45ca9d" />
                        <Line type="monotone" dataKey="package3" stroke="#6ca9d" />
                    </LineChart>

            </div>    

            
            

            
            
        </div>
    );
};

export default Dashboard;