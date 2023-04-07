import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const PhoneBar = () => {

    const [phones , setPhones] = useState([])
    useEffect(()=>{

        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data=> {
            const loadData = data.data.data;
            const PhoneData = loadData.map(phn =>{
                const parts = phn.slug.split('-');
                const price = parseInt(parts[1]);
                
                const phoneInfo ={
                    name : phn.phone_name,
                    price: price,
                    brand: phn.brand
                }
                return phoneInfo;
            })
            setPhones(PhoneData);
        })

    },[])

    return (
        <div style={{maxWidth: '1250px', height: "400px", width: '100%'}}>

            <ResponsiveContainer width='100%' height='100%'>
                <BarChart
                data={phones}
                >
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name"/>
                    <YAxis/>

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
};

export default PhoneBar;