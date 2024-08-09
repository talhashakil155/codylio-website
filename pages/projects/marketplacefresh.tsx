import Navbar from '../../app/components/Navbar/index';
import Footer from '../../app/components/Footer/Footer';
import TestimonialDetails from "../../app/components/TestimonialDetails/TestimonialDetails"
import ProjectResults from "../../app/components/ProjectResults/marketplacefresh/ProjectResults"
import ProjectTechnologiesUsed from "../../app/components/ProjectTechnologiesUsed/marketplacefresh/ProjectTechnologiesUsed"
import ContactUs from "../../app/components/ContactUs/ContactUs"
import '../../app/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Marketplacefresh() {
  useEffect(() => {
    const navbarLinks = document.querySelectorAll('.navbar .navbar-links, .navbar-drawer .navbar-links');

    if (navbarLinks) {
      navbarLinks.forEach(link => {
        const element = link as HTMLElement;
        if (element.innerText === "Projects") {
          element.className += ' underline-links';
        }
        else {
          if (element.className.includes('underline-links')) {
            element.className = element.className.replace("underline-links", "").trim()
          }
        }
      });

      if (navbarLinks) {
        navbarLinks.forEach(link => {
          const element = link as HTMLElement;
          element.style.color = 'black';
        });
      }

      const navbarSideBarIcon = document.querySelector('.three-lines-navbar') as HTMLElement;

      if (navbarSideBarIcon) {
        navbarSideBarIcon.style.color = 'black';
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>Codylio</title>
        <meta name="description" content="A Software Company" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="512x512" href="/assets/logo/codylio-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/logo/codylio-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/logo/codylio-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/logo/codylio-16x16.png" />
      </Head>
      <main>
        <Navbar />
        <TestimonialDetails />
        <ProjectResults />
        <ProjectTechnologiesUsed />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

