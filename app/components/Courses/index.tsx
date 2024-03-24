"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    {
        heading: 'Full stack modern',
        heading2: 'javascript',
        name: "Colt stelle",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Design system',
        heading2: 'with React programme',
        name: "Colt stelle",
        imgSrc: '/assets/courses/web-dev.svg',
        students: 130,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Design banner',
        heading2: 'with Figma',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursethree.png',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Colt stelle",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursethree.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
]


interface ServicesType {
    iconSrc: string,
    heading1: string,
    heading2: string,
    exploreMore: string, 
}

const myData: ServicesType[] = [
    {
        iconSrc: '/assets/courses/custom_software.png',
        heading1: 'Custom Software Development',
        heading2: "Our team specializes in crafting tailored software solutions designed to meet your unique business needs, ensuring seamless integration and maximum efficiency.",
        exploreMore: '#/',
    },
    {
        iconSrc: '/assets/courses/desktop.png',
        heading1: 'Web Apps',
        heading2: "Elevate your online presence with our bespoke web applications, meticulously developed to enhance user experience and drive engagement across all platforms.",
        exploreMore: '#/',
    },
    {
        iconSrc: '/assets/courses/mobile.png',
        heading1: 'Mobile Apps',
        heading2: "Unlock the full potential of mobile technology with our custom-built applications, delivering intuitive interfaces and cutting-edge functionality to captivate your audience on the go.",
        exploreMore: '#/',
    },
    {
        iconSrc: '/assets/courses/data.png',
        heading1: 'Data & AI',
        heading2: "Harness the power of data-driven insights and artificial intelligence to optimize decision-making processes and drive innovation within your organization.",
        exploreMore: '#/',
    },
    {
        iconSrc: '/assets/courses/design.png',
        heading1: 'Graphic Designing',
        heading2: "From striking logos to captivating visuals and illustrations, our expert graphic designers bring your brand to life with stunning creativity, leaving a lasting impression on your audience.",
        exploreMore: '#/',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div id="services">
                <div className='mx-auto max-w-7xl py-20 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl  font-semibold mb-5 sm:mb-0" style = {{color: "rgb(55 65 81)", fontSize: "2.5rem", paddingBottom: "3rem"}}>Our Services</h3>
                    </div>

                    <div className="pizza">
                        {myData &&
                        myData.map((item, i) => (
                            <div key={i}
                            // style={{ backgroundImage: `url(${item.iconSrc})` }}
                            className="pizza1"
                            // style={i==0 ? {flex: "0 0 52% !important"} : i==1? {flex: "0 0 47% !important"}:{flex: "0 0 47% !important"}}
                            >
                            <Image src={item.iconSrc} alt="etc" width={64} height={64} className="inline-block m-auto" />
                            {/* <h3 style={{fontSize:25, fontWeight: "bold"}}>{item.heading1}</h3> */}
                            <h3 className="text-2xl font-semibold" style = {{color: "rgb(55 65 81)", paddingTop: "3%", paddingBottom: "2%"}}>{item.heading1}</h3>
                            <p className="text-lg" style={{color: "#424242"}}>{item.heading2}</p>
                            {/* <Link href={item.exploreMore} className="exploreMoreLink">explore more</Link> */}
                            </div>
                        ))}
                    </div>
                    {/* <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto clipPath" />
                                        <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                        <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                        <div>
                                            <h3 className='text-base font-normal pt-6 opacity-75'>{items.name}</h3>
                                        </div>

                                        <div className="flex justify-between items-center py-6">
                                            <div className="flex gap-4">
                                                <h3 className="text-red text-22xl font-medium">{items.rating}</h3>
                                                <div className="flex">
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-medium">${items.price}</h3>
                                            </div>
                                        </div>

                                        <hr style={{ color: "#C4C4C4" }} />

                                        <div className="flex justify-between pt-6">
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider> */}
                </div>
            </div>

        );
    }
}
