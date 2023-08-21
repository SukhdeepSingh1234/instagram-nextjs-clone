"use client";
import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';


function Stories() {
    const [suggestions,setSuggestions]=useState([])
    
    useEffect(()=>{
        
        const fakeDataArray = [];
        for (let i = 0; i < 20; i++) {
            const fakeUsername = faker.internet.userName();
            const fakeAvatar = faker.internet.avatar();

            const fakeData = {
                username: fakeUsername,
                avatar: fakeAvatar,
            };

            fakeDataArray.push(fakeData);
            }
            setSuggestions(fakeDataArray);
        },[])


 

    return ( 
        <div className='flex bg-black space-x-2 p-6 mt-8 overflow-x-scroll rounded-sm ' >
            {
            suggestions.map((data, index) => (
                <Story key={index} img={data.avatar} username={data.username} />
        ))
        }
            
        </div>
    )
}

export default Stories
