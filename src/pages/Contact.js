import React, { useState } from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

export const Contact = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [title, setTitle] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const bg = 'https://www.pepperdata.com/wp-content/themes/unicon-child/framework/images/banner-center-bg.jpg'
    return (
        <div style={{
            backgroundImage: `url(${bg})`, width: '100%'
        }}>
            <h2 className='mt-8 lg:mt-16 py-4 lg:py-16 font-bold text-2xl'>Contact Us</h2>
            <div className='lg:flex  px-2 lg:px-16 text-center lg:text-left'>
                <div className='w-full lg:w-1/2 mr-0 lg:mr-16'>
                    <h2 className='font-bold text-3xl my-4'>Have a question?</h2>
                    <p className='my-4 text-2xl'>We can help</p>
                    <p className='my-4'>Ask about our products, pricing, or anything else you’re
                        curious about. Our team is more than happy to help you.
                    </p>
                    <p className='my-4'>Fill out this short form or email us directly at
                        <a className=" text-red-500"> info@pepperdata.com</a></p>
                    <p className='my-4'>
                        Customers: Please contact
                        <a className=" text-red-500"> support</a>
                    </p>
                    <p className='my-4'>
                        Pepperdata cares about your privacy. We only use this information to provide
                        you with information about products that may be of interest to you.
                        Learn how Pepperdata may
                        <a className=" text-red-500"> use your information.</a>
                    </p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <form className='border flex flex-col justify-center rounded-2xl my-8'>
                        <fieldset className='flex flex-col p-8'>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="lastname"
                                type="text"
                                placeholder="access key"
                                className='border rounded-2xl pl-4 py-2 my-2' />
                            <input
                                type='text'
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder='Last Name *'
                                className='border rounded-2xl pl-4 py-2 my-2' />
                            <input
                                type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Business Email *'
                                className='border rounded-2xl pl-4 py-2 my-2' />
                            <input
                                type='text'
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder='Company *'
                                className='border rounded-2xl pl-4 py-2 my-2' />
                            <input
                                type='text'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Title *'
                                className='border rounded-2xl pl-4 py-2 my-2' />
                            <input
                                type='text'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Phone *'
                                className='border rounded-2xl pl-4 py-2 my-2' />
                            <textarea
                                type='text'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Message *'
                                className='border rounded-2xl pl-4 py-2 my-2' />
                        </fieldset>
                        <button className='text-white uppercase mx-24 lg:mx-40 mb-8 py-1 bg-teal-500 px-4  lg:px-16 rounded-2xl '>
                            <p>submit</p>
                        </button>
                    </form>
                </div>
            </div>
            <div className='bg-teal-500 py-16'>
                <h2 className='text-xl lg:text-3xl mb-8 text-white'>
                    Take a free 30-day trial to see what Big Data success looks like
                </h2>
                <p className='px-4 lg:px-96 text-white flex justify-center'>
                    Pepperdata products provide complete visibility and automation for your
                    big data environment. Get the observability, automated tuning, recommendations,
                    and alerting you need to efficiently and autonomously optimize big data environments at scale.
                </p>
                <div className='flex justify-center'>
                    <button className='bg-red-500 mt-8 hover:bg-white hover:text-red-600 border-red-600 uppercase border px-2 lg:px-16 py-2 rounded-3xl text-white mr-4'>
                        <p className='text-xs lg:text-xl'>try our interactive demo</p>
                    </button>
                    <button className='bg-red-500 mt-8 hover:bg-white hover:text-red-600 border-red-600 uppercase border  px-2 lg:px-16 py-2 rounded-3xl text-white mr-4'>
                        <p className='text-xs lg:text-xl'>contact sales</p>
                    </button>
                </div>
            </div>
            <footer className='bg-teal-900 border-t-1 py-16 text-white text-left'>
                <div className='lg:flex  px-2 lg:px-24 justify-evenly'>
                    <div className='flex  lg:flex-col'>
                        <div className='w-32 h-28'>
                            <img src='https://pepperdata2.wpenginepowered.com/wp-content/themes/unicon-child/framework/images/footer-logo.svg' alt='img' />
                        </div>
                        <div className=' ml-4 lg:ml-0'>
                            <p>Contact Us</p>
                            <p>Corporate Headquarters</p>
                            <p>3945 Freedom Circle</p>
                            <p>Suite 920 Santa Clara</p>
                            <p>CA 95054</p>
                            <p>info@pepperdata.com</p>
                        </div>
                    </div>
                    <div className='text-center lg:text-left my-8 lg:my-0'>
                        <p className='font-bold'>Product</p>
                        <p className=''>Capacity Optimizer</p>
                        <p className=''>Platform Spotlight</p>
                        <p className=''>Application Spotlight</p>
                        <p className=''>Query Spotlight</p>
                    </div>
                    <div className='text-center lg:text-left my-8 lg:my-0'>
                        <p className='font-bold'>Solutions</p>
                        <p className=''>Cloud</p>
                        <p className=''>Continuous Tuning</p>
                        <p className=''>IT Chargeback</p>
                        <p className=''>IT Cost Optimization and ROI</p>
                        <p className=''>Observability</p>
                        <p className=''>Spark on Kubernetes</p>
                    </div>
                    <div className='text-center lg:text-left my-8 lg:my-0'>
                        <p className='font-bold'>Company</p>
                        <p className=''>About Us</p>
                        <p className=''>Contact Us</p>
                        <p className=''>Privacy Policy</p>
                    </div>
                    <div className='text-center lg:text-left my-8 lg:my-0'>
                        <p className='font-bold'>Resources</p>
                        <p className=''>Pressroom</p>
                        <p className=''>In the News</p>
                        <p className=''>Webinars</p>
                        <p className=''>Product Videos</p>
                        <p className=''>Blog</p>
                        <p className=''>Free Trial</p>
                    </div>
                </div>
                <div className='lg:flex  px-4 text-center justify-center lg:px-44 mt-16 text-white'>
                    <div className='lg:w-96 mb-16  flex justify-center w-full lg:mb-0 h-24 lg:w-40 lg:h-40'>
                        <img className='' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/ApplicationPerformanceMonitoringAPM_HighPerformer_Enterprise_HighPerformer-FALL-1-107x139.png' alt='img' />
                    </div>
                    <div className='flex flex-col  items-center ml-0 lg:ml-16'>
                        <div className='flex text-white w-40 justify-evenly'>
                            <AiFillFacebook />
                            <AiFillLinkedin />
                            <AiOutlineTwitter />
                            <AiFillYoutube />
                        </div>
                        <p className='text-center mt-4'>
                            ©2022 Pepperdata Inc. All rights reserved.
                            Pepperdata and the Pepperdata logo are trademarks or registered trademarks of Pepperdata Inc.

                            All other trademarks are the property of their respective owners. Pepperdata reserves
                            the right to change this document without notice.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
