"use client";
import Image from "next/image"
import Link from "next/link"
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import {motion} from "motion/react"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
        <header className="bg-gray-900 text-white justify-around items-center gap-5 flex-wrap px-[50px] py-1 border-b-2 md:flex hidden">
            
            <div className="flex items-center gap-5">
                <FaHome className="text-4xl text-gray-300"/>
                <motion.div
                    initial={{
                        opacity: 0,
                        top: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        top: 0
                    }}
                className=" text-gray-300">
                    <h1 className="mb-0 text-[12px] font-bold">Visit Our Location</h1>
                    <small className="text-white text-[10px]">250 Main Street, Lagos</small>
                </motion.div>
            </div>
            <div className="flex items-center gap-5">
                <FaPhone className="text-4xl text-gray-300"/>
                <div className="text-gray-300">
                    <h1 className="mb-0 text-[12px] font-bold">Give us a call</h1>
                    <small className="text-white text-[10px]">+23481234567890</small>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <FaEnvelope className="text-4xl text-gray-300"/>
                <div className="text-gray-300">
                    <h1 className="mb-0 text-[12px] font-bold">Send us Message</h1>
                    <small className="text-white text-[10px]" >massagealchemy@gmail.com</small>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <FaEnvelope className="text-4xl text-gray-300"/>
                <div className="text-gray-300">
                    <h1 className="mb-0 text-[12px] font-bold">Opening Hours</h1>
                    <small className="text-white text-[10px]">Mon - Fri: 8AM - 6PM</small>
                </div>
            </div>
        </header>

        <nav className="flex justify-between items-center flex-wrap px-[50px] py-3 bg-white shadow ">
            <Link href={""} className="flex items-center gap-5 font-bold">
                <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center">
                    <Image src={"/assets/logo.png"} width={50} height={50} alt="Logo" />
                </div>
                <span>Massage Alchemy</span>
            </Link>
 
            <div className="flex items-centr gap-5 flex-wrap">
                <Link href={"/"} className="text-gray-900">Home</Link>
                <Link href={"/services"} className="text-gray-900">Services</Link>
                <Link href={"/about"} className="text-gray-900">About</Link>
                <Link href={"/contact"} className="text-gray-900">contact</Link>
            </div>

            <Link href={"/appointment"} className="bg-gray-900 text-white py-2 px-5 rounded-md hover:bg-gray-700">Book Appointment</Link>
        </nav>
    </div>
  )
}

export default Navbar