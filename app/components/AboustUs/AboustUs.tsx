"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    icon: string;
    heading: string;
    description: string;
}

const companyValues: DataType[] = [
    {
        icon: '/assets/courses/design.png',
        heading: 'Timely Delivery',
        description: "We prioritize Timely Delivery, ensuring our clients receive their solutions promptly, meeting their deadlines with precision."
    },
    {
        icon: '/assets/courses/design.png',
        heading: 'Quality Driven',
        description: "We uphold rigorous standards throughout our development process, ensuring excellence in every product we deliver."
    },
    {
        icon: '/assets/courses/design.png',
        heading: 'Flexibility',
        description: "Flexibility is our hallmark, adapting swiftly to evolving needs, providing tailored solutions that meet diverse requirements."
    },
    {
        icon: '/assets/courses/design.png',
        heading: 'Innovation',
        description: "At the heart of our ethos lies Innovation, driving us to constantly explore new ideas and technologies, delivering cutting-edge solutions."
    },
    {
        icon: '/assets/courses/design.png',
        heading: 'On Demand POCs',
        description: "We excel in providing On Demand POCs (Proof of Concepts), offering rapid prototypes that showcase our capabilities and potential solutions."
    },
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}



export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
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
            <div className="py-10 sm:py-24 bg-paleblue" id="about-us">

                <div className='m-auto max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-48xl text-start font-semibold">What Makes Us Different?</h2>
                    {/* <div id="wrapper">
                        <div className="line-top"></div>
                        <div className="line-bottom"></div>
                    </div>                     */}
                    {/* <div className=''>
                        <div className='dashed line1'></div>
                        <div className='dashed line2'></div>
                        <div className='dashed line3'></div>
                    </div> */}
                    <div className="company-values">
                        {companyValues &&
                        companyValues.map((item, i) => (
                            <div key={i} className="company-values-item">
                                <Image src={item.icon} alt="etc" width={35} height={35} className="inline-block m-auto" />
                                <h3 className="text-2xl font-semibold" style = {{color: "rgb(55 65 81)", paddingTop: "2%", paddingBottom: "2%"}}>{item.heading}</h3>
                                <p className="text-lg" style={{color: "#424242"}}>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 md:my-10 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt="user-image" width={306} height={0} className="inline-block m-auto" />
                                        <div className="absolute right-[84px] bottom-[102px] bg-white rounded-full p-4">
                                            <Image src={'/assets/mentor/linkedin.svg'} alt="linkedin-image" width={25} height={24} />
                                        </div>
                                    </div>
                                    <div className="-mt-10">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
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
