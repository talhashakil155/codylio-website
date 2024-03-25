import Link from "next/link";
import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string[];
    icon: string[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/Linkedin.png',
        link: 'https://www.linkedin.com/company/codylio',
        width: 20
    },
    {
        imgSrc: '/assets/footer/facebook.png',
        link: 'https://www.facebook.com/people/Codylio/61557066286467',
        width: 20
    },
    {
        imgSrc: '/assets/footer/instagram.png',
        link: 'https://www.instagram.com/codylio_official/?igsh=MXB1bmE3OTkyaWZuZA%3D%3D&utm_source=qr',
        width: 20
    },
    {
        imgSrc: '/assets/footer/twitter.png',
        link: 'https://twitter.com/CodylioOfficial',
        width: 20
    },

]

const products: ProductType[] = [
    {
        id: 1,
        section: "Company",
        link: ['Home', 'Services', 'Testimonials', 'About Us'],
        icon: []
    },
    {
        id: 2,
        section: "Services",
        link: ['Custom Software Development', 'Web Apps', 'Mobile Apps', 'Data & AI', 'Graphic Designing'],
        icon: []
    }
    ,
    {
        id: 3,
        section: "Contact Us",
        link: ['+92-313-4488511', 'contact@codylio.com', "Gulberg II, Lahore, Punjab, Pakistan"],
        icon: ['/assets/footer/phone.png', '/assets/footer/email.png', '/assets/footer/location.png']
    }
]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="/assets/logo/codylio logo 1.png" alt="logo" width={214} height={66} />
                    </div>
                    <div className='flex' style={{ marginTop: "15px" }}>

                        {socialLinks.map((items, i) => (
                            <Link href={items.link} key={i}>
                                <div className="bg-white h-12 w-12 text-base rounded-full flex items-center justify-center footer-icons">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}


                {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black text-lg font-medium mb-9">{product.section}</p>
                        <ul>
                            {product.link.map((link: string, index: number) => (
                                <li key={index} className={'mb-5' + (product.id == 3 ? ' flex' : "")}>

                                    {product.id == 3 ?
                                        <Image src={product.icon[index]} alt="" width={18} height={2} style={{height:"fit-content", marginRight:"10px"}}/> :
                                        ""
                                    }

                                    {product.id == 1 ?
                                        <Link href="/" className="text-darkgray text-base font-normal mb-6 space-links">{link}</Link> :
                                        <p className="text-darkgray">{link}</p>
                                    }


                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* All Rights Reserved */}

            <div className='py-6 md:flex items-center justify-between border-t border-t-gray-blue'>
                <h4 className='text-dark-red opacity-75 text-sm text-center md:text-start font-normal'>@2024 | All rights reserved</h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                    <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default footer;
