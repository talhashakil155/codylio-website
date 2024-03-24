"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Specimen Jeanne",
        profession: 'CEO, Line Mark',
        comment: 'It was an amazing experience working with Codylio. The team is exceptional and suggested many new features that were helpful for our business.',
        imgSrc: '/assets/testimonial/logistics.png',
    },
    {
        name: "Faizan E Elahi",
        profession: 'COO, TYCO',
        comment: 'Great work. Our users are really satisfied with the new software.',
        imgSrc: '/assets/testimonial/agriculture.png',
    },
    {
        name: "Hassaan Shakil",
        profession: 'COO, Cars & Coffee',
        comment: "Highly impressed with Codylio's performance. From initial consultation to final delivery, their focus on quality and efficiency was evident. A trusted partner for our business growth.",
        imgSrc: '/assets/testimonial/car.png',
    },
    {
        name: "Abdul Salam",
        profession: 'CTO, Social Buddy',
        comment: "Timely delivery with perfect results as committed.",
        imgSrc: '/assets/testimonial/car.png',
    },
]

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: false,
            slidesToShow: 2.5,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2.5,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1.5,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className="pt-20 pb-10 sm:pb-32 lg:py-16" id="testimonial">
                <div className='mx-auto max-w-7xl py-4 px-8'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-48xl text-start font-semibold" style={{ paddingBottom: "3rem"}}>Success Stories</h2>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                {/* <div className={`bg-white m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                                    <div className="absolute top-[-45px]">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={100} height={100} className="inline-block" />
                                    </div>
                                    <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                        </div>
                                    </div>
                                </div> */}

                                <div className="testimonial" style={{ marginRight: "30px", borderRadius: "10px", marginBottom: "2rem", backgroundColor: "rgb(248, 248, 248)", padding: "10px", height: "30rem", display:"table" }}>
                                    {i == 3 ?
                                        <div style={{ display: "flex", backgroundColor: "rgb(250, 199, 255)", borderRadius: "10px", maxHeight: "14rem", width: "100%", height: "100%" }}>
                                            <div style={{marginLeft:"1.5rem", paddingTop:"3rem", paddingRight:"0.55rem"}}>
                                                <h1 style={{fontWeight:"600", fontSize:"1.5rem", fontStyle:"italic", color:"#c45fda"}}>Social Buddy</h1>
                                                <p style={{color:"#a72a2a", textDecoration:"underline"}}>Social Media Marketing Platform</p>
                                            </div>
                                            <Image src="/assets/testimonial/socialbuddy.png" alt="" width={200} height={700} style={{ borderRadius: "10px", maxHeight: "14rem", width: "8rem", margin: "0.5rem" }} />
                                        </div> :
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={900} height={1000} style={{ borderRadius: "10px", maxHeight: "14rem", height: "100%" }} />
                                    }
                                    <div className="flex">
                                        <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2' style={{ marginTop: "1.5rem" }}>{items.name}</h3>
                                        <div className="flex" style={{ marginLeft: "auto", paddingTop: "2rem", paddingRight: "1rem" }}>
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                        </div>
                                    </div>
                                    <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                    <p style={{ marginTop: "1rem" }}>{items.comment}</p>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
