import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../ui/Custom/Logo";

export default function Footer() {
    return (
        <section className="bg-secondary w-full px-4 py-6 space-y-4">
            <footer className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 w-11/12 mx-auto text-sm font-medium">
                <div className="text-chart-3">
                    <Logo />
                </div>
                <div className="flex flex-col gap-2">
                    <Link className="trns hover:text-gray-500 w-fit" href="/">Home</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link className="trns hover:text-gray-500 w-fit" href="/menu">Menu Items</Link>
                    <Link className="trns hover:text-gray-500 w-fit" href="/login">Login</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="text-xl font-semibold">Social Links</h5>
                    <span className="flex gap-2 text-xl">
                        <a className="trns hover:text-gray-500 w-fit" href="http://facebook.com" target="_blank"><FaFacebook /></a>
                        <a className="trns hover:text-gray-500 w-fit" href="http://instagram.com" target="_blank"><AiFillInstagram /></a>
                        <a className="trns hover:text-gray-500 w-fit" href="http://twitter.com" target="_blank"><FaSquareXTwitter /></a>
                    </span>
                </div>
            </footer>
            <p className="text-xs font-medium text-center">&copy; 2026 copyright | All rights are reserved by Fooddy</p>
        </section>
    )
}