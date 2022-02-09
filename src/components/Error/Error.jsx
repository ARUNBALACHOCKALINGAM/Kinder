import React from 'react';
import Button from '../UI/Button/Button';


const Error = () => {
    return (
        <>
        <div className='w-5/6 rounded-lg mx-auto mt-52 justify-center shadow-lg shadow-sec/70 items-center bg-purple pt-10 pb-10 flex flex-row desktop:w-1/2 desktop:pt-16 desktop:pb-16'>
           <h1 className='text-6xl text-white desktop:text-9xl'>404|</h1>
           <div className='flex flex-col justify-center text-sm text-white text-left overflow-hidden desktop:text-2xl'>
               <h1>Page not found</h1>
               <p className='whitespace-nowrap'>Check the URL</p>
           </div>
        </div>
        <div className='mt-10'>
            <Button className="w-24 mr-2" label="Go back home"/>
            <Button className="w-24 mr-2" label="Contact us"/>
        </div>
        </>
    );
};

export default Error;