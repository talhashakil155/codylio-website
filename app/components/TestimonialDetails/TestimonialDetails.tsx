"use client"
import { useEffect } from 'react';
import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialDetails() {
  useEffect(() => {
    const navbarLinks = document.querySelectorAll('.navbar .navbar-links');

    if(navbarLinks){
      navbarLinks.forEach(link => {
        const element = link as HTMLElement;
        element.style.color = 'black';
      });
    }

    const navbarSideBarIcon = document.querySelector('.three-lines-navbar') as HTMLElement;
    
    if(navbarSideBarIcon){
      navbarSideBarIcon.style.color = 'black';
    }

  }, []);

  const settings2 = {
    dots: true, // Enables navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb", // Custom class for dots
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 1,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ]
  };


  interface DataType {
    imgSrc: string;
  }

  const postData: DataType[] = [
    {
      imgSrc: '/assets/projects/marketplacefresh/Screenshot 2024-07-16 225211.png',
    },
    {
      imgSrc: '/assets/projects/marketplacefresh/GroceryMarketplace.png',
    },
    {
      imgSrc: '/assets/projects/marketplacefresh/Screenshot 2024-07-16 212354.png',
    },
    {
      imgSrc: '/assets/projects/marketplacefresh/Screenshot 2024-07-16 212229.png',
    },
    {
      imgSrc: '/assets/projects/marketplacefresh/Screenshot 2024-07-16 211914.png',
    },
    {
      imgSrc: '/assets/projects/marketplacefresh/Screenshot 2024-07-16 211945.png',
    },

  ]

  return (
    <div>
      <div className="testimonial-detail mx-auto max-w-7xl px-6 lg:px-8">
        <h1><b>About MarketPlaceFresh</b></h1>
        <div className="testimonial-desc flex mx-auto max-w-7xl py-20 px-4 lg:px-8">
          <div className="testimonial-desc1">
            <ul className="description" style={{ listStyleType: "disc", marginLeft: "20px", }}>
              <li>Grocery Marketplace in Australia with <b>16 stores</b> in different states</li>
              <li>Provide wide range of grocery items</li>
              <li>Provides fresh products directly from farms</li>
              <li>Developed a responsive online marketplace for a grocery company with 16 stores, unifying them on a <b>single platform.</b></li>
              <li><b>Streamlined inventory</b> management across all locations with a comprehensive solution.</li>
              <li>Implemented real-time tracking and efficient product categorization.</li>
              <li>Enabled home deliveries to improve customer convenience.</li>
              <li>Designed a user-friendly interface for seamless navigation.</li>
              <li>Integrated <b>Odoo</b> Sales, Inventory, POS and Accounting solutions</li>
              <li>Integrated secure payment options to enhance the shopping experience.</li>
              <li>Increased user satisfaction and boosted sales.</li>
            </ul>
          </div>
          <div className="custom-slider">
            <Slider {...settings}>
              {postData.map((image, index) => (
                <div key={index}>
                  <img src={image.imgSrc} width={1000} height={(1000 * 993) / 1924} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>

  );
}