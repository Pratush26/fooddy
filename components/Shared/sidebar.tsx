"use client"

import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import SidebarLink from "../LinkWrapper/SidebarLink";
import Image from "next/image";
import LogoutButton from "../Buttons/Logout";
import { ThemeToggle } from "../Buttons/Theme";

interface JwtPayload {
    _id: string;
    email: string;
    name: string;
    photo: string;
    role: string;
    iat: number;
    exp: number;
}

export default function Sidebar({ user }: { user: JwtPayload | null }) {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <section>
            <button onClick={() => setIsOpened(!isOpened)} className="cursor-pointer text-xl">
                {
                    isOpened ?
                        <RxCross2 />
                        :
                        <RxHamburgerMenu />
                }
            </button>
            <aside className={`fixed ${isOpened ? "translate-x-0" : "translate-x-full"} top-16 right-0 bg-sidebar flex flex-col justify-center gap-2 trns p-2 rounded-lg`}>
                {
                    user ?
                        <>
                            <div className="flex flex-col my-1 items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <Image src={user.photo} height={30} width={30} style={{ objectFit: "cover" }} alt="user image" className="rounded-full aspect-square" />
                                    <p>{user.name}</p>
                                </div>
                                <LogoutButton />
                            </div>
                            <SidebarLink href="/dashboard">Dashboard</SidebarLink>
                            {
                                user?.role === "admin" ?
                                    <>
                                        <SidebarLink href="/add-food">Add Food</SidebarLink>
                                        <SidebarLink href="/manage-food">Manage Food</SidebarLink>
                                        <SidebarLink href="/manage-order">Manage Order</SidebarLink>
                                    </>
                                    :
                                    <>
                                        <SidebarLink href="/cart">Check Cart</SidebarLink>
                                        <SidebarLink href="/my-orders">My Orders</SidebarLink>
                                        <SidebarLink href="/Track-order">Track Order</SidebarLink>
                                    </>
                            }
                        </>
                        :
                        <>
                            <SidebarLink href="/">Home</SidebarLink>
                            <SidebarLink href="/login">Login</SidebarLink>
                        </>
                }
                <SidebarLink href="/terms">Terms & Conditions</SidebarLink>
                <div className="sm:hidden flex flex-col gap-1">
                    <SidebarLink href="/about">About Us</SidebarLink>
                    <SidebarLink href="/contact">Contact Us</SidebarLink>
                    <SidebarLink href="/menu">Menu</SidebarLink>
                </div>
                <div className="p-2">
                <ThemeToggle />
                </div>
            </aside>
        </section>
    )
}