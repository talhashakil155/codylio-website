import React, { useState } from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/#/', current: true },
  { name: 'Services', href: '#services', current: false },
  { name: 'About Us', href: '#about-us', current: false },
  { name: 'Testimonials', href: '#testimonial', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {

  const [currentLink, setCurrentLink] = useState('/#/');

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
  };

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="grid space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
