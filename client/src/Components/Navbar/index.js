import React from "react";
// import {FaPizzaSlice} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown} from "react-icons/io";
import {RiSearchLine} from "react-icons/ri"

const MobileNav = () => {
    return (
        <>
        <div className="flex items-center justify-between w-full h--full md:hidden">
            <div className="w-24">
                <img 
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                alt="logo"
                className="w-full h-full"
                />
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-zomato-400 text-white font-medium py-2 px-3 rounded-full">Use App</button>
                {/* <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                    <FaPizzaSlice />
                </span> */}
                <div className="border p-1 text-zomato-400 w-12 h-12 rounded-full">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile" className="w-full h-full rounded-full object-cover" />
                </div>
            </div>

        </div>
        </>
    )
};

const LargeNav = () => {
    return (
        <>
        <div className="hidden lg:inline container px-20 mx-auto">
            <div className="hidden w-full items-center justify-around lg:flex">
                <div className="w-32">
                    <img 
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                    alt="logo"
                    className="w-full h-full"
                    />
                </div>
                <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
                    <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                        <span className="text-zomato-300">
                            <HiLocationMarker />
                        </span>
                        <input type="text" placeholder="Mumbai" className="focus:outline-none" />
                        <IoMdArrowDropdown />
                    </div>
                    <div className="flex w-full items-center gap-2">
                        <RiSearchLine />
                        <input type="text" placeholder="Search for restaurant, cusine or a dish" className="w-full focus:outline-none" />
                    </div>
                </div>
                <div className="relative w-16">
                    <div className="border p-1 border-gray-300 text-zomato-400 w-full h-16 rounded-full">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile" className="w-full h-full rounded-full" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

const Navbar = () => {
    return (
        <>
        <nav className="py-2 px-4 w-full bg-white shadow-md lg:shadow-none flex items-center">
            <MobileNav />
            <LargeNav />
        </nav>
        </>
    )
};

export default Navbar;