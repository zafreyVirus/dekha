import Link from 'next/link';
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";
import Image from 'next/image';
import { link } from 'fs';

const Footer = () => {

    const services = [
        "Recruitment & Talent Acquisition",
        "Employee Training & Dev",
        "Organizational Development",
        "HR Strategy Consult",
        "Employee Relations",
    ];

    const usefulPages = [
        {page:"About Us", link: "/about"},
        {page: "Contact Us", link:"/contact"},
        {page: "Our Team", link: "/about"},
        {page: "Services", link: "/services"}
    ];


    return (
        <footer className="bg-deepblue text-white mt-12 pt-12 w-full">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                <Image src="/dekha_logo.png" alt="Dekha Logo" width={40} height={40} className="h-10 mb-4" />
                <p className="text-gray-300 mb-4">
                    Dekha HR Consultancy is a leading consultancy firm specializing in providing top-notch human.
                </p>
                </div>


                {/* Service Areas */}
                <div>
                <h2 className="text-lg font-semibold text-lightblue mb-4">Services Areas</h2>
                <ul>
                    {services.map((service) => (
                    <li key={service} className="flex gap-2 mb-2 hover:text-lightblue">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1aafe3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg><Link href="/services">{service}</Link>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Useful Pages */}
                <div>
                <h2 className="text-lg font-semibold text-lightblue mb-4">Useful Pages</h2>
                <ul>
                    {usefulPages.map(({page, link}) => (
                    <li key={page} className="flex gap-2 mb-2 hover:text-lightblue">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1aafe3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg><Link href={`${link}`}>{page}</Link>
                    </li>
                    ))}
                </ul>
                </div>


                {/* Office Contact */}
                <div>
                <h2 className="text-lg font-semibold text-lightblue mb-4">Office Contact</h2>
                <p className="flex gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1aafe3"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T480-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>Blantyre, M1 road, 500m after Mlambe Hospital, Lunzu
                </p>
                <p className="flex gap-2 items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1aafe3"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" /></svg> +265 888 76 96 95
                </p>
                <p className="flex gap-2 items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1aafe3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg> dekhahrconsultancy@gmail.com
                </p>
                <div className="flex space-x-4">

                    <Link href="https://web.facebook.com/people/Dekha-HR-Consultancy/61558495211866/?_rdc=1&_rdr#" className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full">
                    <RiFacebookFill />
                    </Link>
                    <Link href="#" className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full">
                    <RiInstagramLine />
                    </Link>

                </div>
                </div>
            </div>

            </div>



            {/* Copyright */}
            <div className="container mx-auto px-4 py-6 text-center text-sm border-t border-gray-700">
            <p>
                &copy; <Link href="/">{new Date().getFullYear()} <span className="text-lightblue">Dekha</span></Link>, All Right Reserved.
            </p>
            </div>
        </footer>
    );
};

export default Footer;