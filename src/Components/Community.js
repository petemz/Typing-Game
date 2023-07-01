import { useRef } from 'react';
import {Context} from "../Context"
import { useContext } from "react"
import Modal from './Modal';
import Tailend from './Tailend';
import LinkStrip from './LinkStrip';
import usePageTransition from './usePageTrans';

import Logo from "../Assets/logo.svg"

const Retail = () => {
    const {currentPage, setCurrentPage, isModal, setIsModal, isNav, setIsNav} = useContext(Context)

    const commRef = useRef(null)
    const homeRef = useRef(null)
    const foodRef = useRef(null)
    const retailRef = useRef(null)

    const pgData = [
        {name: 'home', ref: homeRef, color: 'bg-white'}, 
        {name: 'food', ref: foodRef, symb: '餐饮',  color: 'bg-blue-400'}, 
        {name: 'retail', ref:retailRef, symb: '購物', color: 'bg-red-500'}
        
    ]

    const { handlePage, isExpanded } = usePageTransition('community', pgData, currentPage, setCurrentPage, commRef)

    return (
        <div className="home bg-yellow-500 h-full flex">
            {pgData.map((page) => {
                return(
                    <LinkStrip linkObj={page} handlePage={handlePage} currentPage={currentPage} key={page.name} />  
                )}
            )}

            <div ref={commRef}  className={` h-full overflow-y-scroll ${currentPage === null ? 'w-[100vw] px-16' : 'w-[60px]'}  ${isExpanded ? 'px-16' : ''} sm:px-7 pt-40 sm:pt-24 overflow-x-hidden`}>
                <div className='flex w-full justify-between sm:justify-end mb-20'>
                    <div className='sm:hidden flex flex-col opacity-50 tracking-widest items-center'>
                        <p className='[writing-mode:vertical-lr] font-semibold'>Commmunity</p>
                        <svg className='rotate-[-90deg] w-5 h-5 mt-5' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512"}} xmlSpace="preserve">
                            <g transform="matrix(1,0,0,1,0,0)"><path d="m0 256 320 160.6L221.536 256 320 95.4z" fill="currentColor" data-original="#88d8c9" ></path><path d="m0 256 320 160.6L221.536 256H126.76z" fill="currentColor" data-original="#32bea6" ></path><path d="M432 240h80v32h-80zM286.592 240h80v32h-80z" fill="currentColor" data-original="#415e72" ></path></g>
                        </svg>
                    </div>

                    <p>Our mixed-use space hosts <br/> ongoing events, podcasts <br/> & artists in residence</p>
                </div>

                <div className='flex xl:flex-col justify-between relative mb-28'>
                    <h1 className='text-[195px] leading-[192px] lg:text-[160px] sm:text-6xl lg:leading-[160px] break-words overflow-clip'>Canal St. <br/>Community</h1>
                    <p className='absolute right-0 text-6xl sm:hidden'>購物</p>
                </div>

                <div className="waves-des flex items-center py-28 my-28">
                    <svg className='bounce-one-des w-1/4' width="117px" height="140px" viewBox="0 0 117 140" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="1440_community" transform="translate(-386.000000, -3535.000000)" fill="#000000" fillRule="nonzero">
                                <g id="Group-15" transform="translate(239.000000, 3173.000000)">
                                    <g id="Group-14" transform="translate(0.000000, 180.000000)">
                                        <g id="Group-13" transform="translate(2.000000, 0.000000)">
                                            <g id="noun_Audio_1883584-Copy" transform="translate(203.500000, 252.000000) scale(-1, 1) translate(-203.500000, -252.000000) translate(145.000000, 182.000000)">
                                                <path d="M7.0668,90.8783333 L8.45742857,91.37 L7.74707143,92.6583333 C7.22224286,93.6133333 8.25852857,94.955 9.56224286,96.4816667 C10.2726,97.3133333 10.8860143,98.0316667 11.1317143,98.7666667 C11.6849571,100.42 9.98845714,101.163333 9.1728,101.52 C8.75327143,101.703333 7.97104286,102.045 7.90752857,102.29 C7.90251429,102.305 7.81727143,102.673333 8.56941429,103.675 C9.2313,104.553333 9.7695,105.1 10.2040714,105.541667 C12.2365286,107.606667 12.2064429,108.275 11.1852,116.418333 C11.0682,117.355 11.3105571,118.125 11.9490429,118.846667 C14.3274857,121.531667 21.7051714,123.011667 32.7232286,123.011667 C38.0350286,123.011667 42.2520429,122.655 42.2938286,122.651667 L43.1429143,122.578333 L51.6354429,139.51 C52.5915,139.538333 54.4267286,139.58 56.8436143,139.58 C82.1206286,139.58 99.7040571,135.645 103.874271,129.055 C105.2766,126.838333 105.256543,124.295 103.815771,121.278333 C97.4175429,107.896667 102.617357,98.085 108.123043,87.6966667 C112.303286,79.81 116.6256,71.6533333 116.6256,61.0033333 C116.6256,42.785 110.884243,0.413333333 57.7094143,0.413333333 C40.1209714,0.413333333 27.0554143,4.92 18.8771143,13.81 C9.13937143,24.395 8.17662857,39.1033333 9.08254286,49.58 C10.4581286,65.5016667 4.61314286,78.5966667 0.942685714,83.825 C0.227314286,84.845 0.3393,85.5683333 0.486385714,86.0216667 C1.23017143,88.3533333 5.59761429,90.36 7.0668,90.8783333 Z M80.3405571,54.6 L78.5671714,52.8316667 C81.8782714,49.53 81.8782714,44.1566667 78.5671714,40.8533333 C76.9609286,39.2516667 74.8281857,38.37 72.5567143,38.37 C72.5550429,38.37 72.5550429,38.37 72.5550429,38.37 C70.2869143,38.37 68.1525,39.25 66.5496,40.85 C63.2368286,44.1533333 63.2368286,49.53 66.5496,52.835 L64.7762143,54.6033333 C60.4856571,50.3233333 60.4856571,43.36 64.7762143,39.0816667 C66.8521286,37.01 69.615,35.8683333 72.5533714,35.8683333 L72.5550429,35.8683333 C75.4950857,35.87 78.2579571,37.0116667 80.3372143,39.085 C82.4148,41.1566667 83.5597286,43.9116667 83.5597286,46.8416667 C83.5597286,49.7716667 82.4198143,52.5283333 80.3405571,54.6 Z M86.2590857,60.5033333 C93.8122714,52.97 93.8122714,40.7166667 86.2590857,33.185 C78.7025571,25.65 66.4092,25.65 58.8576857,33.18 C55.1972571,36.83 53.1815143,41.6833333 53.1815143,46.8416667 C53.1831857,52.0016667 55.2006,56.8533333 58.8610286,60.5033333 L57.0876429,62.2716667 C52.9525286,58.1483333 50.6743714,52.6683333 50.6727,46.8416667 C50.6727,41.0133333 52.9491857,35.535 57.0843,31.4116667 C61.2160714,27.2916667 66.7100571,25.0233333 72.5533714,25.0233333 L72.5550429,25.0233333 C78.4000286,25.0233333 83.8956857,27.2933333 88.0308,31.4166667 C96.5617714,39.9233333 96.5617714,53.7616667 88.0308,62.27 L86.2590857,60.5033333 Z M49.3974,23.745 C62.1687857,11.0066667 82.9479857,11.0116667 95.7227143,23.75 C108.4941,36.4866667 108.4941,57.2066667 95.7243857,69.94 L93.951,68.1716667 C105.742929,56.4116667 105.742929,37.2783333 93.9493286,25.5166667 C82.1540571,13.7583333 62.9643857,13.7516667 51.1691143,25.5116667 C45.4545,31.21 42.3072,38.785 42.3072,46.8416667 C42.3088714,54.8983333 45.4561714,62.4733333 51.1707857,68.1716667 L49.3974,69.94 C36.6260143,57.2033333 36.6243429,36.4816667 49.3974,23.745 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <div className='w-1/2 sm:w-full sm:my-12 xs:my-8 text-center'>
                        <p className=' text-[100px] sm:text-6xl leading-[100px] sm:leading-normal mb-7 sm:mb-4'>The <br className='sm:hidden'/> Best of <br className='sm:hidden'/> NYC</p>
                        <p className=' tracking-widest'>All under one roof!</p>
                    </div>
                    
                    <svg transform="scale(1,-1) translate(-140px, 0)" className='bounce-two-des w-1/4'  width="117px" height="140px" viewBox="0 0 117 140" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="1440_community" transform="translate(-386.000000, -3535.000000)" fill="#000000" fillRule="nonzero">
                                <g id="Group-15" transform="translate(239.000000, 3173.000000)">
                                    <g id="Group-14" transform="translate(0.000000, 180.000000)">
                                        <g id="Group-13" transform="translate(2.000000, 0.000000)">
                                            <g id="noun_Audio_1883584-Copy" transform="translate(203.500000, 252.000000) scale(-1, 1) translate(-203.500000, -252.000000) translate(145.000000, 182.000000)">
                                                <path d="M7.0668,90.8783333 L8.45742857,91.37 L7.74707143,92.6583333 C7.22224286,93.6133333 8.25852857,94.955 9.56224286,96.4816667 C10.2726,97.3133333 10.8860143,98.0316667 11.1317143,98.7666667 C11.6849571,100.42 9.98845714,101.163333 9.1728,101.52 C8.75327143,101.703333 7.97104286,102.045 7.90752857,102.29 C7.90251429,102.305 7.81727143,102.673333 8.56941429,103.675 C9.2313,104.553333 9.7695,105.1 10.2040714,105.541667 C12.2365286,107.606667 12.2064429,108.275 11.1852,116.418333 C11.0682,117.355 11.3105571,118.125 11.9490429,118.846667 C14.3274857,121.531667 21.7051714,123.011667 32.7232286,123.011667 C38.0350286,123.011667 42.2520429,122.655 42.2938286,122.651667 L43.1429143,122.578333 L51.6354429,139.51 C52.5915,139.538333 54.4267286,139.58 56.8436143,139.58 C82.1206286,139.58 99.7040571,135.645 103.874271,129.055 C105.2766,126.838333 105.256543,124.295 103.815771,121.278333 C97.4175429,107.896667 102.617357,98.085 108.123043,87.6966667 C112.303286,79.81 116.6256,71.6533333 116.6256,61.0033333 C116.6256,42.785 110.884243,0.413333333 57.7094143,0.413333333 C40.1209714,0.413333333 27.0554143,4.92 18.8771143,13.81 C9.13937143,24.395 8.17662857,39.1033333 9.08254286,49.58 C10.4581286,65.5016667 4.61314286,78.5966667 0.942685714,83.825 C0.227314286,84.845 0.3393,85.5683333 0.486385714,86.0216667 C1.23017143,88.3533333 5.59761429,90.36 7.0668,90.8783333 Z M80.3405571,54.6 L78.5671714,52.8316667 C81.8782714,49.53 81.8782714,44.1566667 78.5671714,40.8533333 C76.9609286,39.2516667 74.8281857,38.37 72.5567143,38.37 C72.5550429,38.37 72.5550429,38.37 72.5550429,38.37 C70.2869143,38.37 68.1525,39.25 66.5496,40.85 C63.2368286,44.1533333 63.2368286,49.53 66.5496,52.835 L64.7762143,54.6033333 C60.4856571,50.3233333 60.4856571,43.36 64.7762143,39.0816667 C66.8521286,37.01 69.615,35.8683333 72.5533714,35.8683333 L72.5550429,35.8683333 C75.4950857,35.87 78.2579571,37.0116667 80.3372143,39.085 C82.4148,41.1566667 83.5597286,43.9116667 83.5597286,46.8416667 C83.5597286,49.7716667 82.4198143,52.5283333 80.3405571,54.6 Z M86.2590857,60.5033333 C93.8122714,52.97 93.8122714,40.7166667 86.2590857,33.185 C78.7025571,25.65 66.4092,25.65 58.8576857,33.18 C55.1972571,36.83 53.1815143,41.6833333 53.1815143,46.8416667 C53.1831857,52.0016667 55.2006,56.8533333 58.8610286,60.5033333 L57.0876429,62.2716667 C52.9525286,58.1483333 50.6743714,52.6683333 50.6727,46.8416667 C50.6727,41.0133333 52.9491857,35.535 57.0843,31.4116667 C61.2160714,27.2916667 66.7100571,25.0233333 72.5533714,25.0233333 L72.5550429,25.0233333 C78.4000286,25.0233333 83.8956857,27.2933333 88.0308,31.4166667 C96.5617714,39.9233333 96.5617714,53.7616667 88.0308,62.27 L86.2590857,60.5033333 Z M49.3974,23.745 C62.1687857,11.0066667 82.9479857,11.0116667 95.7227143,23.75 C108.4941,36.4866667 108.4941,57.2066667 95.7243857,69.94 L93.951,68.1716667 C105.742929,56.4116667 105.742929,37.2783333 93.9493286,25.5166667 C82.1540571,13.7583333 62.9643857,13.7516667 51.1691143,25.5116667 C45.4545,31.21 42.3072,38.785 42.3072,46.8416667 C42.3088714,54.8983333 45.4561714,62.4733333 51.1707857,68.1716667 L49.3974,69.94 C36.6260143,57.2033333 36.6243429,36.4816667 49.3974,23.745 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>


                <Tailend setIsModal={setIsModal}/>
            </div>

            <div className='absolute -sm:hidden rounded-full top-16 sm:top-8 left-14 sm:left-7 w-[60px]'>
                <img className='top-16 left-[7%]' src={Logo} alt="Logo" />
            </div>

            {isModal && 
                <Modal setIsModal={setIsModal}/>
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
