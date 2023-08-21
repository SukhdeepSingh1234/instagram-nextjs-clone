import React from 'react'
import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
function Suggestions() {
    const [suggestions,setSuggestions]=useState([])
    
    useEffect(()=>{
        
        const fakeDataArray = [];
        for (let i = 0; i < 5; i++) {
            const fakeUsername = faker.internet.userName();
            const fakeAvatar = faker.internet.avatar();

            const fakeData = {
                username: fakeUsername,
                avatar: fakeAvatar,
            };

            fakeDataArray.push(fakeData);
            }
            setSuggestions(fakeDataArray);
            console.log(suggestions);

        },[])
  return (
    <div className='mt-4 ml-10' >
      <div className='flex justify-between text-sm mb-5 ' >
        <h3 className='text-sm font-bold text-gray-400' >Suggestions for you</h3>
        <button className='text-gray-400  font-medium' >See All</button>
      </div>
        {
            suggestions.map((data, index) => (
                <div key={index} className='flex justify-between items-center mt-3' >
                    <img className='rounded-full h-10 w-10 border p-[2px] '  src={data.avatar} alt=""/>
                    <div className='flex-1 ml-4' >
                        <h2 className='text-sm font-semibold' >{data.username}</h2>
                    </div>
                    <button className='text-blue-400 text-xs font-bold ' >Follow</button>
                </div>
        ))
        }
    </div>
  )
}

export default Suggestions
