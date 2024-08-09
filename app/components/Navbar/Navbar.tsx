import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Registerdialog from "./Registerdialog";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    isDropdown: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/#/', current: true, isDropdown: false },
    { name: 'Services', href: '/#services', current: false, isDropdown: false },
    { name: 'About Us', href: '/#about-us', current: false, isDropdown: false },
    { name: 'Testimonials', href: '/#testimonial', current: false, isDropdown: false },
    { name: 'Projects', href: '/projects/marketplacefresh', current: false, isDropdown: true },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}


interface CustomLinkProps {
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string; // Add className prop
  }

  const CustomLink: React.FC<CustomLinkProps> = ({ href, onClick, children, className }) => {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    );
  };

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [currentLink, setCurrentLink] = useState('/#/');

    const handleLinkClick = (href: string) => {
        setCurrentLink(href);
    };
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [openDropdown, setOpenDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setOpenDropdown(!openDropdown);
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // if scrolling down, hide the navbar
                setShow(false);
            } else {
                // if scrolling up, show the navbar
                setShow(true);
            }

            // remember the current page location for the next move
            setLastScrollY(window.scrollY);
        }
    };

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);


    return (
        <div>
            <Disclosure as="nav" className={`navbar ${show ? 'translate-y-0' : '-translate-y-full'}`}>
                <>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex">
                        {/* LOGO */}

                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="navbar-logo hidden  w-full"
                                src={'/assets/logo/codylio logo 1.png'}
                                alt="dsign-logo"
                                style={{ display: "block" }}
                            />
                        </div>
                        <div className="relative flex h-16 lg:h-20 items-center justify-between" style={{ marginLeft: "auto" }}>
                            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">


                                {/* LINKS */}

                                <div className="block m-auto navbar-collapse">
                                    <div className="flex">
                                        {navigation.map((item) => (
                                            item.isDropdown ? (
                                                <div
                                                    key={item.name}
                                                    className="relative group inline-block align-middle"
                                                >
                                                    <button
                                                        onClick={handleDropdownToggle}
                                                        className={classNames(
                                                            'text-white navbar-links px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100 flex items-center'
                                                        )}
                                                    >
                                                        {item.name}
                                                        <svg
                                                            className={`w-4 h-4 ml-2 transition-transform transform ${openDropdown ? 'rotate-180' : ''}`}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className= {`absolute mt-1 bg-white rounded-md shadow-lg ${openDropdown?" block" : " hidden"}`}
                                                        
                                                    >
                                                        <ul className="whitespace-nowrap">
                                                            <li>
                                                                <Link href="/projects/marketplacefresh" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">
                                                                    MarketPlace Fresh
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/projects/logivex" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">
                                                                    Logivex
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/projects/tyco" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">
                                                                    TYCO - Rice Company
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => handleLinkClick(item.href)}
                                                    className={classNames(
                                                        item.href === currentLink ? 'underline-links text-white' : 'text-white',
                                                        'navbar-links px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100 inline-block align-middle'
                                                    )}
                                                    aria-current={item.href === currentLink ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Registerdialog />

                            <div className='hidden navbar-collapse-lines'>
                                <Bars3Icon className="three-lines-navbar block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                            </div>



                        </div>
                    </div>
                </>
            </Disclosure>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <Drawerdata />
            </Drawer>
        </div>
    );
};

export default Navbar;
