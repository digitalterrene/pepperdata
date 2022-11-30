import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillStar, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { BsArrowBarLeft, BsChevronRight } from 'react-icons/bs'
export const Home = () => {
    return (
        <div style={{}} className=' overflow-x-none'>
            <div className='lg:flex px-1 lg:px-4 h-96'>
                <div className='flex flex-col justify-center text-center w-full lg:w-1/2 px-2 pt-4 lg:pt-0 lg:px-16'>
                    <h2 className='text-xl lg:text-4xl font-bold lg:text-left mb-4'>Autonomous FinOps for Big Data and Kubernetes</h2>
                    <p className='text-centerlg:text-left'>Slash your cloud costs by continuous,
                        autonomous optimization of infrastructure using rightsizing, resource optimization, and governed
                        autoscaling — with no manual intervention or code changes.</p>
                    <div className='flex uppercase items-center my-8 lg:mt-16'>
                        <button className='bg-red-500 hover:bg-white text-xs lg:text-lg hover:text-red-600 border-red-600 uppercase border px-2 lg:px-8 py-1 rounded-2xl text-white mr-4' type='button' >
                            try our interactive demo
                        </button>
                        <button className='flex items-center border-none text-xs lg:text-lg h bg-white'>
                            <p className='uppercase mr-2'>contact sales</p>
                            <BsChevronRight />
                        </button>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 items-center  justify-center flex' >
                    <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/banner-home.png' alt='img' />
                </div>
            </div>
            <div className='flex mt-40 md:overflow-x-auto lg:mt-0 justify-evenly lg:mt-4'>
                <div className='shadow-md w-32  rounded-lg lg:rounded-2xl h-12 lg:h-24 p-4'>
                    <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-citi-logo.png' alt='citi' />
                </div>
                <div className='shadow-md w-32  rounded-lg lg:rounded-2xl h-12 lg:h-24 p-4'>
                    <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-expedia-logo.png' alt='citi' />
                </div>
                <div className='shadow-md w-32  rounded-lg lg:rounded-2xl h-12  lg:h-24 p-4'>
                    <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-zeotap-logo.png' alt='citi' />
                </div>
                <div className='shadow-md w-32  rounded-lg lg:rounded-2xl h-12  lg:h-24 p-4'>
                    <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-Indeed-logo.png' alt='citi' />
                </div>
                <div className='shadow-md w-32  rounded-lg lg:rounded-2xl h-12  lg:h-24 p-4'>
                    <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-iqvia-logo.png' alt='citi' />
                </div>
                <div className='shadow-md w-32  rounded-lg lg:rounded-2xl h-12  lg:h-24 p-4'>
                    <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-rbc.png' alt='citi' />
                </div>
                <div className='shadow-md w-32  rounded-lg lg:rounded-2xl h-12  lg:h-24 p-4'>
                    <img className='' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-magnite-logo.png' alt='citi' />
                </div>
            </div>
            <div className='my-16 py-16  text-center'>
                <div className='text-center flex flex-col justify-center items-center px-2 lg:px-72'>
                    <h2 className='text-xl lg:text-3xl  text-center lg:text-left mb-8'>
                        Autonomous FinOps Platform
                    </h2>
                    <h2 className='text-xl lg:text-3xl w-full lg:w-2/3 font-bold text-center mb-8'>
                        Empower your engineering teams with
                        automation you can trust
                    </h2>
                    <p className='w-full lg:w-2/3  text-center lg:text-left'>
                        Pepperdata’s Autonomous FinOps platform uses intelligence and automation to
                        continuously deploy cost-effective compute resources for your big data
                        and container clusters, while providing individuals visibility into how those costs break down.
                    </p>
                </div>
                <button className='bg-red-500 mt-8 hover:bg-white hover:text-red-600 border-red-600 uppercase border px-16 py-2 rounded-3xl text-white mr-4'>
                    <p>why finops?</p>
                </button>
            </div>
            <div className='lg:flex  justify-center '>
                <div className='w-full px-4 lg:pl-0 lg:w-1/2  flex flex-col ml-0 lg:ml-24 justify-start'>
                    <div className='flex items-center'>
                        <img className='h-8 w-8' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/pcs-il-icon-1.png' alt='icon' />
                        <div className='text-left ml-0 lg:ml-2'>
                            <h3 className='mb-2  my-4 lg:my-0 font-bold'>Allocate your cost</h3>
                            <p className=' lg:mt-0'>Accurately allocate your container and big data costs at a granular level</p>
                        </div>
                    </div>
                    <div className='flex items-center my-4'>
                        <img className='h-8 w-8' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/pcs-il-icon-2.png' alt='icon' />
                        <div className='text-left ml-2'>
                            <h3 className='mb-2 font-bold'>Get and stay rightsized</h3>
                            <p>Match workloads to optimal instance types to reduce waste</p>
                        </div>
                    </div>
                    <div className='flex items-center my-4'>
                        <img className='h-8 w-8' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/pcs-il-icon-2.png' alt='icon' />
                        <div className='text-left ml-2'>
                            <h3 className='mb-2 font-bold'>Optimize your scaling</h3>
                            <p>Run efficiently by using actual utilization, intelligent bin packing, and reclaiming waste</p>
                        </div>
                    </div>
                    <div className='flex items-center my-4'>
                        <img className='h-8 w-8' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/pcs-il-icon-2.png' alt='icon' />
                        <div className='text-left ml-2'>
                            <h3 className='mb-2 font-bold'>Automate your remediation</h3>
                            <p>Keep your costs low by running optimizers continuously, and autonomously</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img src='https://i.ytimg.com/vi/PHRt8kCW9F4/hqdefault.jpg' alt='video' />
                </div>
            </div>
            <div>
                <p className='my-8 lg:my-16'>
                    Works with 30+ Technologies
                </p>
                <div className='flex justify-evenly my-8 pt-16'>
                    <div className='shadow-md border w-28 h-12  lg:h-28'>
                        <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/unnamed.png' alt='img' />
                    </div>
                    <div className='shadow-md border w-28 h-12  lg:h-28'>
                        <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/unnamed-1.png' alt='img' />
                    </div>
                    <div className='shadow-md border w-28 h-12  lg:h-28'>
                        <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/ccl-4-img-apache-spark.png' alt='img' />
                    </div>
                    <div className='shadow-md border w-28 h-12  lg:h-28'>
                        <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/ccl-2-img-amazon-emr.jpg' alt='img' />
                    </div>
                    <div className='shadow-md border w-28 h-12  lg:h-28'>
                        <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/unnamed-2.png' alt='img' />
                    </div>
                    <div className='shadow-md border w-28 h-12  lg:h-28'>
                        <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/ccl-1-img-cloudera.png' alt='img' />
                    </div>
                </div>
            </div>
            <div className='bg-teal-50 mt-28'>
                <h2 className='text-2xl mt-8 py-8'>Why Pepperdata</h2>
                <h1 className='text-lg lg:text-3xl px-2 lg:pl-0 font-bold'>A technology-first approach to cloud cost optimization</h1>
                <div className='lg:flex justify-evenly mt-4 lg:mt-20 py-16'>
                    <div className='w-full flex lg:flex-col lg:w-1/6 text-left'>
                        <img className='w-8 lg:w-16 h-8 lg:h-16' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-li-icon-1.png' alt='img' />
                        <div>
                            <h3 className='font-bold text-xl py-4'>Real-time performance</h3>
                            <p>Make real-time data-driven decisions based on full-stack observability and granular cost visibility.</p>
                        </div>
                    </div>
                    <div className='w-full flex lg:flex-col lg:w-1/6 text-left'>
                        <img className='w-8 lg:w-16 h-8 lg:h-16' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-li-icon-1.png' alt='img' />
                        <div>
                            <h3 className='font-bold text-xl py-4'>Real-time performance</h3>
                            <p>Make real-time data-driven decisions based on full-stack observability and granular cost visibility.</p>
                        </div>
                    </div>
                    <div className='w-full flex lg:flex-col lg:w-1/6 text-left'>
                        <img className='w-8 lg:w-16 h-8 lg:h-16' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-li-icon-1.png' alt='img' />
                        <div>
                            <h3 className='font-bold text-xl py-4'>Real-time performance</h3>
                            <p>Make real-time data-driven decisions based on full-stack observability and granular cost visibility.</p>
                        </div>
                    </div>
                    <div className='w-full flex lg:flex-col lg:w-1/6 text-left'>
                        <img className='w-8 lg:w-16 h-8 lg:h-16' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-li-icon-1.png' alt='img' />
                        <div>
                            <h3 className='font-bold text-xl py-4'>Real-time performance</h3>
                            <p>Make real-time data-driven decisions based on full-stack observability and granular cost visibility.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:flex px-0 lg:px-32 justify-between'>
                <div className='w-full lg:w-2/3 mb-16 lg:mb-0 flex  justify-center items-center h-72 bg-gradient-to-r from-purple-500 to-pink-500'>
                    <img className='w-24 h-32' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/ApplicationPerformanceMonitoringAPM_HighPerformer_Enterprise_HighPerformer-FALL-1.png' alt='' />
                    <div className='pl-4 text-left'>
                        <h2>Pepperdata Enterprise Suite Reviews</h2>
                        <div className='flex my-4'>
                            <p>4.5</p>
                            <span className='flex'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-2/3 lg:ml-16 justify-center flex  items-center h-72 bg-gradient-to-r from-purple-500 to-pink-500'>
                    <div className='border h-28 ml-2 lg:ml-0 bg-white rounded-2xl w-28 flex items-center p-2'>
                        <img className='h-16 w-28 ' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/gartner-peer-insights.png' alt='' />
                    </div>
                    <div className='pl-4  text-left'>
                        <h2>Pepperdata Enterprise Suite Reviews</h2>
                        <div className='flex my-4 '>
                            <p>4.5</p>
                            <span className='flex'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-24'>
                <h2 className='text-lg lg:text-3xl font-bold'>Hear from our customers</h2>
                <div className='lg:flex px-2 lg:px-24 justify-between mt-16'>
                    <div className='flex my-8 lg:my-0 flex-col items-center'>
                        <div>
                            <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-li-review-icon-1.png' alt='img' />
                        </div>
                        <p className='w-full lg:w-1/1 p-4'>
                            “We use Google Dataproc clusters for our data engineering pipelines.
                            Pepperdata lets us track critical metrics for those pipelines.”
                        </p>
                    </div>
                    <div className='flex  my-8 lg:my-0  flex-col items-center'>
                        <div>
                            <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-li-review-icon-2.png' alt='img' />
                        </div>
                        <p className='w-1/1 p-4'>
                            “Before Pepperdata, we experimented with various approaches to solve our
                            performance issues and we could never see deep enough into the cluster to get insight.”
                        </p>
                    </div>
                    <div className='flex flex-col  my-8 lg:my-0  items-center'>
                        <div>
                            <img src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2022/10/cc-li-review-icon-3.png' alt='img' />
                        </div>
                        <p className='w-1/1 p-4'>
                            “If a job slows down or stops, we can quickly drill down to pinpoint when
                            the trouble occurred and see what activity was occurring or changing on the cluster.”
                        </p>
                    </div>
                </div>
            </div>
            <div className=' p-0'>
                <h2 className='my-8 text-lg lg:text-2xl font-bold'>
                    Whats new at Pepperdata
                </h2>
                <div className='lg:flex justify-evenly px-2  lg:px-16 pb-8'>
                    <div className='w-full lg:w-1/3 mx-0 my-4 lg:my-0 lg:mx-4 text-left border rounded-2xl'>
                        <div>
                            <img className='rounded-t-2xl h-68' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2021/05/Blog-Header_Running-Spark-on-Kubernetes-Competitively-Optimize-Performance.png' alt='' />
                        </div>
                        <div className='mt-8 p-4'>
                            <p className='uppercase text-lg'>Products</p>
                            <p className='text-xl font-bold'>
                                Intelligent Instance Selection for Your Kubernetes Workloads
                            </p>
                            <span className='flex items-center mt-8'>
                                <p className='mr-2 uppercase'>See more</p>
                                <BsChevronRight />
                            </span>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 mx-0 my-4 lg:my-0 lg:mx-4 text-left border rounded-2xl'>
                        <div>
                            <img className='rounded-t-2xl h-68' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2021/05/Blog-Header_Running-Spark-on-Kubernetes-Competitively-Optimize-Performance.png' alt='' />
                        </div>
                        <div className='mt-8 p-4'>
                            <p className='uppercase text-lg'>Products</p>
                            <p className='text-xl font-bold'>
                                Intelligent Instance Selection for Your Kubernetes Workloads
                            </p>
                            <span className='flex items-center mt-8'>
                                <p className='mr-2 uppercase'>See more</p>
                                <BsChevronRight />
                            </span>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 mx-0 my-4 lg:my-0 lg:mx-4 text-left border rounded-2xl'>
                        <div>
                            <img className='rounded-t-2xl h-68' src='https://pepperdata2.wpenginepowered.com/wp-content/uploads/2021/05/Blog-Header_Running-Spark-on-Kubernetes-Competitively-Optimize-Performance.png' alt='' />
                        </div>
                        <div className='mt-8 p-4'>
                            <p className='uppercase text-lg'>Products</p>
                            <p className='text-xl font-bold'>
                                Intelligent Instance Selection for Your Kubernetes Workloads
                            </p>
                            <span className='flex items-center mt-8'>
                                <p className='mr-2 uppercase'>See more</p>
                                <BsChevronRight />
                            </span>
                        </div>
                    </div>
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
