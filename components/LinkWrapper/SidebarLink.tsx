"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink({children, href}: {children: React.ReactNode, href: string}) {
    const path = usePathname()
    return (
        <Link href={href} className={`${path === href ? "bg-sidebar-border" : "hover:bg-sidebar-accent"} trns pl-4 pr-8 py-2 rounded-lg`}>{children}</Link>
    )
}