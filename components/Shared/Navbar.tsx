import NavLink from "../LinkWrapper/NavLink";
import Logo from "../ui/Custom/Logo";
import Sidebar from "./sidebar";

export default async function Navbar() {
    return (
        <header className="bg-muted text-white w-full sticky top-0">
            <nav className="flex items-center justify-between w-11/12 mx-auto my-4 text-sm font-medium">
                <div className="text-chart-3">
                <Logo />
                </div>
                <div className="space-x-2">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/menu">Menu Items</NavLink>
                </div>
                <Sidebar />
            </nav>
        </header>
    )
}