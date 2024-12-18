import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, Select, SelectItem, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import '../gradients.css'
import '../hero.css'
import framesInfo from '@/data/framesData'
import lensInfo from '@/data/lensData'
import templeInfo from '@/data/templeData'

import PartsGrid from '../library/partsGrid'
import { Jura } from 'next/font/google'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
const jura = Jura({
    weight: '400',
    subsets: ['latin'],
})
const juraBold = Jura({
    weight: '700',
    subsets: ['latin'],
})

export default function Pricing({
    language = "en"
}: {
    language?: String
}) {
    const [isScrollAtTop, setIsScrollAtTop] = useState(true);
    const [selectedPage, setSelectedPage] = useState('#Home')
    const [selectedPart, setSelectedPart] = useState("Frames")
    const [navBarOpen, setNavbarOpen] = useState(false)
    const [currentData, setCurrentData] = useState(framesInfo)
    const [curFrame, setCurFrame] = useState("Full-Rimmed")
    const [curLens, setCurLens] = useState("Multifocal")
    const [curTemple, setCurTemple] = useState("Skull")

    const [cart, setCard] = useState([
        {
            label: "Frame",
            type: "Full-Rimmed"
        },
        {
            label: "Lens",
            type: "MultiFocal"
        },
        {
            label: "Lens",
            type: "Skull"
        },
    ])

    const parts = [
        { label: 'Frames', key: 1 },
        { label: 'Lens', key: 2 },
        { label: 'Temple', key: 3 },
    ]


    function goToPage(page: string): void {
        setSelectedPage(page)
        document.querySelector(page)?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        if (selectedPart === "Frames") setCurrentData(framesInfo)
        else if (selectedPart === "Lens") setCurrentData(lensInfo)
        else if (selectedPart === "Temple") setCurrentData(templeInfo)

    }, [selectedPart]);

    return (
        <div id='Pricing' className='flex flex-col justify-between items-center z-50 h-auto left-0 top-0 w-full'>
            {/* <Card className='grid md:grid-cols-3 grid-cols-1 justify-center items-center w-full max-h-[400px] h-full bg-white'>
                <div className={`flex flex-col justify-center space-y-4 text-center text-5xl bg-gray-50 h-full items-center ${jura.className}`}>
                    <div className='z-20'>Different</div>
                    <div>Frame</div>
                    <div className='z-20 font-bold text-gradient-purple'>Better Game</div>
                </div>
                <div className='flex flex-col justify-between py-2 h-full items-center'>
                    <div className='text-4xl font-bold text-center'>
                        <div className={`${jura.className}`}>Gucci x Lens</div>
                        <div className='text-xl text-gray-500 font-semibold'>Innovative Style</div>
                        <div className='text-lg text-gray-400 font-normal'>299$</div>
                    </div>
                    <div>
                        <Image className='h-48' src='gucciex_.jpg' />
                    </div>
                </div>
                <div className='flex justify-center h-full items-center bg-purple-gradient opacity-20  text-black'>
                    coming xx.xx.xxxx
                </div>
            </Card> */}
            <div className={`text-5xl font-bold ${jura.className} mt-10 mb-4 border-b-1 border-black/50 pb-2 `}>Pricing</div>

            <div className='grid md:grid-cols-3 grid-cols-1 mt-3 px-6 justify-center items-center w-full md:max-h-[800px] h-full bg-white'>
                <Card className='flex flex-col justify-center py-2 items-center mx-5 h-[550px]'>
                    <div className='text-4xl font-bold text-center'>
                        <div className={`${jura.className} `}>Lens</div>
                        <div className='text-xl text-gray-500 font-semibold text-gradient-orange ' >Active Style</div>
                        <div className='text-lg text-gray-400 font-normal '>150$</div>
                    </div>
                    <div>
                        <Image className='h-48  ' src='gucciex_.jpg' />
                    </div>
                    <Button className={`h-10 bg-black font-bold mt-6 text-white hover:bg-white hover:text-black`} variant='faded' >Purchase Now</Button>

                </Card>
                <Card className='flex flex-col justify-center py-2 h-full items-center mx-5'>
                    <div className='text-4xl font-bold text-center'>
                        <div className={`${jura.className}`}>Lens</div>
                        <div className='text-xl text-gray-500 font-semibold text-gradient-purple'>Dynamic Style</div>
                        <div className='text-lg text-gray-400 font-normal'>120$</div>
                    </div>
                    <div>
                        <Image className='h-48 ' src='gucciex_.jpg' />
                    </div>
                    <Button className={`h-10 bg-black font-bold mt-6 text-white hover:bg-white hover:text-black`} variant='faded' >Purchase Now</Button>

                </Card>
                <Card className='flex flex-col justify-center py-2 h-full items-center mx-5'>
                    <div className='text-4xl font-bold text-center'>
                        <div className={`${jura.className}`}>Lens</div>
                        <div className='text-xl text-gray-500 font-semibold text-gradient-grey'>Titanium Style</div>
                        <div className='text-lg text-gray-400 font-normal'>180$</div>
                    </div>
                    <div>
                        <Image className='h-48' src='gucciex_.jpg' />
                    </div>
                    <Button className={`h-10 bg-black font-bold mt-6 text-white hover:bg-white hover:text-black`} variant='faded' >Purchase Now</Button>

                </Card>
            </div>
            <div className='md:flex flex-col items-center w-full h-full justify-center py-16 pt-32 hidden '>
                <div className={`text-5xl font-bold ${jura.className} pb-6`}>Parts</div>
                <div className='w-full h-full flex justify-between px-16'>

                    <Card className='w-3/12 bg-gray-100 flex flex-col justify-between p-4 px-8 h-[425px]'>
                        <div className='flex flex-col justify-center w-full items-center text-xl font-bold'>
                            Shopping Cart
                            <div className='w-full h-10 flex flex-row justify-between items-center text-medium font-semibold'>
                                <div className='h-full w-1/3 flex items-center justify-center'>

                                </div>
                                <div className='h-full w-1/3 flex items-center justify-center'>
                                    Design
                                </div>
                                <div className='h-full w-1/3  flex items-center justify-center '>
                                    Type

                                </div>
                            </div>
                        </div>
                        <Card className='w-full h-1/6 flex flex-row justify-between items-center'>
                            <div className='h-full w-1/3 flex items-center justify-center'>
                                <img
                                    src={'/frametest1.png'}
                                    alt='s'
                                    className='object-cover w-full h-full   '
                                />
                            </div>
                            <div className='h-full w-1/3 flex items-center justify-center'>
                                {curFrame}
                            </div>
                            <div className='h-full w-1/3 flex-col items-center justify-center p-2 pr-4'>
                                <div className='w-full flex justify-end'>
                                    Frames
                                </div>
                                <div className='w-full flex justify-end'>
                                    $120
                                </div>
                            </div>
                        </Card>
                        <Card className='w-full h-1/6 flex flex-row justify-between items-center'>
                            <div className='h-full w-1/3 flex items-center justify-center'>
                                <img
                                    src={'/lenstest1.png'}
                                    alt='s'
                                    className='object-cover w-full h-full   '
                                />
                            </div>
                            <div className='h-full w-1/3 flex items-center justify-center'>
                                {curLens}
                            </div>
                            <div className='h-full w-1/3 flex-col items-center justify-center p-2 pr-4'>
                                <div className='w-full flex justify-end'>
                                    Lens
                                </div>
                                <div className='w-full flex justify-end'>
                                    $70
                                </div>
                            </div>
                        </Card>
                        <Card className='w-full h-1/6 flex flex-row justify-between items-center'>
                            <div className='h-full w-1/3 flex items-center justify-center p-4'>
                                <img
                                    src={'/templetest1.png'}
                                    alt='s'
                                    className='object-cover w-full h-full   '
                                />
                            </div>
                            <div className='h-full w-1/3 flex items-center justify-center'>
                                {curTemple}
                            </div>
                            <div className='h-full w-1/3 flex-col items-center justify-center p-2 pr-4'>
                                <div className='w-full flex justify-end'>
                                    Temple
                                </div>
                                <div className='w-full flex justify-end'>
                                    $50
                                </div>
                            </div>
                        </Card>
                        <div className='flex w-full justify-between border-t-1 pt-2'>
                            <div className=''>
                                <Button className='bg-black text-white'>Buy now</Button>
                            </div>

                            <div>
                                Total <br /> $240
                            </div>
                        </div>
                    </Card>
                    <div className='w-9/12 flex flex-col justify-center'>
                        <Select
                            items={parts}
                            label="Part Type"
                            placeholder="Frames"
                            className="max-w-xs ml-20"

                        >
                            {(part) => <SelectItem key={part.key} onClick={() => {
                                setSelectedPart(part.label)
                            }}>{part.label}</SelectItem>}
                        </Select>
                        <PartsGrid partsInfo={currentData} setCurFrame={setCurFrame} setCurLens={setCurLens} setCurTemple={setCurTemple} selectedPart={selectedPart} curFrame={curFrame} curLens={curLens} curTemple={curTemple} />
                    </div>
                </div>
            </div>
        </div>
    )
}
