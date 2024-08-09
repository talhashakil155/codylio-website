import React, { useState } from "react";
import Link from "next/link";

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
  { name: 'Projects', href: '', current: false, isDropdown: true },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {

  const [currentLink, setCurrentLink] = useState('/#/');

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
  };

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdownToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop the event from propagating to the drawer's close handler
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="navbar-drawer rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="grid space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              item.isDropdown ? (
                <div
                  key={item.name}
                  className="relative group inline-block align-middle"
                >
                  <button
                    onClick={handleDropdownToggle}
                    className={classNames(
                      'text-black navbar-links px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100 flex items-center'
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
                  {openDropdown && (
                  <div
                    className={`absolute mt-1 rounded-md shadow-lg `}
                    style={{backgroundColor: "#D5EFFA"}}

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
                )}
                </div>
              ) : (
                <Link
                key={item.name}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                style={{ paddingTop: "0.75rem" }}
              >
                <span
                  className={classNames(
                    item.href === currentLink ? 'underline-links text-black' : 'text-black',
                    'navbar-links px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100'
                  )}
                  aria-current={item.href ? 'page' : undefined}
                >
                  {item.name}
                </span>
              </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
