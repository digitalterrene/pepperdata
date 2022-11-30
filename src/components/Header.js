import React, { useEffect, useState } from 'react'
import { AiFillAlert, AiOutlineCaretDown, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import './Css.css'
export const Header = () => {
    const [deviceW, setDeviceW] = useState(window.innerWidth)
    console.log(deviceW)

    useEffect(() => {
    })


    return (
        <header className='border-b pb-4'>
            {deviceW <= 970 ?
                (
                    <div style={{ width: window.innerWidth }} className='flex justify-between  items-center px-8 mt-4 w-full'>
                        <NavLink to={'/'}>
                            <img src='https://www.pepperdata.com/wp-content/uploads/2022/10/pepperdata-header-logo.svg' alt='peppermintlogo' />
                        </NavLink>
                        <NavLink to={'/contact'}>
                            <AiOutlineMenu className='text-2xl' />
                        </NavLink>
                    </div>
                )
                :
                (
                    <div className="flex flex-row px-8 pt-2">
                        <div className="basis-1/4">
                            <NavLink to={'/'}>
                                <img src='https://www.pepperdata.com/wp-content/uploads/2022/10/pepperdata-header-logo.svg' alt='peppermintlogo' />
                            </NavLink>
                        </div>
                        <div className="basis-1/2 flex justify-evenly items-center uppercase">
                            <span className='tooltip'>
                                <NavLink className='flex items-center' to={'/contact'}>
                                    <p className='mr-2'>products</p>
                                    <AiOutlineCaretDown />
                                </NavLink>
                                <div className='tooltiptext'>
                                    <div className='shadow-md shadow-inner border'>
                                        <div className='flex w-auto justify-between p-16 text-left text-slate-900'>
                                            <div>
                                                <p>BIG DATA</p>
                                                <p>Capacity Optimizer</p>
                                                <p>Platform Spotlight</p>
                                                <p>Application Spotlight</p>
                                                <p>Query Spotlight</p>
                                            </div>
                                            <div className='border-l ml-8 pl-8'>
                                                <p>KUBERNETES</p>
                                                <p>Instant Rightsizing</p>
                                                <p>Scale Optimization</p>
                                                <p>Automatic Remediation</p>
                                                <p>Cost Allocation and Visibilty</p>
                                            </div>
                                        </div>
                                        <p>Three hsdrjhtgbrktuj</p>
                                        <div className='bg-cyan-500 flex justify-center py-4'>
                                            <button className='bg-white px-4 uppercase text-cyan-500 hover:text-slate-900 border rounded-2xl flex self-center'>
                                                <p>try pepperdata on amazon emr for free</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span className='flex uppercase items-center'>
                                <NavLink className='flex items-center' to={'/contact'}>
                                    <p className='mr-2'>solutions</p>
                                    <AiOutlineCaretDown />
                                </NavLink>
                            </span>
                            <span className='flex uppercase items-center'>
                                <NavLink className='flex items-center' to={'/contact'}>
                                    <p>customers</p>
                                </NavLink>
                            </span>
                            <span className='flex uppercase items-center'>
                                <NavLink className='flex items-center' to={'/contact'}>
                                    <p className='mr-2'>company</p>
                                    <AiOutlineCaretDown />
                                </NavLink>
                            </span>
                            <span className='flex uppercase items-center'>
                                <NavLink className='flex items-center' to={'/contact'}>
                                    <p className='mr-2'>resources</p>
                                    <AiOutlineCaretDown />
                                </NavLink>
                            </span>
                            <span className='flex uppercase items-center'>
                                <NavLink className='flex items-center' to={'/contact'}>
                                    <p>blog</p>
                                </NavLink>
                            </span>
                        </div>
                        <div className="basis-1/4 flex justify-center items-center" >
                            <button className='bg-red-500 hover:bg-white hover:text-red-600 border-red-600 uppercase border px-8 py-1 rounded-2xl text-white'>
                                free trial
                            </button>
                        </div>
                    </div>
                )
            }
        </header>
    )
}
