import { useState, useEffect, useRef } from 'react';
import {Context} from "../Context"
import { useContext } from "react"
import Modal from './Modal';
import Tailend from './Tailend';
import usePageTransition from './usePageTrans';
import LinkStrip from './LinkStrip';
import Nav from './Nav';
import Logo from '../Assets/Logo';

import comm from '../Assets/comm.jpg';
import bakery from '../Assets/bakery-unsplash.jpg';

const Retail = () => {
    const {currentPage, setCurrentPage, isModal, setIsModal, isNav, setIsNav} = useContext(Context)

    const hoverRef = useRef(null);
    const [visible, setVisible] = useState(false)
    
    const foods = [
        {type: 'Khao Man Gai', vendor: 'Betong', img: comm}, 
        {type: 'Coffee, Pastries & Smoothies', vendor:'Chinatown Del', img: food}, 
        {type: 'Artisanal Chocolates', vendor: 'Daniel Corpuz Chocolatier', img: retail},
        {type: 'Napoli Stylee Pizza', vendor: 'Enzo Bruni La Pizza Gourmet', img: food},
        {type: 'Chinese Classics', vendor: 'Joe\'s Rice and Noodles', img: comm},
        {type: 'Cantonese Steamed Rice Rolls', vendor: 'Joe\'s Steam Rice Roll', img: retail},
        {type: 'Delicious Filipino Classics', vendor: 'Kabisera', img: food},
        {type: 'Bingsoo Sundaes & Bubble Tea', vendor: 'Lazy Sundaes', img: comm},
        {type: 'Sushi, Handrolls & Chirashi', vendor: 'Mastunori', img: retail},
        {type: 'Filipino Inspired Taqueria', vendor: 'Mucho Sarap', img: food}
    ]
    const handleShow = (img) => {
        setVisible(true)
    }
    const [width, setWidth] = useState(0)
    useEffect(() => {
        const handleResize = () => {
            setWidth(hoverRef.current.offsetWidth)
        }
        handleResize();
        window.addEventListener('resize', handleResize)
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    const mountedStyle = { 
        position: 'absolute',
        top: Math.floor(Math.random() * (window.innerHeight - 450)),
        left: Math.floor(Math.random()* (width-340)),
        height: '450px',
        animation: "inAnimation 500ms ease-in" 
    }
    const unmountedStyle = {
        position: 'absolute',
        top: Math.floor(Math.random() * (window.innerHeight - 450)),
        left: Math.floor(Math.random()* (width-340)),
        height: '450px',
        animation: "outAnimation 1200ms ease-out",
    }

    const commRef = useRef(null)
    const homeRef = useRef(null)
    const foodRef = useRef(null)
    const retailRef = useRef(null)

    const pgData = [
        {name: 'home', ref: homeRef, color: 'bg-white'},
        {name: 'food', ref: foodRef, symb: '餐饮',  color: 'bg-blue-400'}, 
        {name: 'community', ref: commRef, symb: '文化', color: 'bg-yellow-500'}
    ]

    const { handlePage, isExpanded } = usePageTransition('retail', pgData, currentPage, setCurrentPage, retailRef);

    return (
        <div className="home bg-red-500 h-full flex">
            <LinkStrip linkObj={pgData[0]} handlePage={handlePage} currentPage={currentPage} />
            <LinkStrip linkObj={pgData[1]} handlePage={handlePage} currentPage={currentPage} />

            <div ref={retailRef}  className={` h-full overflow-y-scroll ${currentPage === null ? 'w-[100vw] px-16' : 'w-[60px]'}  ${isExpanded ? 'px-16' : ''} sm:px-7 pt-40 sm:pt-24`}>
                <div className='flex w-full justify-between sm:justify-end mb-20'>
                    <div className='sm:hidden flex flex-col opacity-50 tracking-widest items-center'>
                        <p className='[writing-mode:vertical-lr] font-semibold'>Retail</p>
                        <svg className='rotate-[-90deg] w-5 h-5 mt-5' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512"}} xmlSpace="preserve">
                            <g transform="matrix(1,0,0,1,0,0)"><path d="m0 256 320 160.6L221.536 256 320 95.4z" fill="currentColor" data-original="#88d8c9" ></path><path d="m0 256 320 160.6L221.536 256H126.76z" fill="currentColor" data-original="#32bea6" ></path><path d="M432 240h80v32h-80zM286.592 240h80v32h-80z" fill="currentColor" data-original="#415e72" ></path></g>
                        </svg>
                    </div>

                    <p>Retail Market Hours: <br/> Mon - Sun: 11:00AM - 7:00PM</p>
                </div>

                <div className='flex xl:flex-col justify-between relative mb-28'>
                    <h1 className='text-[200px] lg:text-[160px] sm:text-6xl leading-[192px] lg:leading-[160px]'>The <br  className='sm:hidden'/> Retail <br  className='sm:hidden'/> Market</h1>
                    <p className='absolute right-0 text-6xl sm:hidden'>購物</p>
                    <div className=' w-full -xl:w-[300px] sm:h-[450px] h-[600px] -xl:h-[450px] mt-16 -xl:mt-24 -xl:ml-2'>
                        <img className='h-full w-full object-cover' src={bakery} alt="" />
                    </div>
                    
                </div>

                <div ref={hoverRef} className='grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-16 sm:gap-8 relative'>
                    {foods.map(food => {
                        return (
                            <div
                                className='cursor-pointer z-10' key={food.vendor} 
                                onMouseEnter={() => handleShow(food.img)}
                                onMouseLeave={() => setVisible(false)}
                            >
                                <p className=''>{food.item}</p>
                                <p className='text-3xl mt-5 sm:mt-2'>{food.vendor}</p>
                            </div>
                        )}
                    )}
                    
                    {visible && <img className='sm:hidden transition ease-in-out opacity-80' src={comm} style={visible ? mountedStyle : unmountedStyle} alt=""/>}
                </div>

                <div className="waves-des flex sm:flex-col justify-between items-center -lg:px-[5%] sm:py-14 py-28 my-28 sm:my-20 xs:my-14">
                    <svg className='bounce-one-des w-[180px] sm:w-24 xs:w-16' viewBox="0 0 140 176" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="1440_retail_detail" transform="translate(-309.000000, -3029.000000)" fill="#000000">
                                <g id="Group-9" transform="translate(121.000000, 1821.000000)">
                                    <g id="noun_Rose_1472739" transform="translate(265.471600, 1285.195327) rotate(-330.000000) translate(-265.471600, -1285.195327) translate(195.645011, 1205.195327)">
                                        <g id="Group">
                                            <path d="M56.416185,19.4219653 C50.867052,24.9710983 65.6647399,28.6705202 67.5144509,22.1965318 C68.4393064,18.4971098 59.1907514,17.5722543 56.416185,19.4219653 Z" id="Path"></path>
                                            <path d="M31.4450867,36.0693642 C37.9190751,43.4682081 40.6936416,47.1676301 49.9421965,44.3930636 C35.1445087,35.1445087 36.9942197,22.1965318 46.2427746,16.6473988 C51.7919075,13.8728324 53.6416185,6.47398844 66.5895954,10.1734104 C63.8150289,-0.924855491 51.7919075,0.924855491 41.6184971,7.39884393 C39.7687861,9.24855491 20.3468208,15.7225434 31.4450867,36.0693642 Z" id="Path"></path>
                                            <path d="M73.0635838,30.5202312 C78.6127168,23.1213873 72.1387283,20.3468208 69.3641618,21.2716763 C64.7398844,35.1445087 49.017341,18.4971098 49.9421965,26.8208092 C54.566474,35.1445087 66.5895954,37.9190751 73.0635838,30.5202312 Z" id="Path"></path>
                                            <path d="M52.716763,12.9479769 C49.017341,14.7976879 48.0924855,22.1965318 53.6416185,21.2716763 C51.7919075,12.9479769 75.8381503,19.4219653 76.7630058,23.1213873 C77.6878613,24.0462428 77.6878613,24.9710983 77.6878613,25.8959538 C80.4624277,27.7456647 85.0867052,22.1965318 80.4624277,18.4971098 C73.0635838,10.1734104 57.3410405,8.32369942 52.716763,12.9479769 Z" id="Path"></path>
                                            <path d="M77.6878613,28.6705202 C63.8150289,46.2427746 45.3179191,29.5953757 49.017341,24.0462428 C49.9421965,20.3468208 48.0924855,19.4219653 49.017341,16.6473988 C40.6936416,22.1965318 39.7687861,27.7456647 42.5433526,33.2947977 C46.2427746,44.3930636 61.9653179,44.3930636 70.2890173,41.6184971 C77.6878613,39.7687861 85.0867052,31.4450867 77.6878613,28.6705202 Z" id="Path"></path>
                                            <path d="M49.017341,70.2890173 C50.867052,63.8150289 29.5953757,65.6647399 24.9710983,48.0924855 C12.0231214,62.8901734 43.4682081,78.6127168 49.017341,70.2890173 Z" id="Path"></path>
                                            <path d="M70.2890173,9.24855491 C76.7630058,10.1734104 88.7861272,17.5722543 82.3121387,24.9710983 C87.8612717,38.8439306 68.4393064,50.867052 52.716763,43.4682081 C47.1676301,49.017341 79.5375723,60.1156069 90.6358382,40.6936416 C102.65896,22.1965318 82.3121387,0 69.3641618,8.32369942 C68.4393064,9.24855491 69.3641618,9.24855491 70.2890173,9.24855491 Z" id="Path"></path>
                                            <path d="M24.0462428,43.4682081 C31.4450867,59.1907514 39.7687861,64.7398844 58.265896,63.8150289 C63.8150289,62.8901734 85.0867052,61.9653179 85.0867052,49.017341 C83.2369942,51.7919075 67.5144509,58.265896 50.867052,48.0924855 C36.9942197,49.9421965 28.6705202,38.8439306 27.7456647,30.5202312 C18.4971098,33.2947977 21.2716763,36.9942197 24.0462428,43.4682081 Z" id="Path"></path>
                                            <path d="M68.4393064,6.47398844 C90.6358382,-1.84971098 107.283237,32.3699422 87.8612717,47.1676301 C88.7861272,50.867052 115.606936,44.3930636 108.208092,23.1213873 C98.9595376,-5.54913295 68.4393064,-0.924855491 68.4393064,6.47398844 Z" id="Path"></path>
                                            <path d="M51.7919075,65.6647399 C48.0924855,65.6647399 51.7919075,72.1387283 62.8901734,73.9884393 C83.2369942,78.6127168 104.508671,61.9653179 103.583815,45.3179191 C98.9595376,49.017341 94.3352601,50.867052 88.7861272,50.867052 C86.0115607,59.1907514 77.6878613,62.8901734 70.2890173,64.7398844 C60.1156069,66.5895954 57.3410405,64.7398844 51.7919075,65.6647399 Z" id="Path"></path>
                                            <path d="M25.8959538,129.479769 C25.8959538,130.404624 25.8959538,130.404624 24.9710983,131.32948 C28.6705202,133.179191 38.8439306,130.404624 41.6184971,128.554913 C40.6936416,130.404624 41.6184971,131.32948 40.6936416,132.254335 C45.3179191,132.254335 53.6416185,126.705202 54.566474,125.780347 C55.4913295,126.705202 55.4913295,126.705202 55.4913295,127.630058 C57.3410405,126.705202 58.265896,125.780347 61.0404624,122.080925 C64.7398844,116.531792 67.5144509,106.358382 66.5895954,105.433526 C65.6647399,104.508671 64.7398844,105.433526 63.8150289,106.358382 C62.8901734,110.982659 61.0404624,116.531792 57.3410405,121.156069 C58.265896,118.381503 62.8901734,110.982659 61.9653179,106.358382 C60.1156069,106.358382 58.265896,108.208092 54.566474,109.132948 C51.7919075,115.606936 51.7919075,120.231214 45.3179191,125.780347 C49.017341,120.231214 51.7919075,117.456647 52.716763,110.057803 C48.0924855,110.057803 38.8439306,113.757225 36.9942197,118.381503 C36.9942197,118.381503 36.9942197,118.381503 36.0693642,118.381503 C34.2196532,120.231214 31.4450867,122.080925 29.5953757,124.855491 C34.2196532,119.306358 36.9942197,116.531792 36.9942197,114.682081 C36.0693642,113.757225 31.4450867,113.757225 24.0462428,114.682081 C22.1965318,117.456647 19.4219653,119.306358 16.6473988,121.156069 C18.4971098,119.306358 21.2716763,116.531792 21.2716763,114.682081 C17.5722543,115.606936 8.32369942,111.907514 5.54913295,112.83237 C8.32369942,110.982659 18.4971098,115.606936 21.2716763,112.83237 C18.4971098,111.907514 15.7225434,109.132948 12.0231214,107.283237 C15.7225434,109.132948 19.4219653,110.982659 22.1965318,112.83237 C24.0462428,113.757225 26.8208092,112.83237 29.5953757,112.83237 C26.8208092,108.208092 24.0462428,105.433526 21.2716763,104.508671 C30.5202312,106.358382 24.9710983,114.682081 38.8439306,111.907514 C40.6936416,111.907514 42.5433526,110.982659 43.4682081,110.057803 C42.5433526,105.433526 36.9942197,100.809249 31.4450867,98.9595376 C36.0693642,98.0346821 43.4682081,107.283237 46.2427746,110.057803 C50.867052,109.132948 55.4913295,108.208092 56.416185,106.358382 C52.716763,102.65896 46.2427746,99.8843931 41.6184971,98.0346821 C47.1676301,99.8843931 52.716763,101.734104 58.265896,105.433526 C60.1156069,103.583815 62.8901734,103.583815 64.7398844,102.65896 C61.9653179,97.1098266 53.6416185,94.3352601 49.017341,92.4855491 C49.017341,94.3352601 49.017341,94.3352601 49.017341,96.1849711 C45.3179191,92.4855491 36.9942197,91.5606936 32.3699422,91.5606936 C32.3699422,92.4855491 33.2947977,93.4104046 33.2947977,94.3352601 C29.5953757,93.4104046 26.8208092,94.3352601 23.1213873,95.2601156 C24.0462428,95.2601156 24.0462428,96.1849711 24.0462428,97.1098266 C21.2716763,96.1849711 18.4971098,98.0346821 13.8728324,99.8843931 C14.7976879,101.734104 14.7976879,101.734104 15.7225434,103.583815 C12.9479769,102.65896 7.39884393,103.583815 5.54913295,105.433526 C6.47398844,106.358382 5.54913295,107.283237 6.47398844,108.208092 C3.69942197,108.208092 2.77456647,109.132948 0,112.83237 C2.77456647,115.606936 5.54913295,117.456647 7.39884393,117.456647 C7.39884393,117.456647 5.54913295,118.381503 5.54913295,119.306358 C10.1734104,124.855491 14.7976879,121.156069 12.0231214,125.780347 C16.6473988,128.554913 17.5722543,129.479769 25.8959538,129.479769 Z" id="Path"></path>
                                            <path d="M69.3641618,79.5375723 C70.2890173,113.757225 100.809249,146.127168 127.630058,160 C98.9595376,155.375723 64.7398844,112.83237 63.8150289,80.4624277 L69.3641618,79.5375723 Z" id="Path"></path>
                                            <path d="M136.878613,91.5606936 C137.803468,91.5606936 138.728324,92.4855491 139.653179,91.5606936 C139.653179,96.1849711 134.104046,106.358382 130.404624,109.132948 C133.179191,108.208092 133.179191,110.057803 135.028902,109.132948 C134.104046,113.757225 124.855491,121.156069 123.00578,122.080925 C123.930636,123.00578 123.00578,123.930636 124.855491,123.930636 C123.00578,124.855491 122.080925,125.780347 117.456647,127.630058 C110.057803,130.404624 97.1098266,129.479769 96.1849711,127.630058 C96.1849711,126.705202 97.1098266,125.780347 98.0346821,124.855491 C104.508671,125.780347 110.057803,124.855491 117.456647,123.00578 C113.757225,123.00578 104.508671,125.780347 99.8843931,123.00578 C99.8843931,121.156069 102.65896,119.306358 104.508671,116.531792 C112.83237,115.606936 118.381503,116.531792 126.705202,111.907514 C119.306358,113.757225 114.682081,115.606936 106.358382,114.682081 C109.132948,109.132948 114.682081,99.8843931 121.156069,99.8843931 C121.156069,99.8843931 121.156069,99.8843931 121.156069,99.8843931 C124.855491,98.0346821 127.630058,96.1849711 130.404624,94.3352601 C123.00578,97.1098266 118.381503,99.8843931 117.456647,98.0346821 C116.531792,97.1098266 118.381503,92.4855491 122.080925,84.1618497 C125.780347,83.2369942 127.630058,81.3872832 131.32948,78.6127168 C129.479769,80.4624277 124.855491,82.3121387 123.00578,82.3121387 C124.855491,77.6878613 124.855491,66.5895954 125.780347,63.8150289 C123.00578,65.6647399 124.855491,78.6127168 121.156069,80.4624277 C120.231214,77.6878613 119.306358,73.9884393 118.381503,68.4393064 C118.381503,73.0635838 119.306358,77.6878613 120.231214,82.3121387 C120.231214,84.1618497 118.381503,86.9364162 118.381503,89.7109827 C113.757225,86.0115607 111.907514,82.3121387 111.907514,77.6878613 C110.057803,88.7861272 121.156069,86.0115607 112.83237,99.8843931 C111.907514,101.734104 110.982659,103.583815 110.057803,104.508671 C105.433526,100.809249 101.734104,93.4104046 101.734104,87.8612717 C98.9595376,92.4855491 106.358382,103.583815 108.208092,107.283237 C106.358382,111.907514 103.583815,116.531792 100.809249,116.531792 C98.9595376,111.907514 98.0346821,103.583815 97.1098266,98.0346821 C97.1098266,105.433526 97.1098266,111.907514 98.9595376,118.381503 C97.1098266,120.231214 96.1849711,123.00578 94.3352601,124.855491 C88.7861272,119.306358 88.7861272,109.132948 88.7861272,103.583815 C90.6358382,105.433526 90.6358382,104.508671 92.4855491,105.433526 C89.7109827,99.8843931 91.5606936,90.6358382 93.4104046,85.0867052 C94.3352601,86.0115607 94.3352601,87.8612717 96.1849711,87.8612717 C96.1849711,83.2369942 98.9595376,80.4624277 99.8843931,76.7630058 C100.809249,77.6878613 101.734104,78.6127168 102.65896,78.6127168 C102.65896,74.9132948 105.433526,72.1387283 109.132948,68.4393064 C110.057803,70.2890173 110.982659,69.3641618 111.907514,71.2138728 C112.83237,67.5144509 115.606936,62.8901734 118.381503,61.0404624 C119.306358,61.9653179 120.231214,61.9653179 121.156069,62.8901734 C122.080925,60.1156069 123.00578,59.1907514 127.630058,57.3410405 C130.404624,61.9653179 131.32948,65.6647399 130.404624,66.5895954 C131.32948,67.5144509 132.254335,65.6647399 133.179191,65.6647399 C136.878613,73.0635838 132.254335,76.7630058 137.803468,75.8381503 C139.653179,81.3872832 140.578035,82.3121387 136.878613,91.5606936 Z" id="Path"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <div className='w-1/2 sm:w-full sm:my-12 xs:my-8 text-center '>
                        <p className=' text-[100px] sm:text-6xl leading-[100px] sm:leading-normal mb-7 sm:mb-4'>The <br className='sm:hidden'/> Best of <br className='sm:hidden'/> NYC</p>
                        <p className=' tracking-widest'>All under one roof!</p>
                    </div>
                    
                    <svg className='bounce-two-des w-[180px] sm:w-24 xs:w-16' viewBox="0 0 140 176" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="1440_retail_detail" transform="translate(-309.000000, -3029.000000)" fill="#000000">
                                <g id="Group-9" transform="translate(121.000000, 1821.000000)">
                                    <g id="noun_Rose_1472739" transform="translate(265.471600, 1285.195327) rotate(-330.000000) translate(-265.471600, -1285.195327) translate(195.645011, 1205.195327)">
                                        <g id="Group">
                                            <path d="M56.416185,19.4219653 C50.867052,24.9710983 65.6647399,28.6705202 67.5144509,22.1965318 C68.4393064,18.4971098 59.1907514,17.5722543 56.416185,19.4219653 Z" id="Path"></path>
                                            <path d="M31.4450867,36.0693642 C37.9190751,43.4682081 40.6936416,47.1676301 49.9421965,44.3930636 C35.1445087,35.1445087 36.9942197,22.1965318 46.2427746,16.6473988 C51.7919075,13.8728324 53.6416185,6.47398844 66.5895954,10.1734104 C63.8150289,-0.924855491 51.7919075,0.924855491 41.6184971,7.39884393 C39.7687861,9.24855491 20.3468208,15.7225434 31.4450867,36.0693642 Z" id="Path"></path>
                                            <path d="M73.0635838,30.5202312 C78.6127168,23.1213873 72.1387283,20.3468208 69.3641618,21.2716763 C64.7398844,35.1445087 49.017341,18.4971098 49.9421965,26.8208092 C54.566474,35.1445087 66.5895954,37.9190751 73.0635838,30.5202312 Z" id="Path"></path>
                                            <path d="M52.716763,12.9479769 C49.017341,14.7976879 48.0924855,22.1965318 53.6416185,21.2716763 C51.7919075,12.9479769 75.8381503,19.4219653 76.7630058,23.1213873 C77.6878613,24.0462428 77.6878613,24.9710983 77.6878613,25.8959538 C80.4624277,27.7456647 85.0867052,22.1965318 80.4624277,18.4971098 C73.0635838,10.1734104 57.3410405,8.32369942 52.716763,12.9479769 Z" id="Path"></path>
                                            <path d="M77.6878613,28.6705202 C63.8150289,46.2427746 45.3179191,29.5953757 49.017341,24.0462428 C49.9421965,20.3468208 48.0924855,19.4219653 49.017341,16.6473988 C40.6936416,22.1965318 39.7687861,27.7456647 42.5433526,33.2947977 C46.2427746,44.3930636 61.9653179,44.3930636 70.2890173,41.6184971 C77.6878613,39.7687861 85.0867052,31.4450867 77.6878613,28.6705202 Z" id="Path"></path>
                                            <path d="M49.017341,70.2890173 C50.867052,63.8150289 29.5953757,65.6647399 24.9710983,48.0924855 C12.0231214,62.8901734 43.4682081,78.6127168 49.017341,70.2890173 Z" id="Path"></path>
                                            <path d="M70.2890173,9.24855491 C76.7630058,10.1734104 88.7861272,17.5722543 82.3121387,24.9710983 C87.8612717,38.8439306 68.4393064,50.867052 52.716763,43.4682081 C47.1676301,49.017341 79.5375723,60.1156069 90.6358382,40.6936416 C102.65896,22.1965318 82.3121387,0 69.3641618,8.32369942 C68.4393064,9.24855491 69.3641618,9.24855491 70.2890173,9.24855491 Z" id="Path"></path>
                                            <path d="M24.0462428,43.4682081 C31.4450867,59.1907514 39.7687861,64.7398844 58.265896,63.8150289 C63.8150289,62.8901734 85.0867052,61.9653179 85.0867052,49.017341 C83.2369942,51.7919075 67.5144509,58.265896 50.867052,48.0924855 C36.9942197,49.9421965 28.6705202,38.8439306 27.7456647,30.5202312 C18.4971098,33.2947977 21.2716763,36.9942197 24.0462428,43.4682081 Z" id="Path"></path>
                                            <path d="M68.4393064,6.47398844 C90.6358382,-1.84971098 107.283237,32.3699422 87.8612717,47.1676301 C88.7861272,50.867052 115.606936,44.3930636 108.208092,23.1213873 C98.9595376,-5.54913295 68.4393064,-0.924855491 68.4393064,6.47398844 Z" id="Path"></path>
                                            <path d="M51.7919075,65.6647399 C48.0924855,65.6647399 51.7919075,72.1387283 62.8901734,73.9884393 C83.2369942,78.6127168 104.508671,61.9653179 103.583815,45.3179191 C98.9595376,49.017341 94.3352601,50.867052 88.7861272,50.867052 C86.0115607,59.1907514 77.6878613,62.8901734 70.2890173,64.7398844 C60.1156069,66.5895954 57.3410405,64.7398844 51.7919075,65.6647399 Z" id="Path"></path>
                                            <path d="M25.8959538,129.479769 C25.8959538,130.404624 25.8959538,130.404624 24.9710983,131.32948 C28.6705202,133.179191 38.8439306,130.404624 41.6184971,128.554913 C40.6936416,130.404624 41.6184971,131.32948 40.6936416,132.254335 C45.3179191,132.254335 53.6416185,126.705202 54.566474,125.780347 C55.4913295,126.705202 55.4913295,126.705202 55.4913295,127.630058 C57.3410405,126.705202 58.265896,125.780347 61.0404624,122.080925 C64.7398844,116.531792 67.5144509,106.358382 66.5895954,105.433526 C65.6647399,104.508671 64.7398844,105.433526 63.8150289,106.358382 C62.8901734,110.982659 61.0404624,116.531792 57.3410405,121.156069 C58.265896,118.381503 62.8901734,110.982659 61.9653179,106.358382 C60.1156069,106.358382 58.265896,108.208092 54.566474,109.132948 C51.7919075,115.606936 51.7919075,120.231214 45.3179191,125.780347 C49.017341,120.231214 51.7919075,117.456647 52.716763,110.057803 C48.0924855,110.057803 38.8439306,113.757225 36.9942197,118.381503 C36.9942197,118.381503 36.9942197,118.381503 36.0693642,118.381503 C34.2196532,120.231214 31.4450867,122.080925 29.5953757,124.855491 C34.2196532,119.306358 36.9942197,116.531792 36.9942197,114.682081 C36.0693642,113.757225 31.4450867,113.757225 24.0462428,114.682081 C22.1965318,117.456647 19.4219653,119.306358 16.6473988,121.156069 C18.4971098,119.306358 21.2716763,116.531792 21.2716763,114.682081 C17.5722543,115.606936 8.32369942,111.907514 5.54913295,112.83237 C8.32369942,110.982659 18.4971098,115.606936 21.2716763,112.83237 C18.4971098,111.907514 15.7225434,109.132948 12.0231214,107.283237 C15.7225434,109.132948 19.4219653,110.982659 22.1965318,112.83237 C24.0462428,113.757225 26.8208092,112.83237 29.5953757,112.83237 C26.8208092,108.208092 24.0462428,105.433526 21.2716763,104.508671 C30.5202312,106.358382 24.9710983,114.682081 38.8439306,111.907514 C40.6936416,111.907514 42.5433526,110.982659 43.4682081,110.057803 C42.5433526,105.433526 36.9942197,100.809249 31.4450867,98.9595376 C36.0693642,98.0346821 43.4682081,107.283237 46.2427746,110.057803 C50.867052,109.132948 55.4913295,108.208092 56.416185,106.358382 C52.716763,102.65896 46.2427746,99.8843931 41.6184971,98.0346821 C47.1676301,99.8843931 52.716763,101.734104 58.265896,105.433526 C60.1156069,103.583815 62.8901734,103.583815 64.7398844,102.65896 C61.9653179,97.1098266 53.6416185,94.3352601 49.017341,92.4855491 C49.017341,94.3352601 49.017341,94.3352601 49.017341,96.1849711 C45.3179191,92.4855491 36.9942197,91.5606936 32.3699422,91.5606936 C32.3699422,92.4855491 33.2947977,93.4104046 33.2947977,94.3352601 C29.5953757,93.4104046 26.8208092,94.3352601 23.1213873,95.2601156 C24.0462428,95.2601156 24.0462428,96.1849711 24.0462428,97.1098266 C21.2716763,96.1849711 18.4971098,98.0346821 13.8728324,99.8843931 C14.7976879,101.734104 14.7976879,101.734104 15.7225434,103.583815 C12.9479769,102.65896 7.39884393,103.583815 5.54913295,105.433526 C6.47398844,106.358382 5.54913295,107.283237 6.47398844,108.208092 C3.69942197,108.208092 2.77456647,109.132948 0,112.83237 C2.77456647,115.606936 5.54913295,117.456647 7.39884393,117.456647 C7.39884393,117.456647 5.54913295,118.381503 5.54913295,119.306358 C10.1734104,124.855491 14.7976879,121.156069 12.0231214,125.780347 C16.6473988,128.554913 17.5722543,129.479769 25.8959538,129.479769 Z" id="Path"></path>
                                            <path d="M69.3641618,79.5375723 C70.2890173,113.757225 100.809249,146.127168 127.630058,160 C98.9595376,155.375723 64.7398844,112.83237 63.8150289,80.4624277 L69.3641618,79.5375723 Z" id="Path"></path>
                                            <path d="M136.878613,91.5606936 C137.803468,91.5606936 138.728324,92.4855491 139.653179,91.5606936 C139.653179,96.1849711 134.104046,106.358382 130.404624,109.132948 C133.179191,108.208092 133.179191,110.057803 135.028902,109.132948 C134.104046,113.757225 124.855491,121.156069 123.00578,122.080925 C123.930636,123.00578 123.00578,123.930636 124.855491,123.930636 C123.00578,124.855491 122.080925,125.780347 117.456647,127.630058 C110.057803,130.404624 97.1098266,129.479769 96.1849711,127.630058 C96.1849711,126.705202 97.1098266,125.780347 98.0346821,124.855491 C104.508671,125.780347 110.057803,124.855491 117.456647,123.00578 C113.757225,123.00578 104.508671,125.780347 99.8843931,123.00578 C99.8843931,121.156069 102.65896,119.306358 104.508671,116.531792 C112.83237,115.606936 118.381503,116.531792 126.705202,111.907514 C119.306358,113.757225 114.682081,115.606936 106.358382,114.682081 C109.132948,109.132948 114.682081,99.8843931 121.156069,99.8843931 C121.156069,99.8843931 121.156069,99.8843931 121.156069,99.8843931 C124.855491,98.0346821 127.630058,96.1849711 130.404624,94.3352601 C123.00578,97.1098266 118.381503,99.8843931 117.456647,98.0346821 C116.531792,97.1098266 118.381503,92.4855491 122.080925,84.1618497 C125.780347,83.2369942 127.630058,81.3872832 131.32948,78.6127168 C129.479769,80.4624277 124.855491,82.3121387 123.00578,82.3121387 C124.855491,77.6878613 124.855491,66.5895954 125.780347,63.8150289 C123.00578,65.6647399 124.855491,78.6127168 121.156069,80.4624277 C120.231214,77.6878613 119.306358,73.9884393 118.381503,68.4393064 C118.381503,73.0635838 119.306358,77.6878613 120.231214,82.3121387 C120.231214,84.1618497 118.381503,86.9364162 118.381503,89.7109827 C113.757225,86.0115607 111.907514,82.3121387 111.907514,77.6878613 C110.057803,88.7861272 121.156069,86.0115607 112.83237,99.8843931 C111.907514,101.734104 110.982659,103.583815 110.057803,104.508671 C105.433526,100.809249 101.734104,93.4104046 101.734104,87.8612717 C98.9595376,92.4855491 106.358382,103.583815 108.208092,107.283237 C106.358382,111.907514 103.583815,116.531792 100.809249,116.531792 C98.9595376,111.907514 98.0346821,103.583815 97.1098266,98.0346821 C97.1098266,105.433526 97.1098266,111.907514 98.9595376,118.381503 C97.1098266,120.231214 96.1849711,123.00578 94.3352601,124.855491 C88.7861272,119.306358 88.7861272,109.132948 88.7861272,103.583815 C90.6358382,105.433526 90.6358382,104.508671 92.4855491,105.433526 C89.7109827,99.8843931 91.5606936,90.6358382 93.4104046,85.0867052 C94.3352601,86.0115607 94.3352601,87.8612717 96.1849711,87.8612717 C96.1849711,83.2369942 98.9595376,80.4624277 99.8843931,76.7630058 C100.809249,77.6878613 101.734104,78.6127168 102.65896,78.6127168 C102.65896,74.9132948 105.433526,72.1387283 109.132948,68.4393064 C110.057803,70.2890173 110.982659,69.3641618 111.907514,71.2138728 C112.83237,67.5144509 115.606936,62.8901734 118.381503,61.0404624 C119.306358,61.9653179 120.231214,61.9653179 121.156069,62.8901734 C122.080925,60.1156069 123.00578,59.1907514 127.630058,57.3410405 C130.404624,61.9653179 131.32948,65.6647399 130.404624,66.5895954 C131.32948,67.5144509 132.254335,65.6647399 133.179191,65.6647399 C136.878613,73.0635838 132.254335,76.7630058 137.803468,75.8381503 C139.653179,81.3872832 140.578035,82.3121387 136.878613,91.5606936 Z" id="Path"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>

                <Tailend setIsModal={setIsModal}/>
            </div>

            <LinkStrip linkObj={pgData[2]} handlePage={handlePage} currentPage={currentPage} />

            {isModal && 
                <Modal setIsModal={setIsModal}/>
            }

            <div className='absolute top-16 sm:top-8 left-14 sm:left-7 -sm:hidden h-[60px]'>
                <Logo />
            </div>

            {isNav && 
                <Nav setIsModal={setIsModal} setIsNav={setIsNav}/>
            }

            {isNav ? 
                <button onClick={() => setIsNav(false)} className='h-12 w-12 absolute z-50 -sm:hidden right-8 top-8 pl-3 pt-3 border border-black rounded-full'>
                    <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 191.721 191.72" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                        <g><path d="M191.328 133.248c-6.39-12.188-19.232-21.508-29.474-30.397-10.948-9.502-22.332-18.497-33.687-27.513 12.985-16.615 26.197-33.1 39.136-49.818 2.477-.111 4.292-2.813 3.856-5.3 1.225-3.119-2.752-6.463-5.736-5.2-5.744-3.401-12.061-6.335-17.977-9.095-2.389-1.115-5.137 1.275-4.309 3.452-14.211 14.521-28.93 28.564-43.797 42.467-6.208-5.272-12.332-10.644-18.3-16.188-.028-.026-.054-.056-.082-.082-.013-1.002-.447-2.013-1.469-2.859-.295-.244-.615-.452-.916-.687l.01-.013c-.038-.02-.075-.044-.113-.065a105.273 105.273 0 0 0-3.453-2.59c-5.625-6.393-11.027-13.564-17.396-18.717-.107-3.117-3.365-6.168-6.835-4.063-11.694 7.096-25.984 14.422-35.003 24.937a4.884 4.884 0 0 0-.675 1.023c-2.405 0-4.331 3.555-2.289 5.636 16.229 16.54 34.895 30.518 53.126 44.752-20.276 18.875-40.302 37.979-59.288 58.052-.08.071-.165.098-.243.18a226.364 226.364 0 0 0-5.122 5.431c-2.882 3.107-.485 7.23 2.663 7.824 5.768 9.427 14.606 16.436 23.635 22.602 6.122 4.182 17.289 11.836 24.996 8.038 1.435.256 2.953-.159 3.71-1.67 12.661-25.268 27.836-48.728 44.177-71.383 9.179 8.064 18.289 16.209 27.48 24.216 2.699 2.351 32.588 33.965 37.721 23.447.705.192 1.441.281 2.169.147 4.673-.851 8.372-6.737 10.926-10.222 2.64-3.602 5.362-7.41 7.675-11.325 3.14 2.122 6.425-2.077 4.884-5.017zm-169.676 6.587c-.232.629-.283 1.287-.24 1.938-1.146.634-1.929 1.723-2.232 2.958-1.187.104-2.329.498-3.314 1.236-.14-.058-.277-.118-.417-.176a948.111 948.111 0 0 1 6.203-5.956zm29.398 37.208c-.836-.394-1.706-.678-2.581-.959a14.26 14.26 0 0 0 3.959-2.127c-.451 1.031-.936 2.051-1.378 3.086zM72.621 76.7c-10.23-8.269-20.595-16.375-30.994-24.432a130.741 130.741 0 0 0 10.146 6.318c6.855 6.141 13.933 12.056 21.077 17.901l-.229.213z" fill="currentColor" data-original="white"></path></g>
                    </svg>
                </button>
            : 
                <button onClick={() => setIsNav(true)} className='absolute -sm:hidden right-8 top-10'>
                    <svg className='h-7'  xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 18.2 10.4" style={{ enableBackground: "new 0 0 512 512"}} xmlSpace="preserve">
                        <g transform="translate(-3 -6.8)"><path fill="#000000" fillRule="evenodd" d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clipRule="evenodd" data-original="#000000"></path></g>
                    </svg>
                </button>
            }
        </div>
    )
}

export default Retail