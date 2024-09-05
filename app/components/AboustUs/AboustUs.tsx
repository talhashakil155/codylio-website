"use client"
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
        icon: '/assets/mentor/time.png',
        heading: 'Timely Delivery',
        description: "We prioritize Timely Delivery, ensuring our clients receive their solutions promptly, meeting their deadlines with precision."
    },
    {
        icon: '/assets/mentor/quality2.png',
        heading: 'Quality Driven',
        description: "We uphold rigorous standards throughout our development process, ensuring excellence in every product we deliver."
    },
    {
        icon: '/assets/mentor/flexibility2.png',
        heading: 'Flexibility',
        description: "We adapt quickly to changing needs, offering personalized solutions that fit a wide range of requirements."
    },
    {
        icon: '/assets/mentor/innovation.png',
        heading: 'Innovation',
        description: "Innovation is at our core, pushing us to explore new ideas and technologies, and deliver advanced solutions."
    },
    {
        icon: '/assets/mentor/audit.png',
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
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-48xl text-start font-semibold"
                    style={{marginBottom: "1rem"}}
                    >What Makes Us Different?</h2>
                    <div className="company-values">
                        {companyValues &&
                        companyValues.map((item, i) => (
                            <div key={i} className="company-values-item">
                                <Image src={item.icon} alt="etc" width={50} height={50} className="inline-block m-auto" />
                                <h3 className="text-2xl font-semibold" style = {{color: "rgb(55 65 81)", paddingTop: "10%", paddingBottom: "2%"}}>{item.heading}</h3>
                                <p className="text-lg" style={{color: "#424242"}}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}
