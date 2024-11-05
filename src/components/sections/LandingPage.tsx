import { delay } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Jura } from 'next/font/google'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { Button, Card } from '@nextui-org/react';

import { FaCalendar } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { IoIosPricetag } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})
const juraBold = Jura({
    weight: '700',
    subsets: ['latin'],

})
export default function LandingPage({
    language = "en"
}: {
    language?: String
}) {
   

    function goToPage(page: string): void {
        setSelectedPage(page);
        document.querySelector(page)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div id='Home' className='flex md:flex-row  flex-col-reverse justify-between items-center  bg-gray-50 gridbg left-0 top-0 w-full'>
             <div className='lg:w-6/12 w-full h-[100dvh] bg-white flex flex-col justify-center md:pt-64  pt-32 pb-32 items-center'>
                <div className={`${jura.className} text-2xl`}>Prism Glasses</div>
                <div className=' w-full flex flex-col items-center space-y-4'>
                    <div className='flex justify-between w-3/6'>
                        <div>
                            <div className={`text-sm text-gray-400`}>Active Users</div>
                            <div className={`font-bold text-xl text-purple-400`}>
                                5000+
                            </div>
                        </div>
                        <div>
                            <div className={`text-sm text-gray-400`}>Active Users</div>
                            <div className={`font-bold text-xl text-blue-400`}>
                                5000+
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[500px] flex justify-center text-center w-full text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>

                    <div className='flex space-x-6'>
                            <Button className='text-white bg-black'>Buy Now</Button>
                            <Button variant='bordered'>View Prices</Button>

                    </div>

                </div>

            </div>
            <div className='lg:w-6/12 w-[50vw] flex flex-col  items-center text-start justify-center md:mt-16 mt-32 '>
            
                <div className='md:text-6xl text-5xl flex flex-col max-w-[400px] md:max-w-full text-center md:text-center space-y-3'>

                    <div className={`md:text-start text-center text-xl flex md:justify-center justify-center ${juraBold.className}`}>INVEST IN YOUR FUTURE</div>
                    <div className='font-bold text-blue-400'>Saving &</div>
                    <div className='font-bold'>investing are</div>
                    <div className='font-bold flex justify-center space-x-4 '>
                        <div>
                            made
                        </div>
                        <div className='text-violet-400'>simple</div>
                    </div>
                    <div className='text-lg md:ml-8 max-w-[500px] w-full pb-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </div>
                    <Card className='bg-blue-300/30 hidden md:flex w-full   justify-center space-y-2 p-4'>

                        <div className='flex justify-center w-full ml-4 space-x-2 '>
                            <Button className='flex flex-col bg-white  items-center px-4  h-16 w-64 cursor-pointer hover:bg-gray-100' onClick={() => {
                                document.getElementById('Service')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <div className='flex flex-row items-center px-4 justify-between h-16 w-64'>

                                    <div className={`$ flex font-bold items-center justify-between space-x-2`}> <FaCalendar></FaCalendar> <p>Our Services</p></div>
                                    <div><FaArrowRightLong /></div>
                                </div>
                                <div className={`flex justify-start items-start text-start w-full ml-12 ${jura.className}`}>What We Do</div>
                            </Button>
                            <Button className='flex flex-col bg-white items-center px-4  h-16 w-64 cursor-pointer hover:bg-gray-100' onClick={() => {
                                document.getElementById('Pests')?.scrollIntoView({ behavior: 'smooth' })
                            }}>
                                <div className='flex flex-row items-center px-4 justify-between h-16 w-64'> 

                                    <div className={`$ flex font-bold items-center justify-between space-x-2`}> <IoLibrary></IoLibrary> <p>Goal</p></div>
                                    <div><FaArrowRightLong /></div>
                                </div>
                                <div className={`flex justify-start items-start text-start w-full ml-12 ${jura.className}`}>Useful Information</div>
                            </Button>
                        </div>
                        <div className='flex space-x-2'>
                            <Button className='flex flex-col bg-white items-center px-4  h-16 w-64 cursor-pointer hover:bg-gray-100' onClick={() => {
                                document.getElementById('Pricing')?.scrollIntoView({ behavior: 'smooth' })
                            }}>
                                <div className='flex flex-row items-center px-4 justify-between h-16 w-64'>

                                    <div className={`$ flex font-bold items-center justify-between space-x-2`}> <IoIosPricetag></IoIosPricetag> <p>Pricing</p></div>
                                    <div><FaArrowRightLong /></div>
                                </div>
                                <div className={`flex justify-start items-start text-start w-full ml-12 ${jura.className}`}>Price Comparison</div>
                            </Button>
                            <Button className='flex bg-white flex-col items-center px-4  h-16 w-64 cursor-pointer hover:bg-gray-100' onClick={() => {
                                document.getElementById('Qna')?.scrollIntoView({ behavior: 'smooth' })
                            }}>
                                <div className='flex flex-row items-center px-4 justify-between h-16 w-64'>

                                    <div className={`$ flex font-bold items-center justify-between space-x-2`}> <FaQuestionCircle></FaQuestionCircle> <p>Q&A</p></div>
                                    <div><FaArrowRightLong /></div>
                                </div>
                                <div className={`flex justify-start items-start text-start w-full ml-12 ${jura.className}`}>Often Asked Questions</div>
                            </Button>
                        </div>
                    </Card>

                </div>

            </div>
           
        </div>
    );
}
