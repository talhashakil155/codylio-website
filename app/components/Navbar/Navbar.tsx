import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#/', current: true },
    { name: 'Services', href: '#services', current: false },
    { name: 'About Us', href: '#about-us', current: false },
    { name: 'Testimonials', href: '#testimonial', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
    return (
        <Link href={href} passHref>
            <span
                onClick={onClick}
                className="px-3 py-4 text-lg font-normal"
            >
                {children}
            </span>
        </Link>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [currentLink, setCurrentLink] = useState('#/');

    const handleLinkClick = (href: string) => {
        setCurrentLink(href);
    };
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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

                                <div className="hidden lg:block m-auto">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <CustomLink
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => handleLinkClick(item.href)}
                                            >
                                                <span
                                                    className={classNames(
                                                        item.href === currentLink ? 'underline-links text-white' : 'text-white',
                                                        'navbar-links px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100'
                                                    )}
                                                    aria-current={item.href ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </span>
                                            </CustomLink>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* SIGNIN DIALOG */}

                            {/* <Signdialog /> */}


                            {/* REGISTER DIALOG */}

                            <Registerdialog />


                            {/* DRAWER FOR MOBILE VIEW */}

                            {/* DRAWER ICON */}

                            <div className='block lg:hidden'>
                                <Bars3Icon className="three-lines-navbar block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                            </div>



                        </div>
                    </div>
                </>
            </Disclosure>
                            {/* DRAWER LINKS DATA */}

                            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                                <Drawerdata />
                            </Drawer>
        </div>
    );
};

export default Navbar;
